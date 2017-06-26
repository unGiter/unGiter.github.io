$(document).ready(function() {
	var ipt = $('#inp-query');
	var list = $('#list');
		ipt.on("keyup", function() {
			var value = ipt.val();
			list.css("display", "block");
			var sc = $('<script>')
			if(value&&value!==''){
			sc.attr('src', 'https://api.douban.com/v2/movie/search?q='+value+'&callback=search&count=4');
			sc.attr('class','movieSearch')
			$('body').append(sc)
			}else{
				list.css("display", "none");
			}
			
		})
		$(document).on('click',function(){
			list.css("display", "none");
			
		})
		
	})

    
//https://movie.douban.com/j/subject_suggest?q=
//https://api.douban.com/v2/book/search?q=php&count=3&callback=fn
//v2/movie/subject
///v2/movie/coming_soon