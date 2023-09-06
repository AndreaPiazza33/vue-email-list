//recupero email
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((email) => {
console.log(email.data.response); 
}); 


