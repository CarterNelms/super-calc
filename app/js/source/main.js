(function()
{
	'use strict';

	$(document).ready(initialize);

	function initialize()
	{
		//$('#title').click(title);
		$('.number').click(number);
		$('.clear').click(clear);
		$('#decimal').click(decimal);
		$('#sign').click(sign);
	}

	function getDisplay()
	{
		return $('#display').text();
	}

	function setDisplay(disp)
	{
		$('#display').text(disp);
	}

	function number()
	{
		var num = this.textContent;
		var disp = getDisplay();
		disp = (disp !== '0') ? disp + num : num;

		setDisplay(disp);
	}

	function clear()
	{
		if(this.textContent === 'C')
		{
			setDisplay('0');
		}
	}

	function decimal()
	{
		var disp = getDisplay();
		disp += (disp.indexOf('.') === -1) ? '.' : '';
		setDisplay(disp);
	}

	function sign()
	{
		var disp = getDisplay();
		// if(disp * 1 !=== 0)
		// {
		// 	disp
		// }


		if(disp.indexOf('-') === -1)
		{
			if(disp * 1 !== 0)
			{
				disp = '-' + disp;
			}
		}
		else
		{
			disp = disp.split('-')[1];
			// Remove - sign
		}

		setDisplay(disp);
	}

})();