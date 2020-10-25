import moment from 'moment';

export default [ 
    {
    id:'1',
    description : 'water bill',
    note: 'bill',
    amount:100,
    createdAt : 0
    },
    {id:'2',
    description : 'gas bill',
    note: 'bill',
    amount:200,
    createdAt : moment(0).subtract(4,'days').valueOf()
    },
    {
    id:'3',
    description : 'rent bill',
    note: 'bill',
    amount:300,
    createdAt : moment(0).add(4,'days').valueOf()
    }
]
