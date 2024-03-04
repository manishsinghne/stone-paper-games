let allbtn= document.querySelectorAll('.imgs')
let play = document.querySelector('.play')
let score1= document.querySelector('.one')
let score2= document.querySelector('.two')
let us=0;
let co=0;
// computer click
 function computer(){
    let arr= ['stone','paper','scisser']
   let mat=  arr[(Math.floor(Math.random()*arr.length))]
   return mat
//    let comparr=arr[mat]
   
    //  console.log( 'computer :',mat)
 }

//  user choice
// let useratt= e.getAttribute('id')
 function playgame(useratt){
    console.log( 'user',useratt)
    let comp=computer()
    console.log( 'como',comp)
if(comp==useratt){
    console.log('draw')
    play.innerHTML='its draw'
    play.style.backgroundColor='gray'
}
else if(
( useratt=='stone'&& comp=='paper'||
  useratt=='scisser'&& comp=='paper'||
  useratt=='paper'&& comp=='stone')
){
    play.innerHTML='you are win';
    play.style.backgroundColor='red'

    score1.innerHTML=us
    us++
}
else{
    play.innerHTML='computer is win'
    play.style.backgroundColor='green'

    score2.innerHTML=co
    co++
}
 }
allbtn.forEach((e)=>{
e.addEventListener('click',()=>{

    // user choice
    let useratt= e.getAttribute('id')
    // console.log(' user :',useratt)


    playgame(useratt)
    // computer 
    // computer()
   

})
})