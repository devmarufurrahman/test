import React from "react";
import "./card.css";


class Card extends React.Component {
  render() {
    return (
      <>
        <div style={{
            backgroundColor:"blueviolet",
            margin:"15px"
        }}>
          {this.props.h2}
          <img src={this.props.Img} />
        </div>
      </>
    );
  }
}

export default Card;
