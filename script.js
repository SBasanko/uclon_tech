$(document).ready(function () {

	let items = [{
		name: 'A',
		score: 0
	}];

	$('.add-item').on('click', function () {
		const inputVal = $('.item-input').val();
		items.push(newItem(inputVal));
		renderTable();
	});

	function newItem(val) {
		return {
			name: val,
			score: 0
		}
	}

	function renderTable() {
		$.each(items, function (i, item) {
			console.log(item)
			$('.t-body').append(createTableItem(item))
		});
	}



	function createTableItem(item) {
		return '<div class="item"><div>' + item.name + '</div> <div>' + item.score + '</div></div> ';
	}


});
