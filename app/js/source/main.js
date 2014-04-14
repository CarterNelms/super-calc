(function()
{
	'use strict';

	$(document).ready(initialize);

	function initialize()
	{
		$('.number').click(number);
		$('.operator').click(operator);
		$('.clear').click(clear);
		$('#decimal').click(decimal);
		$('#sign').click(sign);
		$('#push').click(push);
	}

	function getDisplay()
	{
		return $('#display').text();
	}

	function setDisplay(disp)
	{
		$('#display').text(disp);
	}

	function resetDisplay()
	{
		setDisplay('0');
	}

	function number()
	{
		var num = this.textContent;
		var disp = getDisplay();
		disp = (disp !== '0') ? disp + num : num;

		setDisplay(disp);
	}

	function operator()
	{
		var op = $(this).data('op');
		var input= getInput();
		var ans;
		if(input.length > 0)
		{
			switch(op)
			{
				case 'add':
					ans = input[1] + input[0];
					break;
				case 'subtract':
					ans = input[1] - input[0];
					break;
				case 'multiply':
					ans = input[1] * input[0];
					break;
				case 'divide':
					ans = input[1] / input[0];
					break;
				case 'sum':
					ans = sum(input);
					break;
				case 'exponent':
					ans = exponent(input);
					break;
				case 'squareroot':
					ans = Math.sqrt(input[0]);
					break;
				case 'factorial':
					ans = factorial(input);	
					break;
			}
		}
		setDisplay(ans);
	}

	function getInput()
	{
		var input = [];
		$('#queue > div').each(function(index, div)
		{
			input[index] = $(div).text() * 1;
		});
		return input;
	}

	function sum(input)
	{
		var ans = 0;
		for(var i = 0; i < input.length; ++i)
		{
			ans += input[i];
		}
		return ans;
	}

	function exponent(input)
	{
		var ans = 1;
		for(var i = 0; i < input[0]; ++i)
		{
			ans *= input[1];
		}		
		return ans;
	}

	function factorial(input)
	{
		var ans = 1;
		for(var i = input[0]; i > 1; --i)
		{
			ans *= i;
		}		
		return ans;
	}

	function clear()
	{
		if(this.textContent === 'C')
		{
			resetDisplay();
		}
		else
		{
			$('#queue').empty();
		}
	}

	function push()
	{
		var $newLine = $('<div>').text(getDisplay() * 1);
		$('#queue').prepend($newLine);
		resetDisplay();
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