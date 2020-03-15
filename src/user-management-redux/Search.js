import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={e => {
          this.props.getKeyword(e.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProps = distpatch => {
  return {
    getKeyword: keyword => {
      let action = {
        type: "SEARCH",
        keyword
      };
      distpatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
