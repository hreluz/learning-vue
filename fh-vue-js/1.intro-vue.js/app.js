const {createApp, ref} = Vue;

const app = createApp({
    template: `
        <h1> Hello {{ message }}</h1>
        <p> From app.js</p>
    `,
    setup() {
        const message = ref("I'm Batman")

        setTimeout(() => {
            message.value = "I'm Superman"
        }, 1000)

        return {
            message
        }
    }
});

app.mount("#myApp")