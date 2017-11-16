new Vue({
    el: "#app",
    data: {},
        components: {
            componentHeader: componentHeader
        },
    created: function() {
        console.log('created');

        document.querySelector(".outer_container").onscroll = function() {

        };


    }
});

function my() {
    console.log("my");
}