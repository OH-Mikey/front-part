new Vue({
    el: "#app",
    data: {
        loginStatus: true
    },
    components: {
        componentHeader: componentHeader
    },
    mounted: function() {
        getChart().then(function(output) {
            console.log(output);
        }).catch(function(output) {
            console.log(output);
        });
    }
});


function getChart(input) {
    return new Promise(function(resolve, reject) {
        axios({
            method: 'get',
            // url: '/',
            url: 'http://localhost:3000/chart'
        }).then(function(res) {
            resolve(res.data);
        }).catch(function(error) {
            reject(error);
        });
    });
}