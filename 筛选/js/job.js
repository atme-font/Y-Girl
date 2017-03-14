$(function(){
	$("#select_intelligent").click(function(){
		var str = '',
		intell = $("#intelligentbox span"),
		len = intell.length;
		for(var i=0;i<len;i++){
			var temp = intell.eq(i);
			temp.find('b').remove()
			str+='<span onclick="$(this).remove()">'+temp.html()+'</span>';
		};
		$("#info").html(str);
	  	$('#poinbox').show(),
		$('#intelligent').fadeIn();
	});
	$('#mains').hide();
	$('#info a').hide();
	$("#main .use ul li").click(function(){
		var n=$(this).index()
		//alert(n)
		$("#mains").show();
	  	$("#mains").find(".htx").eq(n).show();	
	  	$('#main').hide();
	  	$("#navchoose").text($(this).text());	
	});
	$("#mains .nav .all").click(function(){
	  	$('#mains').hide();	
		$("#mains").find(".htx").hide();	
	  	$('#main').show();	
	});
	$("#mains .use ul li").click(function(){
		var $this = $(this),
		txt = $this.text(),
		info = $("#info"),
		alist = info.find('a'),
		hasItem = !1;
		for(var i=0,len=alist.length;i<len;i++){
			if($(alist[i]).text() == txt){
				hasItem = !0;	
			}
		}
		//var a=1
		!hasItem&&info.append('<span onclick="$(this).remove();var a=$(\'#intelligentbox\').children(\'span\').length;if(a==0){$(\'#pointx\').show();}" ><a href="javascript:;" class="val" >'+txt+'</a></span>');
		$(".post .posttwo .term .point").css("padding-top","0");
		$("#pointx").hide();
	});
	$("#sure,#cancel").click(function(){
		$('#poinbox').hide();
		$("#intelligent").hide();
		$("#intelligentbox").html($("#info").html());
		$("#intelligentbox span a").append('<b></b>');
	});
	$("#intelligentbox span").click(function(){
		$(this).remove();
		
	});
});


$(function(){
	$("#select_intelligents").click(function(){
		var str = '',
		intell = $("#intelligentboxs span"),
		len = intell.length;
		for(var i=0;i<len;i++){
			var temp = intell.eq(i);
			temp.find('b').remove()
			str+='<span onclick="$(this).remove()">'+temp.html()+'</span>';
		};
		$("#infos").html(str);
	  	$('#poinboxs').show(),
		$('#intelligents').fadeIn();
	});
	$('#mainss').hide();
	$('#infos a').hide();
	$("#mainsss .use ul li").click(function(){
		var n=$(this).index();
	  	$('#mainss').show();
	  	$("#mainss").find(".htx").eq(n).show();	
	  	$('#mainsss').hide();
	  	$("#navchooses").text($(this).text());	
	});
	$("#mainss .nav .all").click(function(){
	  	$('#mainss').hide();	
	  	$("#mainss").find(".htx").hide();
	  	$('#mainsss').show();	
	});
	$("#mainss .use ul li").click(function(){
		var $this = $(this),
		txt = $this.text(),
		info = $("#infos"),
		alist = info.find('a'),
		hasItem = !1;
		for(var i=0,len=alist.length;i<len;i++){
			if($(alist[i]).text() == txt){
				hasItem = !0;	
			}
		}
		!hasItem&&info.append('<span onclick="$(this).remove()" ><a href="javascript:;" class="val" >'+txt+'</a></span>');
		$(".post .posttwo .term .point").css("padding-top","0");
	});

	$("#sures,#cancels").click(function(){
		$('#poinboxs').hide();
		$("#intelligents").hide();
		$("#intelligentboxs").html($("#infos").html());
		$("#intelligentboxs span a").append('<b></b>');
	});
	$("#intelligentboxs span").click(function(){
		$(this).remove();
	});
});