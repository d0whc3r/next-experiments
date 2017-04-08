import React from 'react';
import { Link } from 'next-url-prettifier';
import { Router } from '../../routes';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  /*
   <ScrollingTechniques>
   <AppBar>
   <ToolBar>
   <div>Anything can go here, such as a material-ui ToolBar!</div>
   <nav>
   <Link href='/'><a>Home</a></Link> |
   <Link route={Router.linkPage('index')}><a>index2</a></Link> |
   <Link route={Router.linkPage('about')}><a>About</a></Link> |
   <Link route={Router.linkPage('a2')}><a>About 2</a></Link>
   <Link href='./a2'><a>About</a></Link>
   </nav>
   </ToolBar>
   <FlexibleSpace>
   <div>Anything can go here!</div>
   </FlexibleSpace>
   <TabBar>
   <nav>
   <Link href='/'><a>Home</a></Link> |
   <Link route={Router.linkPage('index')}><a>index2</a></Link> |
   <Link route={Router.linkPage('about')}><a>About</a></Link> |
   <Link route={Router.linkPage('a2')}><a>About 2</a></Link>
   <Link href='./a2'><a>About</a></Link>
   </nav>
   </TabBar>
   </AppBar>
   </ScrollingTechniques>
   */
  render() {
    return (
      <Tabs>
        <Tab
          icon={<FontIcon className="material-icons">home</FontIcon>}
          label="RECENTS"
        />
        <Tab
          icon={<FontIcon className="material-icons">print</FontIcon>}
          label="FAVORITES"
        />
      </Tabs>
    )
  }
}




