const configValues = require('./config.json');

module.exports = {
    getDdConnectionString: function () {
        return `mongodb://${configValues.uname}:${configValues.pwd}@localhost:27017/nodetodo`;
    }
}