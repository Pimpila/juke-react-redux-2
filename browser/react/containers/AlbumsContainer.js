import {connect} from 'react-redux';
import Albums from '../components/Albums';


function mapStateToProps(state) {
 return {
   albums: state.albums
 }
}

const AlbumsContainer = connect(mapStateToProps)(Albums)
export default AlbumsContainer;
