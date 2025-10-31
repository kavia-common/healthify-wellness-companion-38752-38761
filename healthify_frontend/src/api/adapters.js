export const adaptDashboard = (data) => ({
  steps: data.steps ?? 0,
  calories: data.calories ?? 0,
  sleepHours: data.sleepHours ?? 0,
  water: data.water ?? 0,
  mood: data.mood ?? 0,
  weeklyActivity: data.weeklyActivity ?? []
});
