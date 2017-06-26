$(document).ready(function(){
	var slide =$('#movie-slide')
	var slideA =$('.slide a')
	var moviePage = $('#movie-page');
	var num = 0;
	
	slideA.eq(1).on('click',function(){
		num++;
		if(num>=8){
			num=8
		}
		slidePic(num)
		
	})
	slideA.eq(0).on('click',function(){
		num--;
		if(num<=0){
			num=0
		}
		slidePic(num)
	})
	function slidePic(index){
		var move = index*590;
		 slide.animate({left: "-" + move + "px"});
		moviePage.html(num+1+'/9')
	}
	
	
	
})
