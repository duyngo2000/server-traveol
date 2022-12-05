const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/duy');

const { Schema } = mongoose;


const tourSchema = new Schema({
    place: [
        {
            idPlace: {
                type: String,
                ref: "place"
            }
        }
    ],
    name: String,//du lịch đà nẵng - ngủ hành sơn - phố cổ hội an
    image: Array,// [nẵng - ngủ hành sơn - phố cổ hội an]
    price: Number,// 2tr 300
    seats: Number,
    departureFrom: String,
    description: [],//du lịch đem lại cho chúng ta nhiều lợi ích
    timeStart: Date,//khởi hành 1/1/2022
    timeEnd: Date,//về 3/1/2022
    schedule: [],
},
    {
        collection: 'tour'
    });

const ModelTour = mongoose.model('tour', tourSchema);

module.exports = ModelTour
