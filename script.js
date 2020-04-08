$(".urlButton").hide();

function download() {
  $(".urlButton").hide();
  url = $("input[name=url]").val() + "&__a=1";

  $.getJSON(url, {})
    .done(function (data) {
      media = data["graphql"]["shortcode_media"];

      if (media.is_video) urlDownload = media.video_url;
      else urlDownload = media.display_url;

      $(".urlButton").show();
    })
    .fail(function () {
      alert("Url not found, please try copy a valid link.");
    });
}

function reset() {
  $(".urlButton").hide();
  $("input[name=url]").val("");
}

function downloadProcess() {
  // Then somewhere in your code
  $("#showProgress").modal("show");
  new jsFileDownloader({
    url: urlDownload,
    process: process,
  })
    .then(function () {
      $("#showProgress").modal("hide");
      // Called when download ended
    })
    .catch(function (error) {
      // Called when an error occurred
      alert("Something went wrong, please check your internet connection.");
    });
}

function process(event) {
  if (!event.lengthComputable) return; // guard
  var downloadingPercentage = Math.floor((event.loaded / event.total) * 100);
  // what to do ...
  $(".progress-bar").css("width", downloadingPercentage + "%");
  $(".progress-bar").text(downloadingPercentage + "%");
}
