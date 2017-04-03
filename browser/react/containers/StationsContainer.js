import {connect} from 'react-redux';
import Stations from '../components/Stations';


const convertSongsToStations = function (songsArr) {
  const stations = {};
  songsArr.forEach(song=> {
    const genre = song.genre;
    stations[genre] = stations[genre] || []
    stations[genre].push(song);
  })
  return stations;
}

function mapStateToProps(state) {
  return {
    stations: convertSongsToStations(state.songs)
  }
}

const StationsContainer = connect(mapStateToProps)(Stations);
export default StationsContainer;

// or for short: export default connect(mapStateToProps, mapDispatchToProps)(Stations)

