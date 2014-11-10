# vui-karma-json-log-reporter

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

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them. See the valence-ui [Code Style wiki page](https://github.com/Desire2Learn-Valence/valence-ui-helpers/wiki/Code-Style) for details.
