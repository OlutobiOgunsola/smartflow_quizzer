'use strict';

/** @kind error
 *  @type class
 *  @returns error
 */

class CustomError {
    constructor() {
        /** AuthError
         *  @param errMessage {String} - The custom error message
         *  @param err {}
         */
        this.generalError= errMessage => {
            return {
                errMessage,
            };
        };
        this.Error=(type,status,errMessage,err) => {
            return {
                status,
                message: errMessage,
                err: {
                    type,
                    err,
                },
            };
        };
    }
};

module.exports = CustomError;