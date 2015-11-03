$(function () {

	$("#search-button").click(function () {
		$.getJSON(
			// URL
			"https://api.imgur.com/3/image/{id}",

			// parameters
			{
				q: $("#search-term").val(),
				api_key: "60a9f235e6726aa"
			}
		).done(function (result) {
			console.log(result.data..............);
		});
	});

});