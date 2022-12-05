const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/duy')
const { Schema } = mongoose

const contactSchema = Schema({
    name: String,
    title: String,
    email: String,
    contents: [
        {
            icon: String
        }
    ]
},
    {
        timestamps: true
    },
    {
        collection: 'contact'
    })

const ModelContact = mongoose.model('contact', contactSchema)
module.exports = ModelContact