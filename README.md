# vui-karma-json-log-reporter
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

A simple Karma reporter for logging json messages from matchers and specs.

## Installation

Install from NPM:
```shell
npm install vui-karma-json-log-reporter
```

## Usage

Required Karma configuration includes typical wire-up via Karma plug-ins and reporters, and optionally specifying the destination path for JSON output:

```javascript
{
	"jsonLogReporter": {
		"outputPath": "test/some/path/"
	},
	"plugins": [
		"vui-karma-json-log-reporter"
	],
	"reporters": ["json-log"]
}
```

JSON logged via console.log and window.dump is sent to the default JSON file 'logFile_*timestamp*.json'.

```javascript
window.dump( JSON.stringify( obj ) );

console.log( JSON.stringify( obj ) );
```

Alternatively, if an object is provided with a name and object, the object is logged to a file according to the specified name, ex. 'myObjectName.json'.

```javascript
var obj = {
	'name': 'myObjectName',
	'object': objectToLog
};

window.dump( JSON.stringify( obj ) );
```

**Note**: if the target file exists with an object, the new object is merged with the existing object and the existing file is updated.



[npm-url]: https://www.npmjs.org/package/vui-karma-json-log-reporter
[npm-image]: https://badge.fury.io/js/vui-karma-json-log-reporter.png
[ci-image]: https://travis-ci.org/Brightspace/karma-json-log-reporter.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/karma-json-log-reporter
