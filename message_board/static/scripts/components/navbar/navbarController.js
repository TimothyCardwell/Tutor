app.controller('NavbarController', function(NavbarService) {
    this.user = { screenname: "Guest" };
    this.registerUser = {};

    this.updateNavbarStatus = function() {
        // TODO Remove login/register
        // TODO Remove userName object and replace with a getName() function if empty
        // TODO What else?
        if(this.user) {

        }
    };

    this.clearRegisterUser = function() {
        this.registerUser = {};
    };

    this.registerNewUser = function() {
        var _this = this;
        if(this.registerUserValid()) {
            NavbarService.registerUser(this.registerUser).
                success(function(data, status, headers, config) {
                    _this.user = data[0].fields;
                }).
                error(function(data, status, headers, config) {
                    console.debug("FAILURE!");
                    console.debug(data);
                    console.debug(status);
                    console.debug(headers);
                    console.debug(config);
                });
        } else {
            console.debug("User is not valid");
        }
    };

    // TODO Validate this nonsense
    this.registerUserValid = function() {
        if(this.registerUser.firstName
            && this.registerUser.lastName
            && this.registerUser.emailAddress
            && this.registerUser.username
            && this.registerUser.password) {
            return true;
        } else {
            return false;
        }
    };
});