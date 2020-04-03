$(".urlButton").hide();
$(".urlReset").hide();

function download() {
  $(".urlButton").hide();
  url = $("input[name=url]").val() + "&__a=1";

  $.getJSON(url, {})
    .done(function(data) {
      media = data["graphql"]["shortcode_media"];

      if (media.is_video) urlDownload = media.video_url;
      else urlDownload = media.display_url;

      $(".urlButton").attr("href", urlDownload);
      $(".urlButton").show();
      $(".urlReset").show();
    })
    .fail(function() {
      alert("Url not found, please try copy a valid link.");
    });
}

function reset() {
  $(".urlButton").hide();
  $(".urlReset").hide();
  $("input[name=url]").val("");
}
