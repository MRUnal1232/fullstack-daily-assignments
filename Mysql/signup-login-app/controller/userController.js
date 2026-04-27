const con = require('../utils/db')
const bcrypt = require('bcrypt')

exports.onLogin = (req,res)=>{

const {userName,password} = req.body

const sql1 = 'SELECT * FROM users WHERE emailAddress = ?'
const data1 = [userName]

con.query(sql1,data1,async(err,result)=>{

if(err){
return res.json({status:false,message:err.message})
}

if(result.length === 0){
return res.json({status:false,message:'User not found !!'})
}

const user = result[0]

const isMatch = await bcrypt.compare(password,user.password)

if(isMatch){
res.json({status:true,message:'Login successfull !!'})
}
else{
res.json({status:false,message:'Wrong password !!'})
}

})

}


exports.getUserDetails = (req,res)=>{

const {email} = req.params

const sql = 'SELECT * FROM users WHERE emailAddress = ?'
const data = [email]

con.query(sql,data,(err,result)=>{

if(err){
return res.json({status:false,message:err.message})
}

return res.json({
status:true,
message:result[0]
})

})

}