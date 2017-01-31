$(document).ready(function () {
    $('#toogle-create').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#toogle-signin').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#logon').click(function () {
        var user = $('#name').val();
        var pw = $('#pw').val();
        console.log('user', user);
        console.log('pw', pw);
        if (user === 'ljb' && pw === 'ost') {
            localStorage.setItem("loggedInUser", JSON.stringify({ user: user, pw: pw }));
            logInCheck();
        } else {
            alert('U not him! Please gief Lars!!')
            return false;
        }

    });

    $('#logout').click(function () {
        localStorage.setItem("loggedInUser", null);
        logInCheck();
    });

    $('#forgot').click(function () {
        alert('u forgetttttted itte');
        return false;
    });

    $('#create').click(function () {
        var user = { name: $('#create-name').val(), email: $('#create-email').val(), pw: $('#create-pw').val() }
        var users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
            users = [];
        }
        users.push(user);
        console.log('users: ', users);
        localStorage.setItem("users", JSON.stringify(users));
        return false;
    });


    function logInCheck() {
        var localUsers = JSON.parse(localStorage.getItem("users"));
        console.log('usies', localUsers);
        var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
            $('.loggedin-page').show();
            $('.login-page').hide();
            if(localUsers != null){
                var userList = $("#userlist");
                userList.empty();
                for(i=0; i<localUsers.length; i++){
                    $("<li class=\"message\"><a >"+localUsers[i].name+"</a></li>").appendTo(userList);
                }


                /*$.ajax({
                    url: "http://rest-service.guides.spring.io/greeting"
                }).then(function (data) {
                    console.log('data', data);
                    $('.greeting-id').append(data.id);
                    $('.greeting-content').append(data.content);
                });*/
            }
           
        } else {
            $('.loggedin-page').hide();
            $('.login-page').show();

        }
    }

    logInCheck();
});