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
                    rowScrollTimeout={200}
                    />
            </div>
        );

    }
}

export default BodyTable;


