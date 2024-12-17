redLight = document.getElementsByClassName('red')
for (let i = 0; i < redLight.length; i++) {
	redLight[i].style.backgroundColor = '#f00'
}
amberLight = document.getElementsByClassName('amber')
for (let i = 0; i < amberLight.length; i++) {
	amberLight[i].style.backgroundColor = '#ffa500'
}
greenLight = document.getElementsByClassName('green')
for (let i = 0; i < greenLight.length; i++) {
	greenLight[i].style.backgroundColor = '#0f0'
}

// Traffic Light Sequence //
let trafficLight = ['red', 'amber', 'green']
let currentLight = 0

function changeLight() {
	setTimeout(function () {
		redLight[0].style.backgroundColor = '#f00'
		amberLight[0].style.backgroundColor = '#888'
		greenLight[0].style.backgroundColor = '#888'
	}, 1000)

	setTimeout(function () {
		amberLight[0].style.backgroundColor = '#ffa500'
	}, 2000)

	setTimeout(function () {
		redLight[0].style.backgroundColor = '#888'
		amberLight[0].style.backgroundColor = '#888'
		greenLight[0].style.backgroundColor = '#0f0'
	}, 3000)

	setTimeout(function () {
		redLight[0].style.backgroundColor = '#888'
		amberLight[0].style.backgroundColor = '#888'
		greenLight[0].style.backgroundColor = '#888'
	}, 8000)

	setTimeout(changeLight, 5000) // Change light every 5 seconds
}
changeLight()
