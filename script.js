$(".urlButton").hide();

function download() {
  url = $("input[name=url]").val() + "&__a=1";

  $.getJSON(url, {}).done(function(data) {
    media = data["graphql"]["shortcode_media"];

    if (media.is_video) urlDownload = video_url;
    else urlDownload = media.display_url;

    $(".urlButton").attr("href", urlDownload);
    $(".urlButton").show();
  });
}
