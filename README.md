# testdatatables


https://datatables.net/examples/data_sources/ajax.html

 https://github.com/DataTables/DataTables/tree/master/media/images

------------------------------------------------------------
 cros problem:

error message:
 from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, http

 My crystal ball says that you are loading the model using either file:// or C:/, which stays true to the error message as they are not http://

So you can either install a webserver in your local PC or upload the model somewhere else and use jsonp and change the url to http://example.com/path/to/model

--------------------------------------------------------------
GET:

$(document).ready(function() {
	$('#example').DataTable( {
		"processing": true,
		"serverSide": true,
		"ajax": "scripts/server_processing.php"
	} );
} );

--------------------------------------------------------------
POST:

$(document).ready(function() {
	$('#example').DataTable( {
		"processing": true,
		"serverSide": true,
		"ajax": {
			"url": "scripts/post.php",
			"type": "POST"
		},
		"columns": [
			{ "data": "first_name" },
			{ "data": "last_name" },
			{ "data": "position" },
			{ "data": "office" },
			{ "data": "start_date" },
			{ "data": "salary" }
		]
	} );
} );

-------------------------------------------------------------
https://datatables.net/examples/data_sources/js_array

https://editor.datatables.net/examples/simple/server-side-processing.html

https://medium.com/@indiaaeevans/server-side-rendering-with-jquery-datatables-62c585288cc4

render image
https://datatables.net/reference/option/columns.render

https://www.datatables.net/examples/advanced_init/column_render.html

"columnDefs": [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    return data +' ('+ row[3]+')';
                },
                "targets": 0
            },
            { "visible": false,  "targets": [ 3 ] }
        ]

Bruno Nash (38)

index.html
example.html
example2.html

icon image
https://icons8.com/icon/27/checkmark
https://www.rapidtables.com/web/html/html-codes/htm-code-check.html

http://blog.creative-tim.com/web-design/free-dashboard-templates/
