# ironSource.atom Session SDK for JavaScript

[![License][license-image]][license-url]

atom-session-javascript is the official [ironSource.atom](http://www.ironsrc.com/data-flow-management) SDK for Web Browsers.

## Change Log
### v1.0.0
- Basic features: 
    - sessionID & userID added to all events
    - sessionID generate randomly
    - userID generate randomly (if not set)
    - sessionID updates in 30 min in idle (by default)

## Example
```js
"use strict";

// Need to include Atom SDK

var options = {
    endpoint: "https://track.atom-data.io/",
    auth: "",
    debug: true,
    userID: "test_name"
};

var session = new IronSourceAtom.Session(options); 

session.track("test", "{\"test\": \"test1\"}")

session.flush(null, function (results) {
    console.log(results)
})
```

## License
[MIT](LICENSE)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE