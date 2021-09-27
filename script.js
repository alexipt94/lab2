var countries = document.querySelector('#countries');

var ruCities = document.querySelector('#ru');
var byCities = document.querySelector('#by');
var uaCities = document.querySelector('#ua');
var usCities = document.querySelector('#us');
var caCities = document.querySelector('#ca');

countries.addEventListener('change', function() {
	document.querySelector('.active.cities').classList.remove('active');
		
	if(this.value == 'ru') {
		ruCities.classList.add('active');
	}
	if(this.value == 'by') {
		byCities.classList.add('active');
	}
	if(this.value == 'ua') {
		uaCities.classList.add('active');
	}
	if(this.value == 'us') {
		usCities.classList.add('active');
	}
	if(this.value == 'ca') {
		caCities.classList.add('active');
	}
});