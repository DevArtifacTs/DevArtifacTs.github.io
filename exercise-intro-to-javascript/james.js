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