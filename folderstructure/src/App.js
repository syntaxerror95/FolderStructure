import './App.css';
import Folder from './components/folder';
import folderData from './data/folderdata';
import useFolderStructure from './hooks/useFolderStructure';

function App() {
  const [data, addItem, deleteItem, updateItem] = useFolderStructure(folderData)
  return (
    <div className="App">
      <Folder folderData={data} addItem={addItem} deleteItem={deleteItem} updateItem={updateItem}/>
    </div>
  );
}

export default App;
