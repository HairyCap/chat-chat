import React, { Component } from "react";

function MyMsg(props) {
  return (
    <div className="msg2">
      <span className="placeHolder" />
      <p className="text-me">{props.msg.content}</p>
    </div>
  );
}

function YourMsg(props) {
  return (
    <div className="msg2">
      <p className="text-you">{props.msg.content}</p>
      <span className="placeHolder" />
    </div>
  );
}

class Message extends Component {
  render() {
    return this.props.msg.user === this.props.me ? (
      <MyMsg {...this.props} />
    ) : (
      <YourMsg {...this.props} />
    );
  }
}

export default Message;
