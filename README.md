<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isUNCPath

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [UNC][unc] path.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-unc-path
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var isUNCPath = require( '@stdlib/assert-is-unc-path' );
```

#### isUNCPath( value )

Tests if a `value` is a [UNC][unc] path.

```javascript
var bool = isUNCPath( '\\\\server\\share\\foo\\bar\\baz' );
// returns true

bool = isUNCPath( '/foo/bar/baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isUNCPath = require( '@stdlib/assert-is-unc-path' );

var bool;
var path;

path = '\\\\server\\share\\foo\\bar\\baz:a:b';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz::b';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz:a';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\\\share';
bool = isUNCPath( path );
// returns false

path = '\\\\\\\\server\\share';
bool = isUNCPath( path );
// returns false

path = 'beep boop \\\\server\\share';
bool = isUNCPath( path );
// returns false

path = '\\\\server';
bool = isUNCPath( path );
// returns false

path = '\\';
bool = isUNCPath( path );
// returns false

path = '';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz::';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:b:c';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\';
bool = isUNCPath( path );
// returns false

path = '//server/share';
bool = isUNCPath( path );
// returns false

path = '/foo/bar';
bool = isUNCPath( path );
// returns false

path = 'foo/bar';
bool = isUNCPath( path );
// returns false

path = './foo/bar';
bool = isUNCPath( path );
// returns false

path = '/foo/../bar';
bool = isUNCPath( path );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-unc-path
```

</section>

<section class="usage">

### Usage

```text
Usage: is-unc-path [options] [<path>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-unc-path '\\\\server\\share\\foo'
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '\\\\server\\share\\foo' | is-unc-path
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-unc-path.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-unc-path

[test-image]: https://github.com/stdlib-js/assert-is-unc-path/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-unc-path/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-unc-path/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-unc-path?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-unc-path.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-unc-path/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-unc-path/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-unc-path/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-unc-path/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-unc-path/main/LICENSE

[unc]: https://msdn.microsoft.com/en-us/library/gg465305.aspx

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
