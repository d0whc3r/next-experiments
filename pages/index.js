import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import RaisedButton from 'material-ui/RaisedButton';

export default class extends React.Component {
  render() {
    return (
      <Layout title="Main page">
        <div>Hello World. <Link href='/about'><a>About</a></Link></div>
        <RaisedButton label="Button" primary/>
        <li><Link href='/b' as='/a'><a>a</a></Link></li>
        <li><Link href='/a' as='/b'><a>b</a></Link></li>
      </Layout>
    );
  }
}
