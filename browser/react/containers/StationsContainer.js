import {connect} from 'react-redux';
import Stations from '../components/Stations';
import React, {Component} from 'react';

const convertSongsToStations = function (songsArr) {
  const stations = {};
  songsArr.forEach(song=> {
    const genre = song.genre;
    stations[genre] = stations[genre] || []
    stations[genre].push(song);
  })
  console.log('stations', stations)
  return stations;
}

function mapStateToProps(state) {
  return {
    stations: convertSongsToStations(state.songs),
    genres: someFunc
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations)

