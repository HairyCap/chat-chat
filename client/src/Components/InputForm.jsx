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

  // componentDidMount() {
  //   this.focusInput();
  // }
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
          //手机键盘跳出，视图大小调整后滚动,在移动端FireFox测试200毫秒延迟成功率较高（Mi6）
          onFocus={() => setTimeout(this.props.scroll, 200)}
          //手机键盘点击输入框，滚动到底部
          onClick={() => this.props.scroll()}
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
