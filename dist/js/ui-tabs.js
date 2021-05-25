/* JavaScript File                                                  */
/* ui-tabs.js                                                  		*/
/* Modified January 22, 2019                                        */


var ui_tabs = (function(document) {

	var evt = [

		// tabs - function to control a tabbed interface

		function(document, window, args) {

			var tabs = document.querySelectorAll('[data-toggle=tab]');

			tabs.forEach(function(trigger) {

				trigger.addEventListener('click', function (event) {

					show(event);

				}, false);

			});

			var show = function(event) {

				event.preventDefault();
				
				var link 	= event.target;
				var nav 	= link.closest('.nav');
				var links 	= nav.querySelectorAll('.nav-link');

				var tab 	= document.querySelector('#' + link.getAttribute('aria-controls'));
				var tabs 	= tab.closest('.tabs');

				nav.querySelectorAll('.nav-link').forEach(function(item) {

					item.classList.remove('active');
					item.setAttribute('aria-selected', false);
				});

				link.classList.add('active');
				link.setAttribute('aria-selected', true);

				tabs.querySelectorAll('.tab').forEach(function(item) {

					item.classList.remove('active');
				});

				tab.classList.add('active');
			}

			if (args && args.action === 'show') {

				show(args.event);
			}
		}

	],
	initAll = function(args) {

		initEvt(document, window, args);
	},
	initEvt = function(document, window, args) {

		evt.forEach(function(e) {
			
			e(document, window, args);
		});
	};
	
	return { init: initAll };

})(document, window);

ui_tabs.init();