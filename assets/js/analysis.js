new Vue({
    el: "#app",
    data: {
        loginStatus: true
    },
    components: {
        componentHeader: componentHeader
    },
    mounted: function() {
        d3.select('.analysis_content')
            .append('svg')
            .attr({
                width: '100%',
                height: '100%',
            })
            .style({
                border: '3px solid blue'
            })
            .append('circle')
            .attr({
                'cx': "50%",
                'cy': "50%",
                'r': 30,
                'fill': '#f90',
                'stroke': '#c00',
                'stroke-width': '5px'
            });
    }
});