import React, { Component } from "react";
import WatchLarge from "./components/watch/WatchLarge";
import WatchSelector from "./components/watch/WatchSelector";
import { createStore, combineReducers } from "redux";
import * as reducers from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <WatchLarge />
          <WatchSelector
            watches={[
              { id: 1, name: "BLACK BAY STEEL" },
              { id: 2, name: "NORTH FLAG" }
            ]}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
