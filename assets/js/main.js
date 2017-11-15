document.addEventListener("DOMContentLoaded", function() {

	new Vue({
		el: "#app",
		data: {
			account: '',
			accountError: '',
			password: '',
			passwordError: '',
			passwordConfirm: '',
			passwordConfirmError: ''
		},
		methods: {
			registerSubmit: function() {
				console.log("something");
			}
		},
		watch: {
			account: function(input) {
				console.log();
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
				if (this.password !== input) {
					this.passwordConfirmError = 'password confirm not match!';
				} else {
					this.passwordConfirmError = '';
				}
			}
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
		}
	});


});