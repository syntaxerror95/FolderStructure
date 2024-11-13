const folderData = {
    id: 0,
    name : 'root',
    isFolder: true,
    items : [{
            id: 1,
            name: 'file1',
            isFolder: false,
            items: []
        },
        {
            id: 2,
            name: 'file2',
            isFolder: false,
            items: []
        },
        {
            id: 3,
            name: 'folder1',
            isFolder: true,
            items: [{
                id: 4,
                name: 'file3',
                isFolder: true,
                items: [{
                        id: 6,
                        name: 'file4',
                        isFolder: false,
                        items: []
                    }]
                },
                {
                    id: 5,
                    name: 'file3',
                    isFolder: false,
                    items: []
            }]
        }]
}

export default folderData