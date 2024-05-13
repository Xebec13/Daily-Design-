function passwordFunction() {
    const x = document.getElementById("password");
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

function resetPassword(){
    const p = document.getElementById("password");
    password.value = "";

}

