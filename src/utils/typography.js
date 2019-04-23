import Typography from 'typography';
import Sutro from 'typography-theme-sutro';

// https://coolors.co/3b3f47-8aa399-f2f2f2-7d84b2-7688a7
const customTheme = {
  background: '#F2F2F2',
  primaryText: '#8297B9',
  secondaryText: '#3B3F47',
  link: '#7688A7',
  linkHover: '#B4C3DC',
};

Sutro.overrideThemeStyles = () => ({
  body: {
    backgroundColor: customTheme.background,
  },
  p: {
    color: customTheme.secondaryText,
  },
  'h1,h2,h4,h5,h6': {
    color: customTheme.primaryText,
  },
  a: {
    color: customTheme.link,
  },
  'a:hover': {
    color: customTheme.linkHover,
  },
});

const typography = new Typography(Sutro);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
