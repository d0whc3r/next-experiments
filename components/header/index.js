import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
      <nav id="navigationbar">
        <Link href='/'><a>Home</a></Link> | <Link href="index"><a>index</a></Link> | <Link
        href='/about'><a>/About</a></Link> | <Link href='./about'><a>./About</a></Link> | <Link
        href='about'><a>About</a></Link>
      </nav>
    )
  }
}
