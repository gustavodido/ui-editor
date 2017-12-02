class Datasource {
    getColumns() {
        return [
            {
                key: 'id',
                name: 'ID'
            },
            {
                key: 'title',
                name: 'Title'
            },
            {
                key: 'count',
                name: 'Count'
            }
        ];
    }

    getData() {
        let rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }
        return rows;
    }
}

export default Datasource;