const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, null, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};

module.exports.addUserPromise = (newUser) => {
    let hash = '';
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, null, (err, res) => {
            if (err) {
                console.log(err)
            }
            hash = res;
        });
    });

    console.log(hash);

    // return new Promise((resolve, reject) => {
    //     if (!newUser || newUser === null || newUser === undefined){
    //         reject(new Error('Data user not is invalid'))
    //     }
    //     let salt = '0123456789';
    //
    //     bcrypt.hash(newUser.password, salt, null, (err, hash) => {
    //         console.log(1)
    //         if (err) {
    //             console.log(2)
    //             reject(new Error(err + ''))
    //         }
    //         console.log(3)
    //         // newUser.password = hash;
    //         // newUser.save();
    //         // resolve(newUser)
    //     });
    //
    //     // bcrypt.genSalt(10, (err, salt) => {
    //     //
    //     //     if (err) {
    //     //         reject(new Error(err + ''))
    //     //     }
    //     //     resolve(newUser)
    //     //
    //     // });
    // })
};
