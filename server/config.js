const { passwd } = require('../passwd');

module.exports = {
    PORT: 3000,
    CONNECTION_STRING: `mongodb+srv://ozancan1:${passwd}@cluster0.afkna.mongodb.net/vue-file-backup?retryWrites=true&w=majority`,
    BASE_URL: `${__dirname}`,
    UPLOAD_URL: `${__dirname}\\uploads\\files\\`,
};
