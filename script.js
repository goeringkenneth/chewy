// global Variables

const fuck=document.querySelector('.fuck')
// const cunt=document.querySelector('.cunt')
// const bitch=document.querySelector('.bitch')
// const poop=document.querySelector('.poop')
const mySound = document.querySelector('.penis');
const scareSound = document.querySelector('.fart');
const body = document.querySelector('.butt');



const allVar=[fuck]
// Button click function
for (i = 0; i < allVar.length; i++) {
    const dog=allVar[i];
    console.log();
    
  dog.addEventListener("click", ()=> {
    dog.classList.toggle("open")
    body.classList.toggle("open")
    // scare.classList.toggle("switch")
    mySound.play();
    console.log(fuck)
    const  myTimeout = setTimeout(scare, 2000);
    function scare() {
      dog.classList.toggle("switch")
      body.classList.toggle("switch")
      scareSound.play();
    }

    })
  
    

}

