/* JavaScript File                                                  */
/* event-transition.js                                              */
/* Modified April 6, 2020                                           */


var event_transition = (function(document, window) {

	var evt = [

		// transition - controls our different transition events from panels, modals and drawers

		function(document, window, args) {

			var html 			= document.querySelector('html');
			var backdrop 	= document.querySelector('#layout-backdrop');
			var panel 		= args.panel;
			var target 		= args.target;
			var event 		= args.event;
			
			if (html.classList.contains('overflow')) {

				panel.classList.add('hidden');
				backdrop.classList.add('hidden');
				
				backdrop.classList.remove('show');
				panel.classList.remove('show');
				panel.setAttribute('aria-hidden', true);
				target.classList.remove('show');

				setTimeout(function() {

					html.classList.remove('overflow');
					html.classList.remove('overflow-' + event);

				}, 300);
			}
			else {

				panel.classList.remove('hidden');
				backdrop.classList.remove('hidden');

				html.classList.add('overflow', 'overflow-' + event);
				backdrop.classList.add('show');
				panel.classList.add('show');
				panel.setAttribute('aria-hidden', false);
				target.classList.add('show');
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

// event_transition.init({ hello: 'there' });