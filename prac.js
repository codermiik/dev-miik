/*---counts---*/
const counters=document.querySelectorAll('.count');
const speed=100;
counters.forEach((counter)=>{
    const updateCount=()=>{
        const target=parseInt(counter.getAttribute('data-target'));
        const count=parseInt(+counter.innerText);
        const increment=Math.trunc(target/speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
    
})

/*------FORM VALIDATION----- */

function validateForm(){
  var name=document.contactForm.name.value;
  var email=document.contactForm.email.value;
  var subject=document.contactForm.subject.value;
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf("."); 

   if(name==null || name==''){
     var error1=document.getElementById('nameERR').innerText='name cannot be blank';
     return false;
   }
   if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
    var error1=document.getElementById('emailErr').innerText='Enter a valid email';
    return false;
   } 
   if(subject== null || subject==''){
    var error1=document.getElementById('subjetErr').innerText='enter a subject';
    return false;
   }
   if(message=='' || message.length<10){
    var error1=document.getElementById('messageErr').innerText='please enter a detailed message';
    return false;
   }
    console.log(error1)
}









