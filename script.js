let send =document.querySelector('.btn-send');
let inpname=document.querySelectorAll('.name');
let inptext=document.querySelector('.message');
let histor=document.querySelector('.history');
let showbut=document.querySelector('.btn-show');
let sms=[];
class Message {
    constructor(name,text) {
        this.name = name;
        this.time = gettime();
        this.text = text;
    }
    toHTML() {
    return `<p>[${now.getHours()}:${now.getMinutes()}][${this.name()}]:[${this.text}]</p>`;
    }
}
class Messenger{
    constructor(){
    this.sms=[];
    }
    show_history(){
    sms.forEach(element =>{
        console.log(element)
    });
    }
    send(name, text){
   let ob1=new Message(inpname,gettime(),inptext);
   sms.push(ob1.toHTML());
    }}
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

 send.addEventListener('click',() =>{
    let ob3= new Message(inpname.value,inptext.value)
    sms.push(ob3.toHTML())
 })
 showbut.addEventListener('click',() =>{
    histor.innerHTML='';
    sms.forEach(item =>{
        histor.innerHTML +=item;
    });
 })