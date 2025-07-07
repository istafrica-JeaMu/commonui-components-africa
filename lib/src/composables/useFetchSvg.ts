import { ref, Ref } from 'vue';

export type FetchSvg = {
  data: string;
  error: Error | null;
  response: Response | null;
};

/**
 * Composable to fetch SVG content from a URL
 */
export function useFetchSvg(url: string): {
  data: Ref<string>;
  error: Ref<Error | null>;
  response: Ref<Response | null>;
  isLoading: Ref<boolean>;
  fetch: () => Promise<void>;
} {
  const data = ref<string>('');
  const error = ref<Error | null>(null);
  const response = ref<Response | null>(null);
  const isLoading = ref<boolean>(false);

  const fetch = async (): Promise<void> => {
    if (!url) {
      error.value = new Error('URL is required');
      return;
    }

    isLoading.value = true;
    error.value = null;
    
    try {
      const res = await window.fetch(url);
      response.value = res;
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const svgText = await res.text();
      data.value = svgText;
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Unknown error occurred');
      data.value = '';
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    error,
    response,
    isLoading,
    fetch,
  };
} 