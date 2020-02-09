## Browserlist

Gatsby uses [browserlist](https://github.com/browserslist/browserslist) together with [babel-preset-env](https://blog.jakoblind.no/babel-preset-env/) to automatically provide polyfills for your target audience.

The default already provides polyfills for IE11 because it targets:

```{
   "browserslist": [">0.25%", "not dead"]
 }
```

If you enter [this query in browserl.ist](https://browserl.ist/?q=%3E0.25%25%2C+not+dead) you will see IE11 is supported (because it is at 1.43% global usage).

In index.js we use a runtime alert function which uses arrow functions
and the prototype.array.find() method which is not available in IE11.

Building the production build will prvide with polyfills and a working IE11 site.

See the Gatsby [browser support documentation page](https://www.gatsbyjs.org/docs/browser-support.) for more information.

