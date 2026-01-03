var user1 = document.querySelector('#user1')
var pwd1 = document.querySelector('#pwd1')

function onFormSubmit(){
    console.log(user1.value,pwd1.value)
}

var form1 = document.querySelector('#form1')

form1.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(form1.user.value)
    console.log(form1.pass.value)
})

var form2 = document.querySelector('#form2')

form2.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Formdata = new FormData(form2)
    console.log(Formdata)
    console.log(Formdata.get('username'))
    console.log(Formdata.get('password'))
})