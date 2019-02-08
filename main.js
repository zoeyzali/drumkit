// step 1 add a keydown eventlistener 
// 2: you create a function for the event
// and then transitionend in order to end the playSound function

window.addEventListener('keydown', playSound);
    
    function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
   
    key.classList.add('playing');    
    audio.currentTime = 0;
    audio.play();
    }

    function removeTransition(e){
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');   
    }
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//alternative: keydown and keyup

/* window.addEventListener("keydown", function(e){
	var key = e.keyCode;
	var audio = document.querySelector(`audio[data-key="${key}"]`)
	if(!audio) return;

	audio.currentTime = 0; //rewind to the start
	audio.play();

	var divKey = document.querySelector(`div.key[data-key="${key}"]`).classList.add("playing");
})

window.addEventListener("keyup", function(e){
	var key = e.keyCode;
	var divKey = document.querySelector(`div.key[data-key="${key}"]`).classList.remove("playing");
})

*/