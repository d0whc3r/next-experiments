const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: '/home'
  },
  {
    page: 'about',
    prettyUrl: '/about'
    // prettyUrl: ({lang = '', name = ''}) =>
    //   (lang === 'fr' ? `/bonjour/about/${name}` : `/hello/about/${name}`),
    // prettyUrlPatterns: [
    //   {pattern: '/hello/:name', defaultParams: {lang: 'en'}},
    //   {pattern: '/bonjour/:name', defaultParams: {lang: 'fr'}}
    // ]
  }, {
    page: 'a2',
    prettyUrl: '/about/a2'
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
