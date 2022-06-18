import logo from '../logo.svg';
import '../app2.css';

import NavBar from './NavBar'
import TitleBoxes from './TitleBoxes'

function App() {
  return (
    <div className="App">
      <body>
        <NavBar />
        <div class="container">
          <TitleBoxes />
        </div>

      </body>

    </div>
  );
}

export default App;
