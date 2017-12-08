import React from "react";

class Watch extends React.PureComponent {
  renderSelected() {
    if (this.props.isSelected === true) {
      return <p>Selected</p>;
    }
    return null;
  }
  render() {
    return (
      <div onClick={this.props.onClick}>
        <p>{this.props.name}</p>
        {this.renderSelected()}
      </div>
    );
  }
}

export default Watch;
