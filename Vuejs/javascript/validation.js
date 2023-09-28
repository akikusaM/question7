function emailValidation() {
	const app = new Vue({ // --1
	  el: '#app', // --2
	  data: {
	    errorMessage: 'Eメールが一致しません', // --3
	  }
	})
}

window.onload = function() {
  emailValidation();
};