function getWeather(){  
    $.getScript('http://php.weather.sina.com.cn/iframe/index/w_cl.php?charset=utf-8&day=0&city=大连', function(){
        for (var city in SWther.w) {
            for (var i=0; i<SWther.w[city].length; i++) {
                var wArr = SWther.w[city][i];
                if(wArr.s1&&wArr.s2){
                    if($.trim(wArr.s1)!=$.trim(wArr.s2)){
                        $("#weather").html(city+" "+wArr.s1+"转"+wArr.s2+" "+wArr.t1+"°~"+wArr.t2+"°");
                    }else{
                        $("#weather").html(city+" "+wArr.s1+" "+wArr.t1+"°~"+wArr.t2+"°");
                    }
                }
            }
        }
    });
} 
jQuery(function($){
	getWeather();
})