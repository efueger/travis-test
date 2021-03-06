# Cubitt CQRS-graph
CQRS interface to cubitt-graph

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/uu-cubitt/graph/master/LICENSE)

## About

This package provides a CQRS interface to cubitt-graph, allowing for manipulation of the graph by Commands and Events.

## Installation

```bash
$ npm install cubitt-cqrs-graph
```

## Features

* CQRS Graph interface
* Transaction/Rollback/Commit support
* Auto-rollback on transaction failure

## Usage

The ```CQRSGraph``` class is the main entrypoint for consumers of this package. It is as simple as:

```javascript
var CQRSGraph = new CQRSGraph();
```
All available methods on this class are described in the [Code documentation](https://uu-cubitt.github.io/cqrs-graph/).

## Documentation

* [Code documentation](https://uu-cubitt.github.io/cqrs-graph/)
* [Design documentation](https://uu-cubitt.github.io/cqrs-graph/design/)

## For developers

To generate documentation run:
```bash
$ npm install --only=dev
$ node_modules/.bin/typedoc --out doc/ --module commonjs --readme README.md --target ES5 --mode file src/
```

## People

The original authors of Cubitt are Sander Klock and Thomas Ipskamp. The project is coordinated by [Jan Martijn van der Werf](http://www.uu.nl/staff/JMEMvanderWerf).

## License

[MIT](LICENSE)

## Changelog

[Changelog](changelog.md)
