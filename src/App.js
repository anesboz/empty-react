// import "./App.css";
import { Provider } from 'react-redux' //connect redux with react
import store from "./store";
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <Provider store={store}>
      <FirstComponent />
    </Provider>
  );
}

export default App;
