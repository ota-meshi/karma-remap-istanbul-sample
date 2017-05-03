/*eslint prefer-arrow-callback:"off", no-var:"off",object-shorthand:"off"*/
(function() {
	'use strict';

	describe('sample', function() {

		it('getValue', function() {
			const m = new Main();
			expect(m.getValue()).toBe('value');
		});
	});

})();