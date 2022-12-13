function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //login出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}

function check(){
    var message=document.getElementById("mm");
    if(document.getElementById("username").value=="123"&&document.getElementById("password").value=="123"){
        alert("登入成功!");
        document.getElementById('mm').innerHTML="登入成功!";
    }else{
        alert("登入失敗!");
        document.getElementById('mm').innerHTML="登入失敗!";
    }
}

function Register(){
    alert("註冊成功!");
}