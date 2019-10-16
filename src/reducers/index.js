import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

const songsReducer = () => {
  return [
    { id: 1, title: 'Song1', duration: '4:05' },
    { id: 2, title: 'Song2', duration: '5:05' },
    { id: 3, title: 'Song3', duration: '6:05' },
    { id: 4, title: 'Song4', duration: '7:05' },
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer
})