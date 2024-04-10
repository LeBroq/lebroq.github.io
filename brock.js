let current_rotation_x = 0;
let current_rotation_y = 0;
let current_rotation_z = 0;

document.querySelector(".BlueBar").addEventListener('click', function() {
		if (Math.random() > 0.5) {
	    	current_rotation_x += 180;
		}
	    if (Math.random() > 0.5) {
	    	current_rotation_y += 180;
	    }
	    if (Math.random() > 0.5) {
	    	current_rotation_z += 90;
	    }
    	document.querySelector(".BlueBar").style.transform
    	= 'rotateX(' + current_rotation_x + 'deg)' +
    	'rotateY(' + current_rotation_y + 'deg)' +
    	'rotateZ(' + current_rotation_z + 'deg)';
    }
);