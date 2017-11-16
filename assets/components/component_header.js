var componentHeader = Vue.component("component-header", {
    template: "#component_header",
    methods: {
        loginSubmit: function(e) {
            e.preventDefault();
            var vm = this;

            axios({
                method: 'get',
                url: '/',
            }).then(function(res) {
                vm.login.failMsg = 'wrong account or password';
            }).catch(function(error) {
                vm.login.failMsg = 'wrong account or password';
            });
        },
        registerSubmit: function(e) {
            e.preventDefault();
            if (this.account === '') {
                this.accountError = 'account can\'t be empty';
            }
            if (this.password === '') {
                this.passwordError = 'password can\'t be empty';
            }
            if (this.passwordConfirm === '') {
                this.passwordConfirmError = 'password confirm can\'t be empty';
            }
            var accountError = this.accountError === '',
                passwordError = this.passwordError === '',
                passwordConfirmError = this.passwordConfirmError === '';

            if (accountError && passwordError && passwordConfirmError) {
                console.log('pass!');
            } else {
                console.log('fail!');
            }
        },
        registerBtnTrigger: function() {
            $('.accordion').accordion('open', 0);
        },
        loginBtnTrigger: function() {
            $('.login_modal').modal('show');
        }
    },
    data: function() {
        return {
            msg: "hello"
        };
    }
});