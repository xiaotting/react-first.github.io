import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
// const name = "React";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender1",
      },
    ],
    data: [],
  };

  // 生命周期 挂载
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      }),
    });
  };

  // 提交form表单
  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const { characters, data } = this.state;
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}></Form>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
