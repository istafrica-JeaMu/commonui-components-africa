import { computed, Ref } from 'vue';

export function useLiveCodeFor(
  component: string,
  propsAsJson: Ref<string>,
  slotContent?: HTMLElement | string,
) {
  const liveCode = computed(() => {
    const jsProps = propsAsJson.value ? JSON.parse(propsAsJson.value) : {};
    const indent = '  ';
    const newline = '\n';

    const propsFormatted = Reflect.ownKeys(jsProps)
      .map((key) => {
        const value = jsProps[key];
        if (value === null || value === undefined) return '';

        const formattedValue = formatValue(value);
        const hyphenatedKey = hyphenate(String(key));

        if (typeof value === 'boolean' && value) {
          return `${hyphenatedKey}`;
        } else if (key === 'modelValue') {
          return `v-model="${formattedValue}"`;
        } else if (typeof value === 'string') {
          return `${hyphenatedKey}="${formattedValue}"`;
        } else {
          return `:${hyphenatedKey}="${formattedValue}"`;
        }
      })
      .filter(Boolean)
      .join(newline + indent);

    const openingTag = `<${component}${propsFormatted ? newline + indent + propsFormatted : ''}>`;
    const closingTag = `</${component}>`;
    const content = slotContent ? newline + indent + slotContent + newline : '';

    return `${openingTag}${content}${closingTag}`;
  });

  function formatValue(val: any): string {
    if (typeof val === 'string') return val.replace(/"/g, '&quot;');
    if (typeof val !== 'object' || val === null) return String(val);

    return JSON.stringify(val, null, 2)
      .replace(/\n/g, '\n' + ' '.repeat(4))
      .replace(/"/g, "'")
      .replace(/'([^']+)':/g, '$1:');
  }

  function hyphenate(str: string): string {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }

  return { liveCode };
} 