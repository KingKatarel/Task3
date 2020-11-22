function chooseTypeForPassword(length,isNumber,isChar,isSymbol){
    const n = "0123456789";
    const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const lAn = l+n;
    const s = "!№;%:?*()_+="
    const lAs = l+s;
const nAs = n + s;


let password;

	if(isNumber && !isChar && !isSymbol) password=createPasswordWithParametres(length,n);
	else if(isChar && !isNumber && !isSymbol) password=createPasswordWithParametres(length,l);
	else if(isSymbol && !isNumber && !isChar) password=createPasswordWithParametres(length,s);
	else if(isNumber && isChar && !isSymbol) password=createPasswordWithParametres(length,lAn);
	else if(isNumber && isSymbol && !isChar) password=createPasswordWithParametres(length,nAs);
	else if(isSymbol && isChar && !isNumber) password=createPasswordWithParametres(length,lAs);
    else  password=createPasswordWithParametres(length,lAnAs);
    
    return password;
}

generatePass (5, true, 45, (rusult)=> {
    console.log(result)
}
//1
function passwordCallback(){
    const result = chooseTypeForPassword(5, true, 45)
    setTimeout(()=> {
        console.groupCollapsed('First task')
        console.log(result);
        console.groupEnd('First task')

    }, 500)

}

passwordCallback()

//2
function passwordPromis(){
    const promis = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(generatePassword(5, true, true))
        }, 500)
    })

    return promis
}


passwordPromis()
.then(callback)
.catch((err) => console.log(err))
.finally(()=>{
    console.groupEnd('Task 2')
})

//3

Promise.all([
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise(),
    ForRandomPasswordInPromise()
])


async function AsyncFunctionPassword(){
    try {
        //Start Timer
        console.time("Time Async");

        const password1 = await ForRandomPasswordInPromise()
        const password2 = await ForRandomPasswordInPromise()
        const password3 = await ForRandomPasswordInPromise()
        const password4 = await ForRandomPasswordInPromise()
        const password5 = await ForRandomPasswordInPromise()
        const password6 = await ForRandomPasswordInPromise()
        const password7 = await ForRandomPasswordInPromise()
        const password8 = await ForRandomPasswordInPromise()
        const password9 = await ForRandomPasswordInPromise()
        const password10 = await ForRandomPasswordInPromise()
    
        console.groupCollapsed('Async/Await')
        console.log(password1);
        console.log(password2);
        console.log(password3);
        console.log(password4);
        console.log(password5);
        console.log(password6);
        console.log(password7);
        console.log(password8);
        console.log(password9);
        console.log(password10);
        console.groupEnd('Async/Await');
    
         //End Timer
console.timeEnd("Time Async");








