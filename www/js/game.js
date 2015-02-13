angular.module('starter.controllers')
	.controller('GameCtrl', function ($scope) {

		//function checkPos() {
		//	var res = true;
		//	$.each($('.cell'), function (key, value) {
		//		key = key + 1;
		//		value = $(value).text() * 1;
		//		if (key == 16)
		//			key = 0;
		//		if (key != value) {
		//			res = false;
		//			return false;
		//		}
		//
		//	});
		//	return res;
		//}

		//$scope.fHeight = angular.element(document.getElementsByClassName('puzzle-field')[0]).prop('offsetHeight');

		//$scope.restart = function () {
		//	var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'empty'];
		//
		//	var emptyElem = angular.element(document.getElementsByClassName('empty')[0]);
		//	emptyElem.removeClass('empty');
		//
		//	angular.forEach(a, function (v, n) {
		//		var random = array[Math.floor(Math.random() * array.length)];
		//		if (random == 'empty') {
		//			$scope['cell' + (n + 1) + 'class'] = 'empty';
		//			$scope['cell' + (n + 1)] = '';
		//		} else {
		//			$scope['cell' + (n + 1)] = random;
		//		}
		//		var index = array.indexOf(random);
		//		array.splice(index, 1);
		//	})
		//};
		$scope.onDragUp = function(){
			console.log(545);
		}

		function move(action, id, e) {
			if (action) {
				var emptyElem = angular.element(e);
				var elem = angular.element(document.getElementById(id));
				emptyElem.children().text(elem.children().text());
				emptyElem.removeClass('empty');
				elem.children().text('');
				elem.addClass('empty');
				//turns++;
				//$('#turns').text(turns);

				//if (checkPos()) {
				//	$('#mess').text('You win!').addClass('info');
				//}
			} else {
				//$('#mess').text('No move!').addClass('err');
			}
		}

		$scope.swipe = function (direction) {
			var action = true;
			var id;
			var e = document.getElementsByClassName('empty')[0];
			switch (direction) {
				case 'left':
					id = e.id * 1 + 1;
					if (id % 4 == 1) {
						action = false;
					}
					break;
				case 'up':
					id = e.id * 1 + 4;
					if (e.id * 1 > 12 && e.id * 1 < 17) {
						action = false;
					}
					break;
				case 'right':
					id = e.id * 1 - 1;
					if (id % 4 == 0) {
						action = false;
					}
					break;
				case 'down':
					id = e.id * 1 - 4;
					if (e.id * 1 > 0 && e.id * 1 < 5) {
						action = false;
					}
					break;
				default:
					return;
			}
			move(action, id, e);
		};

		var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'empty'];
		var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

		angular.forEach(a, function (v, n) {
			var random = array[Math.floor(Math.random() * array.length)];
			if (random == 'empty') {
				$scope['cell' + (n + 1) + 'class'] = 'empty';
			} else {
				$scope['cell' + (n + 1)] = random;
			}
			var index = array.indexOf(random);
			array.splice(index, 1);
		})
	});