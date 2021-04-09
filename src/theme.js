import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4056F4',
    },
    secondary: {
      main: '#FD3939',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#24292E',
      dark: '#1A1C21',
      ligth: '#34343C',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
      disabled: '#CECECE',
      labelligth: '#A2A2A2',
    },
  },
  typography: {
    body2: {
      fontFamily: `Montserrat, sans-serif`,
    },
    caption: {
      fontSize: '.9rem',
      fontWeight: 300,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
      },
      sizeSmall: {
        padding: 4,
      },
    },
  },
})

export default theme
