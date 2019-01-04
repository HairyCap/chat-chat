import React, { Component } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import Message from "./Components/Message";
import ApolloCliten from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloCliten({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgs: [
        {
          id: 1,
          content: `110 arranging described. Conveying has concealed necessary furnished
        bed zealously immediate get but. Terminated as middletons or by
        instrument. Bred do four so your felt w`,
          user: "HairyCap"
        }
      ],
      me: "5c2f843debc59d32d4497086"
    };
    this.chatContent = React.createRef();
  }

  scrollToBottom = () => {
    this.chatContent.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  send = msg => {
    msg.id = this.state.msgs.length + 1;
    const state = { ...this.state };
    state.msgs.push(msg);
    this.setState(state);
  };

  render() {
    // console.log(this.props);
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="chatContent">
            <Message me={this.state.me} />
            <div ref={this.chatContent} />
          </div>
          <InputForm send={this.send} scroll={this.scrollToBottom} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
