let object = JSON.parse(localStorage.getItem("object"));
if (object != null){
    let token = object.accessToken;
$.ajax({
    method:"GET",
    headers:{
        "Authorization": "Bearer"+token
    },
    url:"http://localhost:8080/admin/all",
    success:function (data){
    console.log(data)
    }
})
}
else {
    window.location.href = "../login/login.html"
}