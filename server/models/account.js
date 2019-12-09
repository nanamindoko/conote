var mongoose =require('mongoose');
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const Account = new Schema({
    username : String,
    password: String,
    created: {type:Date, defualt:Date.now}
});

//generate hash
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('account', Account);