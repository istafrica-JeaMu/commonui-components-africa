let e = {
  locale: "en-UK",
  BaseSchedule: {
    snapToClosestInterval: 15,
    // Default value added
    displayWeekNumbers: !0,
    hourHeight: 92,
    startHour: 0,
    endHour: 24,
    maxHeight: void 0,
    getFreeDropTimes: () => [],
    type: "day"
  }
};
const o = (t) => {
  e = { ...e, ...t };
};
export {
  e as default,
  o as setOptions
};
