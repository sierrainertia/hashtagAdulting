import React, { Component } from "react";
import ToDoList from "./ToDoList";
import "./app.css";
import axios from "axios";
class App extends Component {
  constructor() {
    super();

    this.state = {
      giphy: [],
    };
  }

  getGiphyImage = () => {
    // make API call to get motivational giphy
    axios({
      method: "GET",
      url:
        "https://api.giphy.com/v1/gifs/random?api_key=KMdcSvJCsU4GSHGjdYnTVOfeQkyqAIJ9&tag=motivational&rating=pg",
      dataResponse: "json",
    }).then((response) => {
      console.log(response);
      this.setState({
        imageUrl: response.data.data.image_url,
        title: response.data.data.title,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Hashtag Adulting</h1>
            <p>Use this app to record all your tedius adult tasks.</p>
            <p>
              <span className="remember">Remember: </span>The best time to do
              something you don't want to do is yesterday.
            </p>
          </div>
        </header>
        <main>
          <div className="wrapper">
            {/* To do list sections */}
            <div className="toDoListSections">
              <ToDoList
                className="errandToDoList"
                listHeader="Errands I cannot ignore anymore:"
                placeHolder="Type in an errand"
                inputId="errand"
              />
              <ToDoList
                className="callToDoList"
                listHeader="People I need to call reluctantly"
                placeHolder="Type in someone to call"
                inputId="call"
              />
            </div>

            {/* Motivation giphy section */}
            <section className="motivation">
              <button onClick={this.getGiphyImage}>
                I need some motivation!
              </button>
              <div className="motivationImage">
                <img src={this.state.imageUrl} alt={this.state.title} />
              </div>
            </section>
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Copyright&copy; Sierra MacDonald | Created at Juno College </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
