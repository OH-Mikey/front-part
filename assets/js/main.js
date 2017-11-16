document.addEventListener("DOMContentLoaded", function() {

    vm = new Vue({
        el: "#app",
        data: {
            account: '',
            password: '',
            passwordConfirm: '',
            accountError: '',
            passwordError: '',
            passwordConfirmError: '',

            login: {
                acocunt: '',
                password: '',
                failMsg: ''
            }
        },
        watch: {
            account: function(input) {
                this.accountError = '';
                if (!/^[a-z]*[A-Z]*[0-9]*$/.test(input) || input == '') {
                    this.accountError = 'account syntax error!';
                }
            },
            password: function(input) {
                this.passwordError = '';
                this.passwordConfirmError = '';
                if (input.length < 8) {
                    this.passwordError = 'password should at least 8 words!';
                }
                if (this.password !== input) {
                    this.passwordConfirmError = 'password confirm not match!';
                }
            },
            passwordConfirm: function(input) {
                this.passwordConfirmError = '';
                if (this.password !== input) {
                    this.passwordConfirmError = 'password confirm not match!';
                }
            }
        },
        components: {
            componentHeader: componentHeader
        },
        mounted: function() {
            $('.accordion').accordion({
                onOpening: function() {
                    $('.ui.accordion .title').css({
                        opacity: 0,
                        pointerEvents: 'none'
                    });
                }
            });
        },
    });


});