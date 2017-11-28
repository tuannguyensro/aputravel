app.service("myService", function ($http) {

    //get All Eployee
    this.getAccounts = function () {
        debugger;
        return $http.get("/Account/getAll");
    };

    // get Account By Id
    this.getAccount = function (accountID) {
        var response = $http({
            method: "post",
            url: "/Account/getAccountByID",
            params: {
                AccountID: JSON.stringify(accountID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateAcc = function (account) {
        var response = $http({
            method: "post",
            url: "/Account/UpdateAccount",
            data: JSON.stringify(account),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddAcc = function (account) {
        var response = $http({
            method: "post",
            url: "/Account/AddAccount",
            data: JSON.stringify(account),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteAcc = function (accountId) {
        var response = $http({
            method: "post",
            url: "/Account/DeleteAccount",
            params: {
                accountId: JSON.stringify(accountId)
            }
        });
        return response;
    }
})