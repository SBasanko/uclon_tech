$(document).ready(function () {

	let items = [];

	$('.add-item').on('click', function () {
		const inputVal = $('.item-input').val();
		if (!inputVal.length) {
			return;
		}
		items.push(newItem(inputVal));
		renderTable();
		renderBtns();
	});





	function newItem(val) { // val = z
		return {
			name: val, //z
			score: 0
		}
	}

	function renderTable() {
		$('.t-body').empty();
		$.each(items, function (i, item) {

			$('.t-body').append(createTableItem(item))
		});
	}



	function createTableItem(item) {
		return '<div class="item"><div>' + item.name + '</div> <div>' + item.score + '</div></div> ';
	}


	$('.radio-selects input').on('click', function (event) {
		event.stopPropagation();
		//console.log(event);

	});

	function renderBtns() {
		if (items.length < 2) {
			return
		}
		$('.compare-block').empty();
		$.each(items, function (i, item) {

			if (i + 1 == items.length) {
				return;
			}

			$.each(items, function (j) {
				if (i >= j) {
					return;
				} else {
					$('.compare-block').append(createCompareItem(item, items[j]))
				}


			})



		});



	}

	function createCompareItem(firstEl, secondEl) {
		return '<div class="case"><button>' + firstEl.name + '</button> <button>' + secondEl.name + '</button></div> ';
	}


});
