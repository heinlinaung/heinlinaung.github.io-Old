(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	// button.addEventListener('click', handler, false); // for MOBILE VERSION
	button.addEventListener('mouseover', handler, false); 
	wrapper.addEventListener('mouseout', handler, false);

	function handler(){
	  if(!open){
	    button.innerHTML = " - ";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    button.innerHTML = " + ";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	// function closeWrapper(){
	// 	classie.remove(wrapper, 'opened-nav');
	// 	alert('closeWrapper')
	// }

})();
