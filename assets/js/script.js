/*==================== Script of access TRAINING-ROOM page by LOGIN page ====================*/

function sign_in () {
    let login = document.querySelector ("#user").value;
    let password = document.querySelector ("#password").value;

    if (login == "gssilva@gmail.com" && password == "123456") {

        location.href = "../html/training-room.html";

    } else {
        alert ("Verify your User and Password!");
    }

}



