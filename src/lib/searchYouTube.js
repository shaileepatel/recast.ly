import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTubeNotDebounced = function (options, callback = ()=>{}) {
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
      console.log(data);
      callback(data.items);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

var searchYouTube = _.debounce(searchYouTubeNotDebounced, 500);

export default searchYouTube;
