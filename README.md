# testdatatables


https://datatables.net/examples/data_sources/ajax.html

 https://github.com/DataTables/DataTables/tree/master/media/images

 cros problem:
-----
 from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, http

 My crystal ball says that you are loading the model using either file:// or C:/, which stays true to the error message as they are not http://

So you can either install a webserver in your local PC or upload the model somewhere else and use jsonp and change the url to http://example.com/path/to/model

