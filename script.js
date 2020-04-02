function download() {
  url = $("input[name=url]").val() + "&__a=1";

  $.getJSON(url, {}).done(function(data) {
    media = data["graphql"]["shortcode_media"];

    if (media.is_video) window.open(media.video_url, "_blank");
    else window.open(media.display_url, "_blank");
  });
}
