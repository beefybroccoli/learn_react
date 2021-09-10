import React, { Component } from "react";
import "./App.css";
import News from "./News/News";

const user = {
  firstName: "Sam",
  lastName: "Chan",
  date: "(shared data)",
};

//create a 
const Context_API_Data = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
    };
  }

  render() {
    return (
      <Context_API_Data>
        <div className="containwer-fluid">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper indigo lighten-4">
                <a href="/" className="bran-logo center">
                  My Feed
                </a>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col s12">
              <News news={this.state.news} />
            </div>
          </div>
        </div>
      </Context_API_Data>
    );
  }
}

export default App;
