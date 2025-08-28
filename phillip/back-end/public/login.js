const signupGiris = async () => {
    const username = document.getElementById("username-signup").value;
    const password = document.getElementById("şifre-signup").value;
    const rePassword = document.getElementById("re-şifre-signup").value;

    const user = {
        kullanıcıAdı: username,
        şifre: password,
        re_şifre: rePassword
    }

    const response = await fetch("/phillip/login/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify( user )
    })

    if (response.ok) {
        window.location.href = "/phillip/panel"
    } else {
        alert("Kullanıcı adı veya şifre yanlış.");
        document.getElementById("username-signup").value = "";
        document.getElementById("şifre-signup").value = "";
        document.getElementById("re-şifre-signup").value = "";
    }
}



const loginGiris = async () => {
    let success = false

    let username = document.getElementById("username-login").value;
    let password = document.getElementById("şifre-login").value;

    const user = {
        kullanıcıAdı: username,
        şifre: password
    }

    const response = await fetch("/phillip/login/ex-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify( user ),   
    })

    if (response.ok){
        window.location.href = "/phillip/panel"
    }else {
        document.getElementById("username-login").value = "";
        document.getElementById("şifre-login").value = "";
        alert("Kullanıcı adı veya şifre yanlış.");
    }
}


document.getElementById("giriş-butonu-signup").addEventListener("click", signupGiris);
document.getElementById("giriş-butonu-login").addEventListener("click", loginGiris)
