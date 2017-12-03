import React, {Component} from 'react';

import './BodyTable.css';
import Datasource from '../data/Datasource'
import update from 'immutability-helper';

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

    handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            rows[i] = update(rowToUpdate, {$merge: updated});
        }

        this.setState({ rows });
    };

    render() {
        return (
            <div className="bodyTable">
                <ReactDataGrid
                    rowKey="id"
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={800}
                    rowHeight={50}
                    enableRowSelect={true}
                    enableCellSelect={true}
                    rowScrollTimeout={200}
                    onGridRowsUpdated={this.handleGridRowsUpdated}
                    />
            </div>
        );

    }
}

export default BodyTable;


