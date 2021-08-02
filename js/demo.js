
 {
	setTimeout(() => document.getElementById("start").classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.getElementById("start").classList.remove('render');
		document.getElementById("start").addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
	imagesLoaded('.glitch__img', { background: true }, () => {
		document.getElementById("start").classList.remove('loading');
		document.getElementById("start").classList.add('imgloaded');
	});
	 
	const decoder = document.getElementById("decoding");
		decoder.onclick = function() {
			disorder(decoder);
		};

	// https://www.cssscript.com/decoding-effect-scramblejs/

	var when_i_click = function(){
		alert('Awaiting further transmissions to begin decryption');
	};
}
