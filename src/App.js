import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Container from "./Containers/Container/Container";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container />
      </Router>
    </Provider>
  );
}

export default App;
