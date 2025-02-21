const erro = document.querySelector('.erro')
const email = document.getElementById('text')
const password = document.getElementById('password')
const enter = document.getElementById('enter')
const user = [
    {
        login: 'julio@eu.com',
        password: '1234',
    }
]


enter.addEventListener('click', verificationUser)

function verificationUser(e){
    e.preventDefault()
    if (email.value == user[0].login && password.value == user[0].password){
        checkUser()
        
    }
    else{
        erro.classList.remove('hidden')
        
        setTimeout(() => {
            erro.classList.add('hidden')
            
        }, 3000)
            
        return 
    }
}

function checkUser(){
    window.location.href = ''
}

