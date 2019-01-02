import React, { Component } from "react";

class InputFprm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: {
        user: "HairyCap",
        content: ""
      }
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.focusInput();
  }
  componentDidUpdate() {
    this.focusInput();
  }
  focusInput = () => {
    this.inputRef.current.focus();
  };
  update = value => {
    const state = { ...this.state };
    state.msg.content = value;
    this.setState(state);
  };

  send = e => {
    e.preventDefault();
    if (this.state.msg.content) {
      this.props.send({ ...this.state.msg });
      this.update("");
    }
  };

  render() {
    return (
      <form className="msg">
        <input
          type="text"
          onChange={e => this.update(e.target.value)}
          onFocus={() => this.props.scroll()}
          value={this.state.msg.content}
          ref={this.inputRef}
        />
        <button onClick={this.send}>
          <span role="img">send</span>
        </button>
      </form>
    );
  }
}

export default InputFprm;
