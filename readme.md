# About
A library that allows you to easily use the api of the multiapp.xyz website

# Instalation
`npm install multiapp-api --save`

# Example Usage

```js
const multiapp = require("multiapp")

const client = new multiapp("MULTIAPP TOKEN");

(async () => {
    const badger = await client.badger();

    console.log(badger)
})();
```
