function login(){
    let username=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let user={
            username:username,
            password:password
        }
    $.ajax({
        contentType:"application/json",
        method:"POST",
        url:"http://localhost:8080/api/login",
        data: JSON.stringify(user),
        success:function (data){
            let roles=data.substring(0,data.indexOf(']'))
            let jwt=data.substring(data.indexOf(']')+1)
            localStorage.setItem("object", JSON.stringify(jwt))
            if(roles.includes("ADMIN"))
            window.location.href = "../admin/admin.html"
            if(roles.includes("USER"))window.location.href="../user/user.html"
        }
    })
}