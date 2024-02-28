document.addEventListener('mousemove', e => {
	const moveX = (e.clientX - window.innerWidth / 2) * -0.005
	const moveY = (e.clientY - window.innerHeight / 2) * 0.01
	document.documentElement.style.setProperty('--move-x', `${moveX}deg`)
	document.documentElement.style.setProperty('--move-y', `${moveY}deg`)
})

window.addEventListener('deviceorientation', event => {
	const moveX = event.gamma * 0.15
	const moveY = event.beta * 0.00001
	document.documentElement.style.setProperty('--move-x', `${moveX}deg`)
	document.documentElement.style.setProperty('--move-y', `${moveY}deg`)
})
