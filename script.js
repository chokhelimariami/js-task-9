let password = [];
let password1= "PAJSKK";
console.log(password1.toLowerCase());
let password2 = "PAROLl126153";
console.log(password2.toLowerCase());
let password3 = "KSJDKV6899";
console.log(password3.toLowerCase());
password.push(password1,password2,password3)
console.log(password);

for (let i = 0; i< password.length; i++) {
    if(password[i].length > 8){
        password[i]= "strong password"
    }else{
        password [i]= "weak password"
    }
}

console.log(password);

let letterCount = 0;
  for (let j = 0; j < password1.length; j++) {
    if (password1[j]) {
      letterCount++;
    }
  }
  console.log("Number of letters in the first password is", letterCount);

  
  
  let count=0;
  for (let i = 0; i< password2.length; i++){
    if (password2[i]) {
        count++
    }
        
    }
    console.log("number of letters in the second password is",count);


    let count2=0;

    for (let i=0; i< password3.length; i++){
        if(password3[i]){
            count2++
        }
    }
    console.log("number of letters in the third password is",count2);

password.shift();
console.log(password);

password.unshift ("new password");
console.log(password);