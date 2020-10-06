import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  // reducers go here
});
export type RootState = ReturnType<typeof rootReducer>;
