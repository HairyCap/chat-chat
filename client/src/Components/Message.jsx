import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getMsgsQuery = gql`
  {
    msgs {
      content
      userId
      id
    }
  }
`;

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
    // console.log(this.props);
    const data = this.props.data;
    return data.loading
      ? "loading..."
      : data.msgs.map(m => {
          return m.userId === this.props.me ? (
            <MyMsg msg={m} key={m.id} />
          ) : (
            <YourMsg msg={m} key={m.id} />
          );
        });
  }
}

export default graphql(getMsgsQuery)(Message);
