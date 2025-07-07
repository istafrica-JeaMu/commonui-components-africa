let config = {
  locale: 'en-UK',
  BaseSchedule: {
    snapToClosestInterval: 15, // Default value added
    displayWeekNumbers: true,
    hourHeight: 92,
    startHour: 0,
    endHour: 24,
    maxHeight: undefined,
    getFreeDropTimes: () => [],
    type: 'day',
  },
};

export { config as default };

export const setOptions = (options: any) => {
  config = { ...config, ...options };
}; 