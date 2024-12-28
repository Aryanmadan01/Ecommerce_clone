// import { createStore } from "redux";
// import rootReducers from "./reducer";

// const store  = createStore(rootReducers);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
