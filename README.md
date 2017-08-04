Example programming demonstrating using [forcefeed][1] SSE API in
javascript inside a browser.

Notice that in order to use this example program, your browser should
support SSE (which any modern browser, except IE should).

Also, you cannot run this using a `file://` scheme since browsers
prevent [cross-origin][2] requests from `file://` origins. You should
serve the contents of this repository in a web server and see the
results from there.

You can see this example in action [here][3].

[1]: http://www.forcefeed.ir/
[2]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[3]: http://www.forcefeed.ir/docs/javascript
