// Generator: https://cimdalli.github.io/mui-theme-generator/
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import * as Colors from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator'

export default () => {
  let overwrites = {
    spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 64,
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopDrawerMenuItemHeight: 48,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56
    },
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: '#2196F3',
      primary2Color: '#1976D2',
      primary3Color: '#BBDEFB',
      accent1Color: '#FF5722',
      accent2Color: '#FFCCBC',
      accent3Color: '#9e9e9e',
      textColor: 'rgba(0, 0, 0, 0.87)',
      secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
      alternateTextColor: '#ffffff',
      canvasColor: '#ffffff',
      borderColor: '#e0e0e0',
      disabledColor: 'rgba(0, 0, 0, 0.3)',
      pickerHeaderColor: '#00bcd4',
      clockCircleColor: 'rgba(0, 0, 0, 0.07)',
      shadowColor: 'rgba(0, 0, 0, 1)'
    }
  };
  // console.log('theme!', getMuiTheme(baseTheme, overwrites));
  return getMuiTheme(baseTheme, overwrites);
}
