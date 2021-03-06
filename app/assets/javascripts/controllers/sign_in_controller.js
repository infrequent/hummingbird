HB.SignInController = Ember.Controller.extend({
  email: '',
  password: '',

  errorMessage: '',

  actions: {
    signIn: function() {
      var self = this;
      HB.Session.signIn(this.get('email'), this.get('password')).then(function() {
        window.location.href = window.lastVisitedURL;
      }, function(err) {
        try {
          self.set('errorMessage', err.jqXHR.responseJSON.error);
        } catch (e) {
          self.set('errorMessage', 'An unknown error occurred');
        }
      });
    }
  }
});
