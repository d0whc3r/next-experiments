import React from 'react';
import Layout from "../../components/layout";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'About new title';
  }

  render() {
    return (
      <Layout title={this.title}>
        About us2
      </Layout>
    );
  }
}
