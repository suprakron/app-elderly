const friendsArray = [
    {
        firstName: "Harry",
        lastName: "Potter",
        age: 25,
        height: 180,
        phone : "06574299xx"
    },{
        firstName: "degoo",
        lastName: "Potter",
        age: 25,
        height: 170,
        phone : "06xx4299xx"
    },{
        firstName: "Chomphunuch",
        lastName: "Panya",
        age: 21,
        height: 170,
        phone : "06364299xx"
    },{
        firstName: "Rawiwan",
        lastName: "Changda",
        age: 20,
        height: 170,
        phone : "09874299xx"
    }
]

const friendsArrayPhoneNumber = friendsArray.map(function(element, index) {
    return ({
        firstName : element.firstName,
        lastName : element.lastName,
        phone : element.phone
    })
}
)

console.log(friendsArrayPhoneNumber)
const friendmorethan = friendsArray.filter(function(element,index){
    return Number(element.age) >14 && element.height > 170

})
