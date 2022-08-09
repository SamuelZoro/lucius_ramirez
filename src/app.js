const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'TDG7BN376S',
  'fcc8761932f3ce9ec5dca510f7d0d9e0'
);

const search = instantsearch({
  indexName: 'ebook_chapters',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.panel({ templates: { header: attribute } })(
        instantsearch.widgets.refinementList
      )({
        container,
        attribute,
      });
    },
    widgets: [],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
