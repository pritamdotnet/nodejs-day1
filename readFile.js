const fs = require('fs');


// fs.readFile('./learn.txt',{encoding:'utf-8',flag:'r'},function(err,fileData){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(fileData) // buffer result
//     }
// })

fs.readFile('./json/user.json',function(err,jsonData){
        if(err){
        console.log(err)
    }else{
        const user = JSON.parse(jsonData)
        console.table(user);
        console.log(user.designation);

        console.log(jsonData.toString()) // buffer result
    }
})

// reading through simple arrary list of obj json file
fs.readFile('./json/users.json',function(err,jsonData){
    if(err){
    console.log(err)
}else{
    const users = JSON.parse(jsonData)
    for(let index = 0; index < users.length; index++){
       
        console.log(users[index].designation);
    }

}
})