import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import Title from '../components/Title';
import PlayPause from '../components/PlayPause';
import Timer from '../components/Timer';
import Controls from '../components/VideoPlayerControls';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/Spinner';
import Volume from '../components/Volume';
import FullScreen from '../components/FullScreen';
import { formattedTime } from '../../libs/Utils';

import { connect } from 'react-redux';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 0,
    lastVolume: 0,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration,
    });
  }
  handleTimeUpdate = (event) => {
    this.video = event.target;
    this.setState({
      currentTime: this.video.currentTime,
    })
  }
  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = (event) => {
    this.setState({
      loading: true,
    })
  }
  handleSeeked = (event) => {
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
    this.setState({
      volume: event.target.value,
    })
  }
  handleFullScreenClick = (event) => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen();
    } else {
      document.exitFullscreen();
    }
  }
  setRef = (element) => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    media: state.get('data').get('entities').get('media').get(props.id),
  }
}

export default connect(mapStateToProps)(VideoPlayer);