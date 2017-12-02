class Datasource {
    getColumns() {
        return [
            {
                key: 'isReleased',
                name: 'RELEASED'
            },
            {
                key: 'brand',
                name: 'BRAND'
            },
            {
                key: 'market',
                name: 'MARKET'
            },
            {
                key: 'merchHier',
                name: 'MERCH HIER'
            },
            {
                key: 'ccNumber',
                name: 'CC NUMBER'
            },
            {
                key: 'isd',
                name: 'IN STORE DATE'
            },
            {
                key: 'mkd',
                name: 'MARKDOWN DATE'
            },
            {
                key: 'distros',
                name: 'DISTROS'
            },
            {
                key: 'aps',
                name: 'APS'
            },
            {
                key: 'paps',
                name: 'PROMOTED APS'
            },
            {
                key: 'cp',
                name: 'CYCLE PERIOD'
            },
            {
                key: 'sp',
                name: 'SAFETY PERIOD'
            },
            {
                key: 'iaf',
                name: 'IAF'
            },
            {
                key: 'iafExpiration',
                name: 'IAF EXPIRATION'
            },
            {
                key: 'visMin',
                name: 'VIS MIN'
            },
            {
                key: 'visMinPeriod',
                name: 'VIS MIN PERIOD'
            },
            {
                key: 'ti',
                name: 'TI'
            },
            {
                key: 'delta',
                name: 'Δ'
            }
        ];
    }

    getData() {
        let rows = [];
        for (let i = 1; i < 100; i++) {
            rows.push({
                id: i,
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