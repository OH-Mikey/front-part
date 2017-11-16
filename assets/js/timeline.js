var vm = new Vue({
    el: "#app",
    data: {
        loginStatus: true
    },
    components: {
        componentHeader: componentHeader
    },
    created: function() {
        console.log('created');
    },
    mounted: function() {
        document.querySelector('.outer_container').onscroll = function() {
            console.log('hello');
        };
    }
});