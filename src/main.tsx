import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";

// axios
import "@services/axios-global";

// global styles
import "@styles/index.css";

// redux
import { Provider } from "react-redux";
import store, { persistor } from "@store/store";
import { PersistGate } from "redux-persist/integration/react";

// render app
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
