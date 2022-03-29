import './App.css';
import { Speakers } from './Components/speakers';
import { Menu } from './Components/topMenu';
import {AddSpeaker} from './Components/speakers/speakerForm';

function App() {
  return (
    <div className="App">
      <Menu />
      <AddSpeaker />
      <Speakers />
    </div>
  );
}

export default App;
