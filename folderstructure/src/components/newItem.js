import { useState } from "react"
const NewItem = ({folderData, parentId, type, handleCloseNewItem, addItem}) => {
    const [val, setVal] = useState('')

    // console.log("NewItem -> folderData : ", folderData)

    const handleBlur = () => {
        handleCloseNewItem()
    }

    const handleChange = (e) => {
        setVal(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13 && val){
            addItem(val, parentId, type === 'folder')
        } 
    }

    return <div>
        {type === 'folder' ? '🗂' : '📁'} 
        <input type={'text'} value={val} onChange={e => handleChange(e)} onKeyDown={e => handleEnter(e)} autoFocus onBlur={handleBlur}/>
    </div>
}

export default NewItem