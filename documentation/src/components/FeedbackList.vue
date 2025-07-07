<script setup lang="ts">
import { ref, computed } from 'vue';

type FeedbackItem = {
  id: string;
  component: string;
  feedback: string;
  rating: number;
  date: string;
  helpful: number;
};

type FeedbackListProps = {
  component?: string;
};

const props = withDefaults(defineProps<FeedbackListProps>(), {
  component: undefined,
});

const feedbacks = ref<FeedbackItem[]>([
  {
    id: '1',
    component: 'RuneButton',
    feedback: 'Great component! Very easy to use and customize.',
    rating: 5,
    date: '2024-01-15',
    helpful: 12,
  },
  {
    id: '2',
    component: 'RuneButton',
    feedback: 'Could use more variant options.',
    rating: 4,
    date: '2024-01-10',
    helpful: 8,
  },
]);

const filteredFeedbacks = computed(() => {
  if (props.component) {
    return feedbacks.value.filter(f => f.component === props.component);
  }
  return feedbacks.value;
});

const averageRating = computed(() => {
  if (filteredFeedbacks.value.length === 0) return 0;
  const sum = filteredFeedbacks.value.reduce((acc, f) => acc + f.rating, 0);
  return (sum / filteredFeedbacks.value.length).toFixed(1);
});

const newFeedback = ref('');
const newRating = ref(5);

const submitFeedback = () => {
  if (newFeedback.value.trim()) {
    const feedback: FeedbackItem = {
      id: Date.now().toString(),
      component: props.component || 'General',
      feedback: newFeedback.value,
      rating: newRating.value,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
    };
    feedbacks.value.unshift(feedback);
    newFeedback.value = '';
    newRating.value = 5;
  }
};

const markHelpful = (id: string) => {
  const feedback = feedbacks.value.find(f => f.id === id);
  if (feedback) {
    feedback.helpful++;
  }
};
</script>

<template>
  <div class="feedback-list">
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">Community Feedback</h3>
      <div class="flex items-center space-x-4 text-sm text-gray-600">
        <span>{{ filteredFeedbacks.length }} reviews</span>
        <span>★ {{ averageRating }}/5</span>
      </div>
    </div>

    <!-- Add feedback form -->
    <div class="bg-gray-50 p-4 rounded-lg mb-6">
      <h4 class="font-medium mb-3">Share your feedback</h4>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium mb-1">Rating</label>
          <select v-model="newRating" class="border rounded px-2 py-1">
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Feedback</label>
          <textarea
            v-model="newFeedback"
            placeholder="Share your experience with this component..."
            class="w-full border rounded px-3 py-2 text-sm"
            rows="3"
          />
        </div>
        <button
          @click="submitFeedback"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Submit Feedback
        </button>
      </div>
    </div>

    <!-- Feedback items -->
    <div class="space-y-4">
      <div
        v-for="feedback in filteredFeedbacks"
        :key="feedback.id"
        class="border rounded-lg p-4 bg-white"
      >
        <div class="flex items-start justify-between mb-2">
          <div class="flex items-center space-x-2">
            <div class="text-yellow-500">
              {{ '★'.repeat(feedback.rating) }}{{ '☆'.repeat(5 - feedback.rating) }}
            </div>
            <span class="text-sm text-gray-500">{{ feedback.date }}</span>
          </div>
          <span class="text-xs text-gray-400">{{ feedback.component }}</span>
        </div>
        <p class="text-sm text-gray-700 mb-3">{{ feedback.feedback }}</p>
        <div class="flex items-center justify-between">
          <button
            @click="markHelpful(feedback.id)"
            class="text-xs text-gray-500 hover:text-gray-700"
          >
            👍 Helpful ({{ feedback.helpful }})
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 