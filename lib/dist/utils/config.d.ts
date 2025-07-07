declare let config: {
    locale: string;
    BaseSchedule: {
        snapToClosestInterval: number;
        displayWeekNumbers: boolean;
        hourHeight: number;
        startHour: number;
        endHour: number;
        maxHeight: undefined;
        getFreeDropTimes: () => never[];
        type: string;
    };
};
export { config as default };
export declare const setOptions: (options: any) => void;
