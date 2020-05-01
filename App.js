import React, { useState } from "react";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { MyDrawer } from "./src/Stacks/TabStack";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    <AppLoading
      startAsync={bootstrap}
      onError={(err) => console.log(err)}
      onFinish={() => setIsReady(true)}
    />;
  }
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
}
