/// <reference path="foo.ts" />
'use strict';
namespace Main {
    'use strict';

    let foo: typeof Foo = require('exports?Foo!./foo');

    console.log(foo.bar); // 42
    console.log(22); // 42
}
