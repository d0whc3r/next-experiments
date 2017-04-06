import Head from 'next/head';

export default class Layout extends React.Component {
  static getInitialProps({ children, title = 'This is the default title', stylesheet = '' }) {
    const style = stylesheet ? (
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    ) : '';
    return { children, title, style };
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          { this.props.style }
        </Head>
        { this.props.children }
      </div>
    );
  }
}
