import { createTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
  type: 'dark',
  primary: {
    main: '#ffcd00',
    contrastText: '#242526',
  },
  background: {
    default: '#3d3d3d',
  },
  text: {
    primary: '#ffcd00',
  },
};

const theme = createTheme({
  palette,
});

export default theme;
