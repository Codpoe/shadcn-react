import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const lightTheme = create({
  base: 'light',
  brandTitle: 'shadcn-react',
  appBg: 'hsl(0 0% 100%)',
  appPreviewBg: 'hsl(0 0% 100%)',
  appContentBg: 'hsl(0 0% 100%)',
  appBorderColor: 'hsl(240 5.9% 90%)',
  colorPrimary: 'hsl(0 0% 100%)',
  colorSecondary: 'hsl(240 5.9% 10%)',
  textColor: 'hsl(240 10% 3.9%)',
  textMutedColor: 'hsl(240 3.8% 46.1%)',
});

addons.setConfig({
  theme: lightTheme
});
