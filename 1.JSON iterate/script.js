const obj1={
    name:"V.Nithya",
    email:"nithu222veera@gmail.com",
    place:"komarapalayam",
}

//1.for...in loop

for(let key in obj1){
    console.log(key,":",obj1[key])
}

//2.for...of loop

for(let key of Object.keys(obj1)){
    console.log(key,":",obj1[key])
}

//3.foreach...loop

Object.keys(obj1).forEach((key) => {
    console.log(key,":",obj1[key])
})
