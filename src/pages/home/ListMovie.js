import React, { Component } from "react";
import Movie from "./../../components/Movie";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

class ListMovie extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }

  renderHTML = () => {
    return this.props.listMovie.map(item => {
      return <Movie key={item.maPhim} movie={item} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>ListMovie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    }
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(ListMovie);
