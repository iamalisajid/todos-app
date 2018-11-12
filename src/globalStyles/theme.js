import theme from 'styled-theming';

export const backGroundImage = theme('mode', {
  dark: '/dark-bg.jpg',
  light: '/bg.png',
});

export const bodyColor = theme('mode', {
  dark: 'white',
  light: 'black',
});

export const bulbImage = theme('mode', {
  dark: '/light-off.svg',
  light: '/light-on.svg',
});

export const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: '#a965cc', dark: 'black' },
  danger: { light: 'red', dark: 'darkred' },
  primary: { light: 'blue', dark: 'darkblue' },
  success: { light: 'green', dark: 'darkgreen' },
  warning: { light: 'orange', dark: 'darkorange' },
});

export const HeaderColor = theme('mode', {
  dark: '#275f7d',
  light: '#3cb5f9',
});
