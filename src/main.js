/// <reference path="foo.ts" />
'use strict';
var Main;
(function (Main) {
    'use strict';
    var foo = require('exports?Foo!./foo');
    console.log(foo.bar); // 42
    console.log(22); // 42
})(Main || (Main = {}));
