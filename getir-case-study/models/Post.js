const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({

    startDate: {
        type: Date,
        //required: true
    },
    endDate: {
        type: Date,
        //required: true
    },
    minCount: {
        type: Number,
        //required: true
    },
    maxCount: {
        type: Number,
        //required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);

/*
const ResponseSchema = mongoose.Schema({

    code: {
        type: Number,
        //required: true
    },
    msg: {
        type: String,
        //required: true
    },*/
    records: [{
        key: {
           // type: String,
            key: '_id'
            //required: true
        },
        createdAt: {
            type: Date.now
        },
        totalCount: {
            type: Number,
            //required: true
        }
    }]
//});

//module.exports = mongoose.model('Posts', ResponseSchema);
