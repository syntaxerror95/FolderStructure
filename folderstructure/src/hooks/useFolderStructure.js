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

    // const dfsInsert = (root, node, parentId) => {
    //     const currentNode = root
    //     console.log("currentNode : ", currentNode)
    //     if (currentNode.isFolder){ // folder
    //         if(currentNode.id === parentId){ // Found Folder to insert
    //             return {...currentNode, items: [node, ...currentNode.items]}
    //         }
    //         else {  // Recursive call
    //             return {...currentNode, items: currentNode.items.map(item => dfsInsert(item, node, parentId))}
    //         }
    //     }
    //     else {
    //         return currentNode
    //     }
    // }

    const addItem = (name, parentId, isFolder) => {
        // const updatedNode = dfsInsert(data, {
        //     id: parseInt(new Date().getTime()),
        //     name,
        //     isFolder,
        //     items: []
        // }, parentId)

        // console.log("updatedNode : ", updatedNode)
        const updatedNode = _dfs(data, parentId, _insterNode, {
                                id: parseInt(new Date().getTime()),
                                name,
                                isFolder,
                                items: []
                            })
        setData(updatedNode)
        // console.log("root : ", root)
        // console.log("name : ", name)
        // console.log("parentId : ", parentId)
        // console.log("isFolder : ", isFolder)
        // console.log("data.id : ", data.id)
        // if(parentId == data.id){ // Initial case
        //     // data.items.unshift({
        //     //    id: parseInt(new Date()),
        //     //    name,
        //     //    isFolder,
        //     //    items: []
        //     // })

        //     // return tree
        //     setData({
        //         ...data,
        //         items: [{
        //             id: parseInt(new Date()),
        //             name,
        //             isFolder,
        //             items: []
        //         },
        //         ...data.items
        //         ]
        //     })
        // }
        // else {

        //     setData({
        //         ...data,
        //         items : data.items.map(item => {
        //             if (item.isFolder && item.id === parentId){
        //                 return {...item, items: [{
        //                     id: parseInt(new Date()),
        //                     name,
        //                     isFolder,
        //                     items: []
        //                 }, ...item.items]}
        //             }})
        //         })
        //     }
        // else if (!root){
        //     const newData = {...data, items : data.items.map(item => addItem(item, name, parentId, isFolder)) }
        //     setData(newData)
        // }
        // else if(root && parentId == root.id){
        //     root.items.unshift({
        //         id: parseInt(new Date()),
        //         name,
        //         isFolder,
        //         items: []
        //      })
 
        //      return root
        // }
        // else if( root && root.isFolder){
        //     return {...root, items : root.items.map(item => addItem(item, name, parentId, isFolder)) }
        //     console.log("Folder")
        //     // setData({...root, items : root.items.map(item => addItem(item, name, parentId, isFolder)) })
        // }

        // return root
        // setData(root)
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