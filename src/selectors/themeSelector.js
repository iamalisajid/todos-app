export const selectTheme = (state) => {
  if (state.lightMode) return { mode: 'light' };
  return { mode: 'dark' };
};
export const selectMode = (state) => state.lightMode;
