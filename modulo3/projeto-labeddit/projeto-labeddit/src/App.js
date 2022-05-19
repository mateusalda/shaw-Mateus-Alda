import GlobalState from './Global/GlobalState';
import {Router} from './router/Router'

function App() {
  return (
      <GlobalState>
          <Router/>
      </GlobalState>
  );
}

export default App;
