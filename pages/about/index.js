import React from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';
import Cat from '../../images/cat.svg';

export default () => (
  <Layout>
    <Cat/>
    About us
    <Link href={{ pathname: './a2' }}><a>aa</a></Link>
  </Layout>
)
