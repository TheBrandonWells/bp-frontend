import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import '../styles/index.scss';

//components
import MainComponent from "./components/Main.js";
import configureStore from "./store.js";

const store = configureStore();

ReactDOM.render(<Provider store={store}>
                <MainComponent />
              </Provider>, document.getElementById("app"));
