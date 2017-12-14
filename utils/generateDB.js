const encrypt = require('./encrypt');
const Account = require('../server/models/Account');

Account.findOne({ username: 'admin' }, (err, account) => {
    if (!account) {
        encrypt.hash('admin', (hash) => {
            const baseAccount = new Account({
                username: 'admin',
                email: 'admin@admin.com',
                password: hash,
            });
            baseAccount.save();
        });
    }
});
