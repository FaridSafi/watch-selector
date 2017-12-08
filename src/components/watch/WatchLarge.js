import React from "react";
import { connect } from "react-redux";

class WatchLarge extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid black", margin: 20 }}>
        <p>Selected watch:</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { watch } = state;
  return {
    ...watch.selectedWatch
  };
}

export default connect(mapStateToProps)(WatchLarge);
