        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
  // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer :{
                                lineStyle : {
                                    color:'#fff',
                                    width:1,
                                }
                            } ,
                        textStyle :{
                            color:'#626262',
                            fontSize :14,
                        },
                        backgroundColor :'rgba(0,0,0,0)',
                        position : function(p) {
                            // 位置回调
                            // console.log && console.log(p);
                            return [p[0] - 20, p[1] - 80];
                        },
                        /*formatter: function (params,ticket,callback) {
                            console.log(params)
                            var res = '' + params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
                            }
                            setTimeout(function (){
                                // 仅为了模拟异步回调
                                callback(ticket, res);
                            }, 1000)
                            return '加载中';
                        }*/
                    },
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: false},
                            dataView : {show: false, readOnly: false},
                            magicType : {show: false, type: ['line']},
                            restore : {show: false},
                            saveAsImage : {show: false}
                        }
                    },
                    grid : {
                        borderColor :　'#fff',
                    },
                    calculable : false,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['工作地点','浙江大学','武汉','杭州','北京','浙江大学','杭州'],
                            axisLabel:{
                                textStyle :{
                                    color:'#626262',
                                    fontSize :14,
                                },
                            },
                            splitLine:{
                        　　　　show : false,
                        　　},
                            axisTick : {    // 轴标记
                                show:true,
                                lineStyle : '#fff'
                                 },
                            axisLine :{
                                lineStyle : {
                                    color:'#e9e9e9',
                                    width:1,
                                }
                            }  ,
                        }
                    ],
                    yAxis : [
                        {
                             type : 'value', 
                             show : false,
                            splitLine:{
                            　　　　show : false,
                            　　},
                            axisTick : {    // 轴标记
                                show:true,
                                lineStyle : '#fff'
                            },
                            axisLabel : {
                                show:false
                            }
                        }
                    ],
                    series : [
                    {
                        name:'工作时间',
                        type:'line',
                        symbol:'emptyCircle',
                        symbolSize:2,
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    // 区域图，纵向渐变填充
                                    color : (function (){
                                        var zrColor = require('zrender/tool/color');
                                        return zrColor.getLinearGradient(
                                            0, 80, 0, 295,
                                            [[0, 'rgba(15,167,237,0.8)'],[0.8, 'rgba(255,255,255,0.1)']]
                                        )
                                    })()
                                },
                                lineStyle: {
                                    color:'#b5e7fe',
                                    type: 'solid',
                                    width:'1',
                                },
                                nodeStyle :{
                                    borderColor:'#000000'
                                }
                            },
                             emphasis: {
                                color: '#0ea7ed',
                                symbolSize:'2',
                                //borderColor:'#ffffff',
                            }
                        },
                        data:['0', '2', '2',  '1', '3', '6', '5'
                        ]
                    }
                    ]
                };
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            });            