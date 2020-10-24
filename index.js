const config = require("./config.json");
const fetch = require("node-fetch");

module.exports = class Client {
    constructor(token) {
        this.token = token
    };

    async badger() {
        const res = await fetch(`${config.url}images/badgers`, {
            method: 'GET',
            headers: {
                "token": this.token
            }
        });
        const json = await res.json();

        if(json.message) return "Wrong token";

        return json.url;
    };
};