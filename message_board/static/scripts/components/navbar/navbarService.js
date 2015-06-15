app.factory('NavbarService', function($http) {
    return {
        registerUser: function(data) {
            // TODO Get the CSRF Token into the cookies
            var csrfToken = this.retrieveCSRFToken();
            var request = {
                method: 'POST',
                url: './register',
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            };
            return $http(request);
        },

        retrieveCSRFToken: function() {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, 'csrftoken'.length + 1) == ('csrftoken' + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring('csrftoken'.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    }
});