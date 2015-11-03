$(function () {
	//$("#pop-images")
	$("#search-button").click(function () {
		$.ajax( {
			url: "https://api.imgur.com/3/image/aHVsqba",
				headers: {
					"Authorization": "Client-ID 60a9f235e6726aa"
				}
			}
		).done(function (result) {
			img = $('<img>').attr('src', result.data.link);
			console.log(img);
			$("#single-image").append(img);
			console.log(result.data.link);
		});

	});

});