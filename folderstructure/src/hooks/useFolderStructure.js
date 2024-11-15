import { useState } from "react"
const useFolderStructure = (tree) => {
    const [data, setData] = useState(tree)

    const _dfs = (root, parentId, callbackFunc, callbackArgs=undefined) => {
        if (root.isFolder){ // folder
            if(root.id === parentId){ // Found Folder to insert
                return {...root, items: callbackFunc(callbackArgs, root)}
            }
            else { // Recursive call
                return {...root, items: root.items.map(item => _dfs(item, parentId, callbackFunc, callbackArgs))}
            }
        }
        else {
            return root
        }
    }

    const _insterNode = (node, root) => {
        return [{...node, parentId: root.id}, ...root.items]
    }

    const _deleteNode = (id, root) => {
        return root.items.filter(item => item.id !== id)
    }

    const _updateNode = ([id, newName], root) => {
        return root.items.map(item => item.id === id ? ({...item, name: newName}) : item)
    }

    const addItem = (name, parentId, isFolder) => {
        const updatedNode = _dfs(data, parentId, _insterNode, {
                                id: parseInt(new Date().getTime()),
                                name,
                                isFolder,
                                items: []
                            })
        setData(updatedNode)
    }

    const deleteItem = (parentId, id) => {
        const updatedNode = _dfs(data, parentId, _deleteNode, id)
        setData(updatedNode)
    }

    const updateItem = (parentId, id, newName) => {
        const updatedNode = _dfs(data, parentId, _updateNode, [id, newName])
        setData(updatedNode)
    }

    return [
        data,
        addItem,
        deleteItem,
        updateItem
    ]
}

export default useFolderStructure