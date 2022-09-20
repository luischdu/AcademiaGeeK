    // document.querySelector('#loginBtn').addEventListener('click',login)//Por favor linkear con los botones   
    // document.querySelector('#registerBtn').addEventListener('click',register)
    
    function login (){
        let correo = document.getElementById('email').value
        let contraseña = document.getElementById('pass').value
        let usuarios = JSON.parse(localStorage.getItem('usuarios'))
        contraseña = document.getElementById('pass').value
        console.log(correo)
        console.log(usuarios)
        console.log(usuarios[0].correo)
        console.log(usuarios[0].contraseña)
        for(let i = 0; i< usuarios.length;i++){
            if (correo == usuarios[i].correo && contraseña == usuarios[i].contraseña){
                alert ("Sesion iniciada")
                break
                // return algunvalorquesenecesite
            }else{
                alert("Credenciales invalidas")
                break
                }
        }
    }    
    function register(){
        // al no haber servidor se recupera la lista de usuarios
        let usuarios = []
        let datosUsuario = {}
        //----------Recepcion de datos desde interfaz 
        datosUsuario.nombre = document.getElementById('name').value
        datosUsuario.correo = document.getElementById('email').value
        datosUsuario.contraseña = document.getElementById('pass').value
        //---------------------------------------
       // localStorage    
        if(localStorage.getItem('usuarios') == null){
            console.log(usuarios)  
            usuarios.push(datosUsuario)
            localStorage.setItem('usuarios',JSON.stringify(usuarios))
        }else{
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        localStorage.clear()
        usuarios.push(datosUsuario)
        localStorage.setItem('usuarios',JSON.stringify(usuarios))
        }
        
    
    }
    //requiere boton
    function cerrarSesion()    {
        localStorage.clear()
    }
  
    //  export {moduloLogin}
    
    
    
    
    
    
    