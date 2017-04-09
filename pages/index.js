import React from 'react';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';

import Layout from '../components/layout';

export default class extends React.Component {
  render() {
    return (
      <Layout title="Main page">
        <div>Hello World. <Link href='/about'><a>About</a></Link></div>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button>Button</Button>
        <Button size='small' color='green'>
          <Icon name='download' />
          Download
        </Button>
      </Layout>
    );
  }
}
