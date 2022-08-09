/*to import instantsearch widgets */
import { configure } from 'instantsearch.js/es/widgets/';
const { algoliasearch, instantsearch } = window;
/*to connect to dotenv file where I'll create variables assigned to private information */
require('dotenv').config();

/*assigning variable to that from dotenv file */
let adminAPIKey = process.env.AdminAPIKey;

/*initialising instantsearch object with my credentials */
const searchClient = algoliasearch(
  'TDG7BN376S',
  'fcc8761932f3ce9ec5dca510f7d0d9e0'
);
/*admin api key credentials */
var client = algoliasearch(
  'TDG7BN376S',
  adminAPIKey,
  {protocol: 'https'}
);

/* initialising index*/
const index = client.initIndex('ebook_chapters');

/*the settings for the index */
index.setSettings({
  attributesToSnippet: [
    'content:10',
    'text'
  ]
}).then(() => {
  
});
/*the index to search through */
const search = instantsearch({
  indexName: 'ebook_chapters',
  searchClient,
  
});
/*method to add the instantsearch widgets */
search.addWidgets([
  /*search box widgets */
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Type in a chapter or word"
  }),
  /*to snippet the text attribute of my index */
  configure({
    attributesToSnippet: ['text'],
  }),
  /*hits/results widgets */
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div>
<article class="separator">
<a href="{{link}}">
  <h1>{{#helpers.highlight}}{ "attribute": "chapter" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.snippet}}{ "attribute": "text" }{{/helpers.snippet}}</p>
</article>
<div>
`,
empty: '',
    },
  }),
  /*hits per page */
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  
 // instantsearch.widgets.pagination({
 //   container: '#pagination',
 // }), 
]);
/*method to run the API */
search.start();