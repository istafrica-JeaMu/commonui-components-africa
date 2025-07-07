<script setup lang="ts">
import ColorsList from '@src/components/ColorsList.vue';
import Canvas from '@src/components/theme/Canvas.vue';

</script>

# Theme

## Using Tailwind CSS Colors

Tailwind CSS provides a highly customizable color system that you can use in your project. By default, Tailwind includes a comprehensive set of color palettes, each with a range of light to dark shades.

To use a color in your CSS, you can use the `text-{color}-{shade}` or `bg-{color}-{shade}` classes. For example, `text-red-500` applies a medium red color to the text, and `bg-blue-200` applies a light blue background color.

```html
<div class="text-red-500 bg-blue-200">
    This is a div with red text on a light blue background.
</div>
```

<ColorsList /> 