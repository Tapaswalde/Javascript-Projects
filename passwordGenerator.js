function generate(len,isuppercase,islowercase,issymbol,isnumberchar){
    const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercasechar="abcdefghijklmnopqrstuvwxyz";
    const numberchar="0123456789";
    const symbolchar="/*-+.`~!@#$%^&";
    let allowedchars="";
    let password="";
    allowedchars += isuppercase ? uppercasechar:"";
    allowedchars += islowercase ? lowercasechar:"";
    allowedchars += isnumberchar ? numberchar:"";
    allowedchars += issymbol ? symbolchar : "" ;
    if(len<=0){
        return `The length of password must be greater than zero`;
    }
    else if(allowedchars.length==0){
        return `Atleast one char should be selected`;
    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password+=allowedchars[randomindex];
    }
    return password;
}
const length=4;
const isuppercase=true;
const islowercase=true;
const issymbol=true;
const isnumberchar=true;
const result=generate(length,isuppercase,islowercase,issymbol,isnumberchar);
console.log(result);