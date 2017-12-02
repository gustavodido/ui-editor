import React, {Component} from 'react';
import './BodyTable.css';

const ReactDataGrid = require('react-data-grid');

class BodyTable extends Component {
    constructor(props) {
        super(props);
        this._columns = [
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

        let rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }
        this.state = {rows, selectedIndexes: []};
    }

    rowGetter = (i) => {
        return this.state.rows[i];
    };

    onRowsSelected = (rows) => {
        this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    };

    onRowsDeselected = (rows) => {
        let rowIndexes = rows.map(r => r.rowIdx);
        this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1)});
    };

    render() {
        return (
            <ReactDataGrid
                rowKey="id"
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={800}
                rowSelection={{
                    showCheckbox: true,
                    enableShiftSelect: true,
                    onRowsSelected: this.onRowsSelected,
                    onRowsDeselected: this.onRowsDeselected,
                    selectBy: {
                        indexes: this.state.selectedIndexes
                    }
                }}/>);
    }
}

export default BodyTable;


