import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.id}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
            <div className="content">{song.title}</div>
          </div>
        </div>
      );
    })
  }

  render() {
    return <div className="ui devided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList);