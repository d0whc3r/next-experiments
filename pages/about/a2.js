import React from 'react';

export default class extends React.Component {
  static getInitialProps() {
    return { title: 'About new title' }
  }

  render() {
    return (
      <div title="About page">
        About us2
      </div>
    );
  }
}
