import React, { Component } from "react";
import ToDoList from "./ToDoList";
import "./app.css";
import axios from "axios";
import ListItem from "./ListItem";
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
      this.setState({
        imageUrl: response.data.data.image_url,
        title: response.data.data.title,
      });
      // wait so image has a chance to load
      setTimeout(() => {
        // got this from: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        // scroll to bottom of page when giphy appears to see full image on screen
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Hashtag Adulting</h1>
            <p>
              Use this app to record all your tedius adult tasks. Click the "I
              need motivation" to get some motivation!
            </p>
            <p>
              <span className="remember">Remember: </span>The best time to do
              something you don't want to do is yesterday.
            </p>
          </div>
        </header>
        <main>
          <div className="wrapper">
            {/* Top Section */}
            <div className="topSection">
              {/* contact to do list section */}
              <ToDoList
                className="contactToDoList"
                listHeader="People I need to contact, reluctantly:"
                placeHolder="Type in someone"
                inputId="contact"
              />
              {/* daily checklist section */}
              <div className="checkList">
                <h2>Daily CheckList:</h2>
                <ul>
                  <ListItem id="item1" listItemText="Showered" />
                  <ListItem
                    id="item2"
                    listItemText="Took vitamins (gummies count)"
                  />
                  <ListItem id="item3" listItemText="Ate a vegetable" />
                  <ListItem
                    id="item4"
                    listItemText="Didn't set anything on fire"
                  />
                  <ListItem
                    id="item5"
                    listItemText="Didn't eat cereal for dinner"
                  />
                </ul>
              </div>
            </div>
            {/* errand to do list */}
            <ToDoList
              className="errandToDoList"
              listHeader="Errands I cannot ignore anymore:"
              placeHolder="Type in an errand"
              inputId="errand"
            />

            {/* Motivation giphy section */}
            <section className="motivation">
              <button onClick={this.getGiphyImage} className="mainButton">
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
