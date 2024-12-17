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
    document.getElementById(trafficLight[currentLight]).style.backgroundColor = '#fff'
    currentLight = (currentLight + 1) % trafficLight.length
    document.getElementById(trafficLight[currentLight]).style.backgroundColor = '#000'
}
