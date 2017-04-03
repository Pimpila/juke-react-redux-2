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
    stations: convertSongsToStations(state.songs)
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);
export default StationsContainer;

// or for short: export default connect(mapStateToProps, mapDispatchToProps)(Stations)

