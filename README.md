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

JSON logged via console.log and window.dump is sent to the default JSON file.

```javascript
window.dump( JSON.stringify( obj ) );

console.log( JSON.stringify( obj ) );
```

Alternatively, if an object is provided with a key and message, the message is sent to a file named according the the key value.

```javascript
var obj = {
	'key': 'myObj',
	'message': someObj
};

window.dump( JSON.stringify( obj ) );
```
