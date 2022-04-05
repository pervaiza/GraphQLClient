import './App.css';
import { Speakers } from './Components/speakers';
import { Menu } from './Components/topMenu';
const App = () => {
  return (
    <div className="App">
      <Menu />
      <Speakers />
    </div>
  );
};
export default App;
