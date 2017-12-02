import React, {Component} from 'react';
import {Table} from 'reactstrap';
import './BodyTable.css';

class BodyTable extends Component {
    render() {
        return (
            <Table bordered striped responsive={false}>
                <thead>
                <tr>
                    <th className="text-center">
                        <input type="checkbox" id="pete-sku-table-controls__select-all-ccs"
                               className="pete-checkbox pete-checkbox--inverted"/>
                    </th>
                    <th className="text-center">Released</th>
                    <th className="text-center">Merch Hier</th>
                    <th className="text-center">Market</th>
                    <th className="text-center">In-Store Date</th>
                    <th className="text-center">Mkd Date</th>
                    <th className="text-center">Season Code</th>
                    <th className="text-center">Distro</th>
                    <th className="text-center">DC</th>
                    <th className="text-center">Promoted APS</th>
                    <th className="text-center">Cycle Period</th>
                    <th className="text-center">Safety Period</th>
                    <th className="text-center">IAF</th>
                    <th className="text-center">IAF Expiration</th>
                    <th className="text-center">Vis Min</th>
                    <th className="text-center">Vis Min Period</th>
                    <th className="text-center">Ti</th>
                    <th className="text-center">Δ</th>
                    {/*<th className="text-center pete-allocation-table__header-cell--ap">AP Total</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--ap">Multi</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--ap">Single</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--ap">Bulk</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--dc">DC Total</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--dc">Multi</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--dc">Single</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--dc">Bulk</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--bal">Bal Impl Multi</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--bal">Bal Impl Single</th>*/}
                    {/*<th className="text-center pete-allocation-table__header-cell--bal">Bal Bulk</th>*/}
                    {/*<th className="text-center">Proj Comm %</th>*/}
                    {/*<th className="text-center">Store Comm Inv</th>*/}
                    {/*<th className="text-center">DC OO</th>*/}
                    {/*<th className="text-center">Ti Update Elapsed (HH:mm)</th>*/}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td>118721001</td>
                    <td>US</td>
                    <td>2017-09-25</td>
                    <td>2017-12-17</td>
                    <td>FAL 2017</td>
                    <td>TIER 3 HOT (14)</td>
                    <td>+</td>
                    <td>0.5</td>
                    <td>1.1</td>
                    <td>7</td>
                    <td>33.0</td>
                    <td>1</td>
                    <td>-</td>
                    <td>6</td>
                    <td>172.00</td>
                    <td>172</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>118721001</td>
                    <td>US</td>
                    <td>2017-09-25</td>
                    <td>2017-12-17</td>
                    <td>FAL 2017</td>
                    <td>TIER 3 HOT (14)</td>
                    <td>+</td>
                    <td>0.5</td>
                    <td>1.1</td>
                    <td>7</td>
                    <td>33.0</td>
                    <td>1</td>
                    <td>-</td>
                    <td>6</td>
                    <td>172.00</td>
                    <td>172</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>118721001</td>
                    <td>US</td>
                    <td>2017-09-25</td>
                    <td>2017-12-17</td>
                    <td>FAL 2017</td>
                    <td>TIER 3 HOT (14)</td>
                    <td>+</td>
                    <td>0.5</td>
                    <td>1.1</td>
                    <td>7</td>
                    <td>33.0</td>
                    <td>1</td>
                    <td>-</td>
                    <td>6</td>
                    <td>172.00</td>
                    <td>172</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default BodyTable;
