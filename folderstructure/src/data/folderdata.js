const folderData = {
    id: 0,
    name : 'root',
    isFolder: true,
    parentId: 0,
    items : [{
            id: 1,
            name: 'file1',
            isFolder: false,
            parentId: 0,
            items: []
        },
        {
            id: 2,
            name: 'file2',
            isFolder: false,
            parentId: 0,
            items: []
        },
        {
            id: 3,
            name: 'folder1',
            isFolder: true,
            parentId: 0,
            items: [{
                id: 4,
                name: 'folder2',
                isFolder: true,
                parentId: 3,
                items: [{
                        id: 6,
                        name: 'file4',
                        isFolder: false,
                        parentId: 4,
                        items: []
                    }]
                },
                {
                    id: 5,
                    name: 'file3',
                    isFolder: false,
                    parentId: 3,
                    items: []
            }]
        }]
}

export default folderData