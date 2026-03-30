export const generateSlots = () => {
  const days = ["Mon Apr 7", "Tue Apr 8", "Wed Apr 9", "Thu Apr 10", "Fri Apr 11"];
  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  return days.flatMap((day) =>
    times
      .filter(() => Math.random() > 0.4)
      .slice(0, 3)
      .map((time) => ({ day, time, id: `${day}-${time}` }))
  );
};