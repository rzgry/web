import Typography from 'typography';
import Sutro from 'typography-theme-sutro';
import theme from './theme';

Sutro.overrideThemeStyles = () => ({
  body: {
    backgroundColor: theme.background,
  },
  p: {
    color: theme.secondaryText,
  },
  'h1,h2,h4,h5,h6': {
    color: theme.primaryText,
  },
  a: {
    color: theme.link,
  },
  'a:hover': {
    color: theme.linkHover,
  },
});

const typography = new Typography(Sutro);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
