
Vue.component("post", {
    template: `
        <ul><li v-for= "item in post"> {{item}}</li></ul>
    `,
    data() {
        return{
            message: "Welcome",
            post: ""
        }
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            return this.post = res.data
        })
    }
})

new Vue({
    el: "#app",
    
})