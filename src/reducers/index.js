import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Song1', duration: '4:05' },
    { title: 'Song2', duration: '5:05' },
    { title: 'Song3', duration: '6:05' },
    { title: 'Song4', duration: '7:05' },
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
  selectedSong: selectedSongReducer
})