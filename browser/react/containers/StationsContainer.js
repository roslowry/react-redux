import React, {Component} from 'react';
import store from '../store';
import Stations from '../components/Stations';
import {connect} from 'react-redux';

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};


const mapStateToProps = function (state) {
  return {
    stations: convertSongsToStations(state.playlist.songs);
  };
}
function mapDispatchToProps (dispatch) {

	return {}
};


const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)



// function StationsContainer () {
// 	return <Stations />
// }

// function connect (fnToMapStateToProps, fnToMapDispatchToProps) {
// 	return function (presentationalComponent) {
// 		class containerComponent extends React.Component {
// 			render () {
// 				return React.createElement(presentationalComponent);
// 			}
// 		}
// 		return containerComponent;
// 	}
// }

export default StationsContainer;