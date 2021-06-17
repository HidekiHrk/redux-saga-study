import React from "react";
import { Provider } from "react-redux";
import RepositoryList from "./components/RepositoryList";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    </div>
  );
}

export default App;
