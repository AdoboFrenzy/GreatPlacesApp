import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import placesReducer from "./store/reducers/places";

import PlacesNavigator from "./navigation/PlacesNavigator";

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
