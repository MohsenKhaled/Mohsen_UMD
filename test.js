let myFetch = require("./index");
myFetch.init({
    address: "https://reqres.in/api/users/",
})
myFetch.PUT("2",{
    name:"mohsen"
}).then(data => console.log(data)
);
