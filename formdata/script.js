var wrap = document.querySelector('#wrap')

wrap.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(wrap.name.value)
    console.log(wrap.lname.value)
    console.log(wrap.em.value)
    console.log(wrap.nm.value)
    console.log(wrap.pass.value)
    console.log(wrap.cpass.value)
})
 
var wrap = document.querySelector('#wrap')

wrap.addEventListener('submit',(event)=>{
    event.preventDefault()
    const formdata = new FormData(wrap)
    console.log(formdata)
    console.log(formdata.get('Fname'))
    console.log(formdata.get('Email'))
    console.log(formdata.get('Phno'))
    console.log(formdata.get('Pwd'))
    console.log(formdata.get('Cpwds'))
})