function askMyName(){
    const name = prompt('Enter your name', 'James')

    if (name != null){
        document.getElementById('my-name').innerHTML = 'My name is ' + name ;
    }
}

function helloWorld() {
    const h1Message = document.getElementById('my-name').innerHTML ;
    alert(h1Message + ' แต่งไว้วิ่ง ไม่ใช่ซิ่งป่วนเมือง')
    
}

function calAge(){
    const yearOfBirth = prompt("Enter your date of birth DEC", "");
    const nowYear = new Date().getFullYear() ; 
    const age =  nowYear - yearOfBirth ; 
    alert(`You're ${age} years old`);
}

function loadProfile() {
    const name = "Jessada";
    const province = "Lamphun";
    console.log(name);
    const nameElement = document.querySelector("#my-name") ;
    nameElement.innerHTML = name ;
    const provinceElement = document.querySelector("#my-province").innerHTML = province ;
}