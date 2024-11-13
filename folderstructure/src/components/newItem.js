import { useState } from "react"
const NewItem = ({type, setNewItem}) => {
    const [val, setVal] = useState('')

    const handleBlur = () => {
        setNewItem('')
    }

    return <div>
        {type === 'folder' ? '🗂' : '📁'} 
        <input type={'text'} value={val} onChange={e => setVal(e.target.value)} autoFocus onBlur={handleBlur}/>
    </div>
}

export default NewItem