const {createApp, ref} = Vue;

const app = createApp({
    setup() {
        const message = ref("I'm Batman")
        const author = ref("Bruce Wayne")

        const changeQuote = () => {
            message.value = "Hello, I am Superman"
            author.value = "Clark Kent"
        }

        return {
            message,
            author,
            changeQuote
        }
    }
});

app.mount("#myApp")