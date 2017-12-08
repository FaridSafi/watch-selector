import React from "react";
import Watch from "./Watch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as watchActions from "../../store/watch/actions";

class WatchSelector extends React.PureComponent {
  render() {
    return (
      <ul style={{ border: "1px solid black", margin: 20 }}>
        {this.props.watches.map(watch => (
          <li key={watch.id}>
            <Watch
              {...watch}
              isSelected={this.props.selectedWatch.id === watch.id}
              onClick={() => this.props.selectWatch(watch)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { watch } = state;
  return { selectedWatch: watch.selectedWatch };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectWatch: watchActions.selectWatch
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchSelector);
