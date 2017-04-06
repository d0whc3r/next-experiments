import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

export default () => (
  <Layout title="Main page">
    <div>Hello World. <Link href='/about'><a>About</a></Link></div>
  </Layout>
)
