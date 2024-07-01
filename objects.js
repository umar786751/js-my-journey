// usefull thing [console.log(Object.keys(object_name))]
const regularUser = {}
regularUser.email = "umar@cipherdevs.com"
regularUser.pass = "abc123"
regularUser.age = 28

// console.log(regularUser)


const tinderUser = {
    email: "example@example.com", 
    fullName: {
        userFullName: {
            fname: "Umar",
            lname: "nadeem"
        }
    }
}
// console.log(tinderUser.fullName.userFullName.fname);

const obj1 ={1: 'a', 2: 'b'}
const obj2 ={3: 'c', 4: 'd'}
const obj3 ={5: 'f', 6: 'e'}

const newObj = Object.assign({}, obj1, obj2, obj3)
// this is another method to merge all objects

const newMergedObjs = {...obj1, ...obj2, ...obj3}
// console.log(newMergedObjs)

