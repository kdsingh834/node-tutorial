const os = require('os')

const user = os.userInfo()

console.log(user)

const amount = 12

if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`It's my first node app!!`);
