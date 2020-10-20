import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = function (options) {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      embedVideo(data);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
