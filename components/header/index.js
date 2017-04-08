import React from 'react';
import { Link } from 'next-url-prettifier';
import { Router } from '../../routes';

export default class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  /*
   <nav>
   <Link href='/'><a>Home</a></Link> |
   <Link route={Router.linkPage('index')}><a>index2</a></Link> |
   <Link route={Router.linkPage('about')}><a>About</a></Link> |
   <Link route={Router.linkPage('a2')}><a>About 2</a></Link>
   <Link href='./a2'><a>About</a></Link>
   </nav>
   */
  render() {
    return (
      <nav id="navigationbar">
        <Link href='/'><a>Home</a></Link> |
        <Link route={Router.linkPage('index')}><a>index2</a></Link> |
        <Link route={Router.linkPage('about')}><a>About</a></Link> |
        <Link route={Router.linkPage('a2')}><a>About 2</a></Link>
        <Link href='./a2'><a>About</a></Link>
      </nav>
    )
  }
}




