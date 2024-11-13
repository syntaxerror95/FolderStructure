import './App.css';
import Folder from './components/folder';
import folderData from './data/folderdata';

function App() {
  return (
    <div className="App">
      <Folder folderData={folderData}/>
    </div>
  );
}

export default App;
