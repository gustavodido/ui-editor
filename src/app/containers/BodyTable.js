import React, {Component} from 'react';

import './BodyTable.css';
import Datasource from '../data/Datasource'

const ReactDataGrid = require('react-data-grid');

class BodyTable extends Component {
    constructor(props) {
        super(props);

        let ds = new Datasource();

        this._columns = ds.getColumns();
        this.state = {rows: ds.getData(), selectedIndexes: []};
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


