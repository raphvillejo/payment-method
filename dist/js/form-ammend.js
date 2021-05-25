/* JavaScript File                                                  */
/* form-ammend.js                                                   */
/* Modified Sept 30, 2020                                           */


var form_ammend = (function(document, window) {

	var evt = [

		function(document, window) {

			var formgroups = document.querySelectorAll('.form-group');

			formgroups.forEach(function(formgroup){

				var toggle = formgroup.querySelectorAll('[data-toggle=amend]');
				var panels = formgroup.querySelectorAll('.form-amend');

				// amend using radio button
				toggle.forEach(function(button){

					var targets = document.querySelectorAll('#'+ button.getAttribute('for'));

					targets.forEach(function(target){

						var dialog = document.querySelector('#'+ button.getAttribute('aria-controls'));

						target.addEventListener('change', function(e){

							if(target.checked) {
								
								panels.forEach(function(panel){
									panel.setAttribute('aria-hidden', true);
								});
	
								dialog.setAttribute('aria-hidden', false);

							}

						}, false);

					});
					
				});

				// amend using selectbox
				var toggleSelect = formgroup.querySelectorAll('select');

				if(toggleSelect) {

					toggleSelect.forEach(function(select){
	
						select.addEventListener('change', function(event){
							
							var amend = event.target.options[event.target.selectedIndex].getAttribute('data-toggle');
							var controls = event.target.options[event.target.selectedIndex].getAttribute('aria-controls');
							
							var dialog = document.querySelector('#'+ controls);

							if(amend === 'amend') {

								panels.forEach(function(panel){
									panel.setAttribute('aria-hidden', true);
								});
	
								dialog.setAttribute('aria-hidden', false);

							} else {
								panels.forEach(function(panel){
									panel.setAttribute('aria-hidden', true);
								});
							};
						});
					});

				}

			});
		}

	],
	initAll = function() {

		initEvt(document, window);
	},
	initEvt = function(document, window) {

		evt.forEach(function(e) {
			
			e(document, window);
		});
	};
	
	return { init: initAll };

})(document, window);

form_ammend.init();