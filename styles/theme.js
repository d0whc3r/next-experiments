// Generator: https://cimdalli.github.io/mui-theme-generator/

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator'

export default () => {
  let overwrites = {
    palette: {
      primary1Color: Colors.red500,
      primary2Color: Colors.blue700,
      accent1Color: Colors.cyan500
    }
  };
  return getMuiTheme(baseTheme, overwrites);
}
