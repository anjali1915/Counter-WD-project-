let oridate= document.getElementById("time").innerHTML = "18 June 2024 12:00 am";
const inputs= document.querySelectorAll("input");
 const clock=()=>{
    const fur = new Date(oridate); //timeline date
    const now= new Date(); //current date
    console.log(fur,now)
    const diff= (fur-now)/1000;  //divide by 1000 converts milliseconds to seconds
    console.log(diff)
   const days= diff/24/3600; //divide by 24 and 3600 gives number of days 
   inputs[0].value= Math.floor(days);
    console.log(days)
  const hours= (diff/3600 )%24 //divide by 3600 gives number of hours and mod 24 i.e remainder no. of hrs remain
  console.log(hours)
  inputs[1].value=Math.floor(hours)
  const minutes =(diff/60)%60 //divides by 60 gives minutes and mod 60 gives remainder minutes
  console.log(minutes)
  inputs[2].value=Math.floor(minutes)
  const seconds= diff%60; //already in seconds  mod gives remaining seconds
  console.log(seconds)
  inputs[3].value=Math.floor(seconds)
 }
 setInterval(
    ()=>{
    clock()  
 },1000)
 
