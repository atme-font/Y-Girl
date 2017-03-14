window.onload=function(){
	var maxx=document.getElementById('max')
	maxx.onclick=function(){
		maxFun();
	}
	var img=document.getElementById('myimage')
	img.width=200
	img.height=200
    maxwidth=img.width*2
    maxheight=img.height*2
function maxFun(){
	    var endwidth=img.width*1.5
	    var endheight=img.height*1.5
		var maxTimer=setInterval(function(){
			if(img.width<endwidth){
				if(img.width<maxwidth){
                img.width=img.width*1.05
                img.height=img.width*1.05
            }else{
            	clearInterval(maxTimer)
            	alert('这已经是最大值了')
            }
            }else{clearInterval(maxTimer)}
		},20);
	}
	var minn=document.getElementById('min')
	min.onclick=function(){
		minFun()
	}
	var minwidth=img.width*0.5
	var minheight=img.height*0.5
	function minFun(){
	    var endwidth=img.width*0.7
	    var endheight=img.height*0.7
		var minTimer=setInterval(function(){
			if(img.width>endwidth){
				if(img.width>minwidth){
                img.width=img.width*0.95
                img.height=img.width*0.95
            }else{
            	clearInterval(minTimer)
            	alert('这已经是最小值了')
            }
            }else{clearInterval(minTimer)}
		},20);
	}
  }