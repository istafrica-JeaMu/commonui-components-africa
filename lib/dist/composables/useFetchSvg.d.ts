import { Ref } from 'vue';
export type FetchSvg = {
    data: string;
    error: Error | null;
    response: Response | null;
};
/**
 * Composable to fetch SVG content from a URL
 */
export declare function useFetchSvg(url: string): {
    data: Ref<string>;
    error: Ref<Error | null>;
    response: Ref<Response | null>;
    isLoading: Ref<boolean>;
    fetch: () => Promise<void>;
};
