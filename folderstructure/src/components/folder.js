import { useState } from 'react'
import '../style/folder.css'
import NewItem from './newItem'

const Folder = ({folderData}) => {
    const [expanded, setExpanded] = useState(false)
    const [newItem, setNewItem] = useState('')

    const handleFolderExpansion = () => {
        setExpanded(t => !t)
    }
    
    const handleNewItem = (e, type) => {
        e.stopPropagation()
        setExpanded(true)
        setNewItem(type)
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
                </span>
            {newItem && <NewItem type={newItem} setNewItem={handleCloseNewItem} />}
            </div>
            {expanded && folderData.items.map(item => <Folder folderData={item}/>)}
        </>
    ) : (
        <div className='file' style={{marginLeft: '10px'}}>
            <span>
                {`📁 ${folderData.name}`}
            </span>
        </div>
    )}
    </div>
}

export default Folder