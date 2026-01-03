async function getUserData() {
    const rawRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const userData = await rawRes.json()
    console.log(userData)
}

getUserData()

async function axiosExample() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
}

axiosExample()