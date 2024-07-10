const {createApp, ref} = Vue;

const app = createApp({
    template: `
        <h1> Hello World</h1>
        <p> From app.js</p>
    `
});

app.mount("#myApp")