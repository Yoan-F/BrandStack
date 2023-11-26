window._wq = window._wq || [];
_wq.push({ id: 'x6qw5f9icn', onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});

$("#play").click(function () {
    _wq.push({
        id: "x6qw5f9icn", onReady: function (video) {
            video.play();
            video.unmute();
        }
    });
})