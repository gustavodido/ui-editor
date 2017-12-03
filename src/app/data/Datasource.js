import faker from 'faker'

const { Formatters } = require('react-data-grid-addons');
const { ImageFormatter } = Formatters;

faker.locale = 'en_GB';

class Datasource {
    getColumns() {
        return [
            {
                key: 'isReleased',
                name: 'RELEASED',
                width: 80
            },
            {
                key: 'image',
                name: 'PRODUCT',
                formatter: ImageFormatter,
                width: 80
            },
            {
                key: 'brand',
                name: 'BRAND',
                width: 80
            },
            {
                key: 'market',
                name: 'MARKET',
                width: 80
            },
            {
                key: 'merchHier',
                name: 'MERCH HIER',
                width: 120
            },
            {
                key: 'ccNumber',
                name: 'CC NUMBER',
                width: 120
            },
            {
                key: 'isd',
                name: 'IN STORE DATE',
                width: 120
            },
            {
                key: 'mkd',
                name: 'MARKDOWN DATE',
                width: 150
            },
            {
                key: 'distros',
                name: 'DISTROS',
                width: 120
            },
            {
                key: 'aps',
                name: 'APS',
                width: 80
            },
            {
                key: 'paps',
                name: 'PAPS',
                width: 80
            },
            {
                key: 'cp',
                name: 'CP',
                width: 80
            },
            {
                key: 'sp',
                name: 'SP',
                width: 80
            },
            {
                key: 'iaf',
                name: 'IAF',
                width: 80
            },
            {
                key: 'iafExpiration',
                name: 'IAF EXPIRATION',
                width: 120
            },
            {
                key: 'visMin',
                name: 'VIS MIN',
                width: 80
            },
            {
                key: 'visMinPeriod',
                name: 'VIS MIN PERIOD',
                width: 120
            },
            {
                key: 'ti',
                name: 'TI',
                width: 80
            },
            {
                key: 'delta',
                name: 'Δ',
                width: 80
            }
        ];
    }

    getData() {
        let rows = [];
        for (let i = 1; i < 10; i++) {
            rows.push({
                id: i,
                image: faker.image.avatar(),
                brand: 'GAP',
                market: 'US',
                merchHier: 'HOT CHESTNUT',
                isReleased: false,
                ccNumber: '000000000' + i,
                isd: '11/11/2018',
                mkd: '18/11/2018',
                distros: 'TIER 2 (251)',
                dcs: '0020 TDC (151)',
                aps: 0,
                paps: 0,
                cp: 7,
                sp: 40,
                iaf: 0,
                iafExpiration: '',
                visMin: 1,
                visMinPeriod: '',
                ti: 100,
                delta: 0,
                count: i * 1000
            });
        }
        return rows;
    }
}

export default Datasource;