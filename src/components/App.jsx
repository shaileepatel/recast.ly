import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0],
    };
  }
  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  onSearchClick(event) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: $(event.target).prev().val(),
      max: 5,
    };
    this.props.search(options, (resultVideos) => {
      this.setState({videos: resultVideos, currentVideo: resultVideos[0]});
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search = {this.props.search} onSearchClickHandler = {this.onSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videos} onClickHandler={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: '',
      max: 5,
    };
    this.props.search(options, (resultVideos) => {
      this.setState({videos: resultVideos, currentVideo: resultVideos[0]});
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
