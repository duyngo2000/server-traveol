const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/duy');

const { Schema } = mongoose;


const newsSchema = new Schema({
  name: String,//Các địa điểm nổi tiếng và món ăn không nên bỏ lỡ khi du lịch Séc
  view: {
    type: Number,
    default: 0
  },//15 lượt xem
  avatar: String,
  content: String,
  writer: String,
},
  { timestamps: true },
  {
    collection: 'news'
  });

const ModelNews = mongoose.model('news', newsSchema);

module.exports = ModelNews
