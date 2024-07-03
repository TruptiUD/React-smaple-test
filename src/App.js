import React, { Component } from "react";
import { DefaultState } from "./questions";

class App extends Component {
  constructor() {
    super();
    this.state = { originalList: DefaultState, finalScore: 0 };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(questionId, value) {
    const newARr = this.state.originalList.map((item) => {
      if (item.id === questionId) {
        item.answer = value;
      }
      return item;
    });
    let yesCount = newARr.filter((arr) => arr.answer === 1).length;
    this.setState({ originalList: newARr });
    this.setState({ finalScore: (yesCount / newARr.length) * 100 });
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <h1>Score : {this.state.finalScore}%</h1>
          </div>
          <h3 className="welcomeText">Welcome! Answer The questions Bellow ...</h3>
          <div>
            {this.state.originalList.map((que, index) => {
              return (
                <div key={"questionList" + index}>
                  <h4>{que.question}</h4>
                  <div>
                    <input
                      type="radio"
                      value="1"
                      name={"que1" + index}
                      onChange={(event) => {
                        this.onChangeValue(que.id, 1);
                      }}
                    />
                    {"Yes"}
                    <input
                      type="radio"
                      value="0"
                      name={"que1" + index}
                      onChange={(event) => {
                        this.onChangeValue(que.id, 0);
                      }}
                    />
                    {"No"}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
