var until = "2013-08-18T15:00:00+02:00";

until = moment(until);

function calculateDiff(now) {
	
	var days = until.diff(now, "days"),
		hours = until.diff(now, "hours") - (days*24),
		minutes = until.diff(now, "minutes") - (days*24*60 + hours*60),
		seconds = until.diff(now, "seconds") - (days*24*60*60 + hours*60*60 + minutes*60);
		
	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};

}

function update() {

	var now = moment();
	var diff = calculateDiff(now);

	if ($('#timer .days .number').text() != diff.days + '') $('#timer .days .number').text(diff.days);
	if ($('#timer .hours .number').text() != diff.hours + '') $('#timer .hours .number').text(diff.hours);
	if ($('#timer .minutes .number').text() != diff.minutes + '') $('#timer .minutes .number').text(diff.minutes);
	if ($('#timer .seconds .number').text() != diff.seconds + '') $('#timer .seconds .number').text(diff.seconds);

}

update();
var updater = window.setInterval(update, 1000);