# POC

Problem: When trying to export/re-export some generic components, I have the following error when running `yarn test`:

```
 FAIL  src/App.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/chris/prj/trash/test-exports/src/core/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){'use strict';import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';import _Object$keys from 'babel-runtime/core-js/object/keys';exports.__esModule = true;var _hocs = require('./hocs');_Object$keys(_hocs).forEach(function (key) {if (key === "default" || key === "__esModule") return;_Object$defineProperty(exports, key, { enumerable: true, get: function get() {return _hocs[key];} });});
                                                                                                          ^^^^^^

    SyntaxError: Unexpected token import

      3 | import Switch from 'react-router-dom/Switch';
      4 | import Home from './Home';
    > 5 | import { withDummy } from './core';
        |             ^
      6 | import './App.css';
      7 |
      8 | const App = () => (

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:403:17)
      at Object.<anonymous> (src/App.js:5:13)
      at Object.<anonymous> (src/App.test.js:1:125)

Test Suites: 1 failed, 1 total

```

If I change the exports to not use `export * from './foo'` everything works fine.
Tested the same example with CRA and it works fine, so I believe it's related with the babel-preset missing the export transforms.