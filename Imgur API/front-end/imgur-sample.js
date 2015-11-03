$(function () {

	$("#search-button").click(function () {
		$.ajax( {
			url: "https://api.imgur.com/3/image/2bzOUrt",
				headers: {
					"Authorization": "Client-ID 60a9f235e6726aa"
				}
			}
		).done(function (result) {
			img = $('<img>').attr('src', result.data.link);
			console.log(img);
			$("#image-list").append(img);
			console.log(result.data.link);
		});

	});

});