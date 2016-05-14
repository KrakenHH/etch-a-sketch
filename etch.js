$(document).ready(function(){


function newGrid(){

		$('.container').remove();
		$('body').append($('<div></div>'));
		$('div').addClass('container');
		var newGrid = prompt("how big would you like your new grid? Enter a number 1-80");
		createNewGrid(parseInt(newGrid));
		var newDim = 500/newGrid;
		$('div>div').css('width', newDim+'px');
		$('div>div').css('height', newDim+'px');



}


	$('.newEtch').on('click',function(){
		newGrid();
	});

	createNewGrid(16);

	function gridder(x){

		for(z=1;z<x+1;z++){

		counter = 0;

		for (i=0; i<x; i++)
		{
			var $div = $('<div></div>');
			$('.container').append($div);
			counter++;

			if(counter===x){
			$('.container').append($('<br>'));
			}
		}

	}
	}



	function createNewGrid(x){

	gridder(x);
	
	$('div>div').on('mouseenter',function(){

	$(this).css('background-color', 'black');
	});
}

	function rainbowGrid(){

	newGrid();
	

	$('div>div').on('mouseenter',function(){

	random = 'rgb('+(Math.floor(Math.random()*256))+','+Math.floor((Math.random()*256))+','+Math.floor((Math.random()*256))+')';

	console.log(random);

	$(this).css('background-color', random);
	$(this).css('opacity' , "1.0");


	});
}

	function fadeInGrid(){

				newGrid();


		$('div>div').on('mouseenter',function(){



				if(parseInt($(this).css('opacity'))===1)
				{
				$(this).css('background-color','black');
				$(this).css('opacity' , "0");
				}

			$(this).css('opacity' , "+=0.1");

	});
}

	$('.rainbow').on('click',function(){

		rainbowGrid();

	});


	$('.fader').on('click',function(){


		fadeInGrid();

	});

});