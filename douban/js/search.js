function search(data) {
	var ipt = $('#inp-query');
	var list = $('#list');
	var str = ''
	for(var i = 0; i < data.subjects.length; i++) {
		str += '<li>' +
			'<a href="javascript:;" target=_blank id="' + data.subjects[i].id + '">' + //data.subjects[i].alt
			'<div class="list-img">' +
			'<img src="' + data.subjects[i].images.small + '" />' +
			'</div>' +
			'<div class="movie-detail">' +
			'<p><span class="movie-name">' + data.subjects[i].title + '</span><span class="pro-year">' + data.subjects[i].year + '</span></p>' +
			'<p class="mother-lan">' + data.subjects[i].original_title + '</p>' +
			'</div>' +
			'</a>' +
			'</li>'

		list.html(str)
	}
	$('.movieSearch').remove();
	var clickA = $('#list').find('a');
	clickA.on('click', function() {
		var nav = $('.content')
		id = $(this).attr('id');
		nav.remove();
		$.ajax({
			type: "get",
			dataType : "jsonp",
			url: "https://api.douban.com/v2/movie/subject/" + id,
			jsonp: "callback",
			success: function(data) {
				   $('#box').html(createNew(data))
				
			}

		})

	})
}

function createNew(data){
	console.log(data)
//var copyright = $('.critical-content span');
//			var copy=data.summary.slice(-3);
//			var right = copy.replace('©豆瓣','');
//			copyright.eq(1).find('a').html(copy);
//			console.log(copy)
   			var str ='<div class="movie-box">'+
				'<h1><span class="itemName">'+data.title+'  '+data.original_title+'</span><span class="movieYear">('+data.year+')</span></h1>'+
				'<div class="movie-content clearfix">'+
					'<div class="article1 clearfix">'+
						'<div class="indent clearfix">'+
							'<div class="movieSubject">'+
								'<div class="mainPic">'+
									'<img src="'+data.images.medium+'" />'+
								'</div>'+
								'<div class="info">'+
									'<span><span class="pl">导演</span>: <span class="attrs"><a href="/search/%E5%88%98%E5%9C%A8%E5%85%83" rel="v:directedBy">'+data.directors[0].name+'</a></span></span><br>'+
									'<span><span class="pl">编剧</span>: <span class="attrs"><a href="/search/%E6%9D%A8%E7%86%99%E8%83%9C">'+data.writers+'</a></span></span><br>'+
									'<span class="actor"><span class="pl">主演</span>: <span class="attrs"><span><a href="/celebrity/1266979/" rel="v:starring">'+data.casts[0].name+'</a> / </span><span><a href="/celebrity/1318902/" rel="v:starring">'+
									  data.casts[1].name+'</a> / </span><span><a href="/celebrity/1326766/" rel="v:starring">'+data.casts[2].name+'</a> / </span><span><a href="/celebrity/1343615/" rel="v:starring">'+data.casts[3].name+'</a>'+
									'<a href="javascript:;" class="more-actor" title="更多主演">更多...</a>'+
									'</span>'+
									'</span><br>'+
									'<span class="pl">类型:</span> <span property="v:genre">'+data.genres[0]+'</span> / <span property="v:genre">'+data.genres[1]+'</span> / <span property="v:genre">'+data.genres[2]+'</span><br>'+
									'<span class="pl">官方网站:</span>'+
									'<a href="'+data.alt+'" rel="nofollow" target="_blank">'+data.alt+'</a><br>'+
									'<span class="pl">制片国家/地区:</span> '+data.countries+'<br>'+
									'<span class="pl">语言:</span> '+data.countries+'<br>'+
									'<span class="pl">首播:</span> <span property="v:initialReleaseDate" content="2015-07-03(韩国)">2015-07-03('+data.countries+')</span><br>'+

									'<span class="pl">集数:</span> '+data.episodes_count+'<br>'+
									'<span class="pl">单集片长:</span> 60分钟<br>'+
									'<span class="pl">又名:</span> '+data.aka[0]+' / '+data.aka[1]+' / '+data.aka[2]+'<br>'+
									'<span class="pl">IMDb链接:</span>'+
									'<a href="http://www.imdb.com/title/tt4799574" target="_blank" rel="nofollow">tt4799574</a><br>'+

								'</div>'+

							'</div>'+
							'<div class="marks">'+
								'<div class="comment clearfix">'+
									'<div class="clearfix">'+
										'<div class="rating_logo ll">'+
											'豆瓣评分'+
										'</div>'+
									'</div>'+
									'<div class="rating_self clearfix">'+
										'<div class="fold rating_num">'+data.rating.average+'</div>'+
										'<div class="rating_right ">'+
											'<div class="bigstar bigstar40"></div>'+
											'<div class="rating_sum">'+
												'<a href="collections" class="rating_people"><span>'+data.ratings_count+'</span>人评价</a>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="rating-on-weight">'+

								'</div>'+
							'</div>'+
						'</div>'+
						'<div id="interest_sect_level" class="clearfix">'+

							'<a href="https://www.douban.com/reason=collectwish&amp;ck=" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-26367601-wish">'+
								'<span>想看</span>'+
							'</a>'+
							'<a href="https://www.douban.com/reason=collectdo&amp;ck=" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-26367601-do">'+
								'<span>在看</span>'+
							'</a>'+
							'<a href="https://www.douban.com/reason=collectcollect&amp;ck=" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-26367601-collect">'+
								'<span>看过</span>'+
							'</a>'+
							'<div class="ll j a_stars">'+

								'评价:'+
								'<span id="rating"> <span id="stars" data-solid="https://img3.doubanio.com/f/shire/5a2327c04c0c231bced131ddf3f4467eb80c1c86/pics/rating_icons/star_onmouseover.png" data-hollow="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" data-solid-2x="https://img3.doubanio.com/f/shire/7258904022439076d57303c3b06ad195bf1dc41a/pics/rating_icons/star_onmouseover@2x.png" data-hollow-2x="https://img3.doubanio.com/f/shire/95cc2fa733221bb8edd28ad56a7145a5ad33383e/pics/rating_icons/star_hollow_hover@2x.png">'+

           '<a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-26367601-1">'+
        '<img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star1" width="16" height="16"></a>'+
           '<a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-26367601-2">'+
       ' <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star2" width="16" height="16"></a>'+
            '<a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-26367601-3">'+
        '<img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star3" width="16" height="16"></a>'+
            '<a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-26367601-4">'+
        '<img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star4" width="16" height="16"></a>'+
           ' <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-26367601-5">'+
        '<img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star5" width="16" height="16"></a>'+
   ' </span><span id="rateword" class="pl"></span>'+
								'<input id="n_rating" type="hidden" value="">'+
								'</span>'+
							'</div>'+
                              	'<div class="critical">'+
								'<div class="critical-title">'+
									'<p>剧情简介  </p>'+
								'</div>'+
								'<div class="critical-content">'+
									'<span>'+data.summary+'</span>'+
									'<span><a href="https://movie.douban.com/help/movie#t0-qs">©豆瓣</a></span>'+
								
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="aside">'+
						'<div class="gray-ad">'+
							'<h2>在哪儿看这部电视剧  · · · · · ·</h2>'+
							'<div class="payment">'+
								'<span>爱奇艺视频</span><span>付费11元</span>'+
							'</div>'+
						'</div>'+
						'<div class="advertise">'+
							'<img src="img/image.jpg" />'+
						'</div>'+
					'</div>'+
					'<div class="extra"></div>'+
				'</div>'+
			'</div>'

   	 return str
   }

function returname(obj){
	if(!obj){
		
		obj ='无'
	}
	return obj;
}
