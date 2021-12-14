import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import weightsReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = persistReducer(persistConfig, weightsReducer);

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
