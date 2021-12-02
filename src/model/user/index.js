'use strict';
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxLength: [60, 'Email must not be longer than 60 characters'],
        minLength: [4, 'Email must not be less than 4 characters']
    },
    password: {
        type: String,
        required: [true, 'User must have a password']
    },
    is_admin: {
        type: Boolean,
        default: true,
    },
    jwt: {
        type: String,
    }
}, {
    timestamps: true, strictQuery: true
})

// Defile set usefindandmodify
/** @kind config
 *  @class findandmodify
 *  @return Schema methods
 */
mongoose.set('useFindAndModify',false);

/** Set password
 *  @param password {String} - the password to be set
 *  @return Object {Object} - User document with hashed password set
 */

UserSchema.methods.setPassword=function(password) {
    this.salt=crypto.randomBytes(16).toString('hex');
    this.password=crypto
        .pbkdf2Sync(password,this.salt,10000,512,'sha512')
        .toString('hex');
};

/** Validate password
 *  @param password {String} - the password to validated
 *  @return Object {Object} - Password validated
 */

UserSchema.methods.validatePassword=function(password) {
    const hash=crypto
        .pbkdf2Sync(password,this.salt,10000,512,'sha512')
        .toString('hex');
    return this.password===hash;
};

/** Generate jsonWebToken
 *  @return Token {String} - JWT
 */

UserSchema.methods.generateJWT=function() {
    const today=new Date();
    const expirationDate=new Date(today);
    expirationDate.setDate(today.getDate()+60);

    this.jwt=jwt.sign(
        {
            email: this.email,
            id: this._id,
            iss: process.env.JWT_ISSUER,
            exp: parseInt(expirationDate.getTime()/1000,10),
        },
        process.env.JWT_SECRET,
    );
    return null;
};

UserSchema.methods.revokeJWT=function() {
    this.jwt=null;
    const today=new Date();
    const expirationDate=new Date(today);
    expirationDate.setDate(today.getDate()+60);

    this.jwt=jwt.sign(
        {
            u_name: this.username,
            id: this._id,
            iss: process.env.JWT_ISSUER,
            exp: parseInt(expirationDate.getTime()/1000,10),
        },
        process.env.JWT_SECRET,
    );
    return this;
};

/** Model to auth
 *  @return Object {Object} - User model
 */

UserSchema.methods.toAuthJSON=function() {
    return {
        _id: this._id,
        email: this.email,
        jwt: this.jwt,
        isAdmin: this.is_admin
    };
};

UserSchema.methods.exportMap=function() {
    // export assets
    const final=Object.assign({},this._doc);
    final._id=this._id;
    final.jwt=this.jwt;
    final.save=() => {
        return this.save();
    };
    final.validatePassword = (password) => {
        return this.validatePassword(password);
    };
    final.toAuthJSON = () => {
        return this.toAuthJSON();
    };
    delete final.password;
    delete final.salt;
    return final;
};

// UserSchema.plugin(uniqueValidator);

UserSchema.pre('remove',async next => {
    // propagate deletion of user entities across related collections
});

module.exports.Users=mongoose.model('Users',UserSchema);