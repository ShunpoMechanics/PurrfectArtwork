export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date) 
    {}

    get token() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) // check that token exists and is still valid
            return null;
        return this._token;
    }
}
