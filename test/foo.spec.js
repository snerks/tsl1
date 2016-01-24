/// <reference path="../typings/tsd.d.ts" />
// namespace Test.FooTests {
'use strict';
/* tslint:disable no-unused-variable */
const foo = require('exports?Foo!../src/foo');
import * as chai from 'chai';
// var chai = require('chai');
const expect = chai.expect;
describe('Foo', () => {
    describe('bar', () => {
        it('Should be 42', () => {
            // const sut = Foo;
            // const sut = foo;
            // console.log('in test');
            expect(foo.bar).to.equal(42);
        });
    });
});
// }
