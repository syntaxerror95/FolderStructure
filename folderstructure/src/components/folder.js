import { useState } from 'react'
import '../style/folder.css'
import NewItem from './newItem'

const Folder = ({folderData, addItem, deleteItem, updateItem}) => {
    const [expanded, setExpanded] = useState(false)
    const [newItem, setNewItem] = useState('')

    // console.log("FOlder --> folderData : ", folderData)

    const handleFolderExpansion = () => {
        setExpanded(t => !t)
    }
    
    const handleNewItem = (e, type) => {
        e.stopPropagation()
        setExpanded(true)
        setNewItem(type)
    }

    const handleDeleteItem = (e) => {
        e.stopPropagation()
        deleteItem(folderData.parentId, folderData.id)
    }

    const handleUpdate = (e) => {
        e.stopPropagation()
        updateItem(folderData.parentId, folderData.id, "NewFileName")
    }

    const handleCloseNewItem = () => {
        setNewItem('')
    }

    return <div style={{marginLeft: '10px '}}>{folderData.isFolder ? 
    (
        <>
            <div className='folder' style={{marginLeft: '10px'}} onClick={handleFolderExpansion} >
                <span>
                    {`🗂 ${folderData.name}`}
                    <button type={'button'} onClick={e => handleNewItem(e, 'file')} >{`➕file`}</button>
                    <button type={'button'} onClick={e => handleNewItem(e, 'folder')} >{`➕folder`}</button>
                    <button type={'button'} onClick={e => handleDeleteItem(e)}>{`➖`}</button>
                </span>
            {newItem && <NewItem folderData={folderData} parentId={folderData.id}  type={newItem} handleCloseNewItem={handleCloseNewItem} addItem={addItem}/>}
            </div>
            {expanded && folderData.items.map(item => <Folder folderData={item} addItem={addItem} deleteItem={deleteItem} updateItem={updateItem}/>)}
        </>
    ) : (
        <div className='file' style={{marginLeft: '10px'}}>
            <span>
                {`📁 ${folderData.name}`}
                <button type={'button'} onClick={e => handleDeleteItem(e)}>{`➖`}</button>
                <button type={'button'} onClick={e => handleUpdate(e)}>{`rename`}</button>
            </span>
        </div>
    )}
    </div>
}

export default Folder