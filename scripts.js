const date = 2050
const status = "parent"
let count = 0

if (date === 2050) {
	console.log("January", 'New Years Day');
	console.log("March", 'Human Rights Day');
	month = 'April'
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	count = count + 4


	if (status === "student") {
	  console.log('June', 'Youth Day')
		console.log('August', 'Women’s Day')
	  console.log('September', 'Heritage Day')
	  month = 'December'
	  console.log(month, 'Day of Reconciliation')
	 count = count + 4
    }

	if  (status === "parent") {
    month = 'December'
	  console.log(month, 'Christmas Day')
    console.log(month, 'Day of Goodwill')
	  count = count + 2
    }
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)