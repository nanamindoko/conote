var mongoose =require('mongoose');

const Schema = mongoose.Schema

const Course = new Schema({
    master : String,
    starred : [String],
    members : [String],
    date : {
        created: {type: Date, default: Date.now},
        edited: {type: Date, default: Date.now}
    },
    is_edited: {type: Boolean, default: false}
});

module.exports = mongoose.model('course', Course);