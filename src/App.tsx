import React, { Component } from "react";

interface Todo {
  title: string;
  content: string;
}

interface Props {}
interface State {
  toDoList: Todo[];
  textTitle: string;
  textContent: string;
}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      textTitle: "",
      textContent: "",
      toDoList: [{ title: "Reactのお勉強", content: "TypeScriptが難しい" }]
    };
  }

  addToDo = () => {
    this.setState(state => ({
      toDoList: state.toDoList.concat({
        title: this.state.textTitle,
        content: this.state.textContent
      })
    }));
  };

  deleteToDo = (i: number) => {
    let list = this.state.toDoList.slice();
    list.splice(i, 1);
    this.setState(state => ({
      toDoList: list
    }));
  };

  render() {
    const domList = this.state.toDoList.map((m, i) => {
      return (
        <li key={i}>
          タイトル：{m.title} <br />
          内容：{m.content} <br />
          <button onClick={e => this.deleteToDo(i)}>削除</button>
        </li>
      );
    });

    return (
      <div>
        <p>TodoList</p>
        <div>
          タイトル：
          <input
            type="text"
            value={this.state.textTitle}
            onChange={e => this.setState({ textTitle: e.target.value })}
          />
          内容：
          <input
            type="text"
            value={this.state.textContent}
            onChange={e => this.setState({ textContent: e.target.value })}
          />
        </div>
        <div onClick={e => this.addToDo()}>追加</div>
        <ul>{domList}</ul>
      </div>
    );
  }
}
