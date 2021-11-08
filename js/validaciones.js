if(document.title == "Iniciar Sesión"){
    
}

function registrarAction(){
    let check1 = document.getElementById("check_admin");
    let check2 = document.getElementById("check_supervisor");
    let check3 = document.getElementById("check_interventor");
    if(check1.checked || check2.checked || check3.checked){
        alert("Usuario Registrado Correctamente, por favor verificar correo electronico.");
        document.location.href = "../index.html";
    }else{
        alert("Debe seleccionar un cargo a ejercer.");
    }
}