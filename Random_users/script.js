var profileImg = document.querySelector('#profileImg');
var fullName = document.querySelector('#fullName');
var emailAddress = document.querySelector('#emailAddress');
var phoneNo = document.querySelector('#phoneNo');
var city = document.querySelector('#city');

profileImg.src = '';
fullName.innerHTML = '';
emailAddress.innerHTML = '';
phoneNo.innerHTML = '';
city.innerHTML = '';

async function getUser() {
    const res = await axios.get('https://randomuser.me/api/');
    const result = res.data.results[0];
    console.log(result);
    
    emailAddress.innerHTML = result.email;
    fullName.innerHTML = `${result.name.title} ${result.name.first} ${result.name.last}`;
    phoneNo.innerHTML = result.cell;
    city.innerHTML = result.location.city;
    profileImg.src = result.picture.large;
}
getUser();