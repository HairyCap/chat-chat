import React, { Component } from "react";
import InputForm from "./Components/InputForm";
import "./App.css";
import "./Components/Message";
import Message from "./Components/Message";

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
        },
        {
          id: 2,
          content: `111 arranging described. Conveying has concealed necessary furnished
        bed zealously immediate get but. Terminated as middletons or by
        instrument. Bred do four so your felt w`,
          user: "HairyCap1"
        },
        {
          id: 3,
          content: `112 arranging described. Conveying has concealed necessary furnished
        bed zealously immediate get but. Terminated as middletons or by
        instrument. Bred do four so your felt w`,
          user: "HairyCap1"
        },
        {
          id: 4,
          content: `113 arranging described. Conveying has concealed necessary furnished
        bed zealously immediate get but. Terminated as middletons or by
        instrument. Bred do four so your felt w`,
          user: "HairyCap"
        },
        {
          id: 5,
          content: `114 arranging described. Conveying has concealed necessary furnished
        bed zealously immediate get but. Terminated as middletons or by
        instrument. Bred do four so your felt w`,
          user: "HairyCap"
        }
      ],
      me: "HairyCap"
    };
    this.chatContent = React.createRef();
  }

  scrollToBottom = () => {
    this.chatContent.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="App">
        <div className="chatContent">
          {this.state.msgs.map(m => {
            return <Message msg={m} me={this.state.me} key={m.id} />;
          })}
          <div ref={this.chatContent} />
        </div>
        <InputForm send={this.send} />
      </div>
    );
  }

  send = msg => {
    msg.id = this.state.msgs.length + 1;
    const state = { ...this.state };
    state.msgs.push(msg);
    this.setState(state);
  };
}

export default App;
