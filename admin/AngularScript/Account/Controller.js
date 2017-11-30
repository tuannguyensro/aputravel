app.controller("myCtrl", function ($scope, myService) {
    //.divEmployee = false;
    GetAllAccount();
    //To Get All Records 
    function GetAllAccount() {
        debugger;
        var getData = myService.getAccounts();
        debugger;
        getData.then(function (acc) {
            $scope.accounts = acc.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editAccount = function (account) {
        debugger;
        var getData = myService.getAccount(account.AccountID);
        getData.then(function (acc) {
            var dateofbirth = account.DateOfBirth;
            var changedateofbirth = moment(dateofbirth).format("MM/DD/YYYY");
            $scope.account = acc.data;
            $scope.AccountID = account.AccountID;
            $scope.Fullname = account.Fullname;
            $scope.Username = account.Username;
            $scope.Password = account.Password;
            $scope.Sex = account.Sex;
            $scope.DateOfBirth = changedateofbirth;
            $scope.Address = account.Address;
            $scope.Phone = account.Phone;
            $scope.Mail = account.Mail;
            $scope.AccountGroupID = account.AccountGroupID;
            $scope.ManagedBy = account.ManagedBy;
            $scope.Action = "Cập nhật";
            //$scope.divEmployee = true;
        },
        function () {
            alert('Error in getting records');
        });
    }
    
    $scope.AddUpdateAccount = function () {
        debugger;
        var getmail = document.getElementById('getmail').value;
       
        var sex = $("#sex option:selected").val();
        var daytime = document.getElementById('datepicker').value;
        var stringdatetime = daytime.toString();
        var Account = {
            AccountID: $scope.AccountID,
            Image: $scope.Image,
            FullName: $scope.Fullname,
            Username: $scope.Username,
            Password: $scope.Password,
            Sex: sex,
            DateOfBirth: stringdatetime,
            Address: $scope.Address,
            Phone: $scope.Phone,
            Mail: getmail,
            AccountGroupID: $scope.AccountGroupID,
            ManagedBy: $scope.ManagedBy,
            CreatedDate: $scope.CreatedDate = new Date(),
            Status: $scope.Status == false 
        };
        var getAction = $scope.Action;

        if (getAction == "Cập nhật") {
            Account.AccountID = $scope.AccountID;
            var getData = myService.updateAcc(Account);
            getData.then(function (msg) {
                GetAllAccount();
                alert(msg.data);
                //$scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = myService.AddAcc(Account);
            getData.then(function (msg) {
                GetAllAccount();
                alert(msg.data);
                //$scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddAccountDiv = function () {
        ClearFields();
        $scope.Action = "Tạo";
        //$scope.divEmployee = true;
    }

    $scope.deleteAccount = function (account) {
        var getData = myService.DeleteAcc(account.AccountID);
        getData.then(function (msg) {
            GetAllAccount();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.Image = "";
        $scope.Fullname = "";
        $scope.Username = "";
        $scope.Password = "";
        $scope.Sex = "";
        $scope.DateOfBirth = "";
        $scope.Address = "";
        $scope.Phone = "";
        $scope.Mail = "";
        $scope.AccountGroupID = "";
        $scope.ManagedBy = "";
    }
});