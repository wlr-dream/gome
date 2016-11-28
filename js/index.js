$(document).ready(function(){
   /*顶部导航1*/
   $("#hui").mouseover(function(){
        $(".public1").eq(0).css("display","block");
        $("#hui").css("background","#fff");
        $(".guomei").eq(0).css("color","#C00")
       })  
$("#hui").mouseout(function(){
	$(".public1").eq(0).css("display","none");
    $("#hui").css("background","#f8f8f8");
    $(".guomei").eq(0).css("color","#888");
})


var aw=$(".use1 li").width();
var flag1=true;
$(".use1 ul").css("width",aw*$(".use1 li").length);
$(".user").click(function(){
  if (flag1) {
    mover();
    flag1=false;
  }
})
$(".usel").click(function(){
  if (flag1) {
    movez();
    flag1=false;
  };
})
function mover(){
  $(".use1 ul").animate({left:-aw*3},function(){
    var first=$(".use1 ul li:first-child");
    $(".use1 ul").append(first).css("left",0);
    flag1=true;
  })
}
function movez(){
  var first=$(".use1 ul li:first-child");
  var last=$(".use1 ul li:last-child");
  first.insertBefore(last);
  $(".use1 ul").css("left",-aw*3).animate({left:0},function(){
    flag1=true;
  })
}
/*顶部导航2*/
$(".mygome").mouseover(function(){
        $(".public2").eq(0).css("display","block");
        $(".mygome").eq(0).css("background","#fff");
        $(".guomei1").eq(0).css("color","#C00");
       })  
$(".mygome").mouseout(function(){
	$(".public2").eq(0).css("display","none");
    $(".mygome").eq(0).css("background","#f8f8f8");
    $(".guomei1").eq(0).css("color","#888");

})
/*顶部导航3*/
$("#service").mouseover(function(){
        $(".public3").eq(0).css("display","block");
        $("#service").css("background","#fff");
        $(".guomei2").eq(0).css("color","#C00");
       })  
$("#service").mouseout(function(){
	$(".public3").eq(0).css("display","none");
    $("#service").css("background","#f8f8f8");
    $(".guomei2").eq(0).css("color","#888");

})
/*顶部导航4*/
$("#map").mouseover(function(){
        $(".public4").eq(0).css("display","block");
        $("#map").css("background","#fff");
        $(".guomei3").eq(0).css("color","#C00");
       })  
$("#map").mouseout(function(){
	$(".public4").eq(0).css("display","none");
    $("#map").css("background","#f8f8f8");
    $(".guomei3").eq(0).css("color","#888");

})
/*顶部导航5*/
$("#phone").mouseover(function(){
        $(".public5").eq(0).css("display","block");
        $("#phone").css("background","#fff");
        $(".guomei4").eq(0).css("color","#C00");
       })  
$("#phone").mouseout(function(){
	$(".public5").eq(0).css("display","none");
    $("#phone").css("background","#f8f8f8");
    $(".guomei4").eq(0).css("color","#888");

})
/*logo图关闭*/
$(".chahao i").click(function(){
  $("#logo").css("display","none");
})
/*购物车*/
$(".carbox").hover(function(){
	$(".hid").show();
},function(){
	$(".hid").hide();
})
/*全部分类*/
  $(".first").hover(function  () {
      $(this).children(".hiddenbox").css("display","block"); 
    },function  () {
      $(this).children(".hiddenbox").css("display","none");    
    })
/*快讯上面小轮播*/
 var flag=true;
 var tops=$(".main1 li").height();
 var top1=setInterval(up,2000);
 $(".main1 ul").css("height",tops*$(".main1 li").length);
 $(".main-right").hover(function(){
 	clearInterval(top1)
 },function(){
 	top1=setInterval(up,2000)
 })
 function up(){
 	$(".main1 ul").animate({top:-tops},function(){
 		$(".main1 ul").append($(".main1 ul li:first-child")).css("top",0);

 		flag=true;
 	})
 }
 function down(){
 	$(".main1 ul li:last-child").insertBefore(".main1 ul li:first-child");
 	$(".main1 ul").css("top",-tops).animate({top:0},function(){flag=true});
 }
 $(".up").click(function(){
 	if (flag) {
 		down();
 		flag=false;
 	};
 })
 $(".down").click(function(){
 	if (flag) {
 		up();
 		flag=false;
 	};
 })

/*猜你喜欢*/
$(".change-btn").click(function(){
	shift();
})
var nrn=0;
function shift(){
	nrn++;
	if (nrn==$(".guess-main ul").length) {
		nrn=0
	};
	$(".guess-main ul").hide().eq(nrn).show();
}

 /*楼层轮播图*/
  $(".lunbo-box").each(function(index){
    lunbo($(".lunbo-box:eq("+index+")"),$(".lun:eq("+index+") li"))
  })
   $(".lunbo-box1").each(function(index){
    lunbo($(".lunbo-box1:eq("+index+")"),$(".lun1:eq("+index+") li"))
  })
function lunbo(a,b){
  var box=a;
  var yuanxing=$(".xfk",a);
  var imgs=b;
  var zuoniu=$(".press",a);
  var youniu=$(".after",a);
   yuanxing.eq(0).addClass("hot");
   var now=0;
   var t=setInterval(move,2000);
  box.on("mouseover",function(){
    clearInterval(t);
   zuoniu.show();
   youniu.show();
   })
   box.on("mouseout",function(){
    t=setInterval(move,2000)
   zuoniu.hide();
   youniu.hide();
   })
 youniu.on("click",function(){
      move();
  })
 zuoniu.on("click",function(){
    move1();
  })
 yuanxing.each(function(index){
   yuanxing.eq(index).mouseover(function(){
  imgs.fadeOut().eq(index).fadeIn();
  yuanxing.removeClass("hot").eq(index).addClass("hot");
  now=index;
   })
 })
function move(){
  now++;
  if(now==imgs.size()){
    now=0;
  }
  imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")

}
 function move1(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    imgs.fadeOut().eq(now).fadeIn();
  yuanxing.removeClass("hot").eq(now).addClass("hot")
  } 
}
/*楼层选项卡*/
  $(".floor").each(function(index){
  $(".floor:eq("+index+") .table1:eq("+0+")").addClass("table2");
  $(".floor:eq("+index+") .content:eq("+0+")").css("z-index",10);
  $(".floor:eq("+index+") .table1").each(function(index1){
     $(".floor:eq("+index+") .dapaizi:eq("+index1+")").mouseover(function(){
     $(".floor:eq("+index+") .content").hide();
     $(".floor:eq("+index+") .content:eq("+index1+")").show();
     $(".floor:eq("+index+") .table1").removeClass("table2");
     $(".floor:eq("+index+") .table1:eq("+index1+")").addClass("table2");   
    })
   })
})
/*banner轮播图*/
   var bnow=0;
   var bnext=0;
   var bflag=true;
   var banner=$(".banner")
   var btnone=$(".btnone")
   var b=$("b",banner)
   var i=$("i",banner)
   var span=$("span",banner)
   var imgs=$("a",banner)
   var bt;
   var bw=$("a",$(".main1")).width()
   var bannerl=$(".leftzz")
   var bannerr=$(".rightyy")
   i.eq(0).css({height:5,background:"#e3101e"})
    btnone.eq(0).css("display","block")
    span.eq(0).css("display","none")
   imgs.css({"zIndex":0,"opacity":0})
   imgs.eq(0).css({"zIndex":1,"opacity":1})
   function bmove(){
    bnext=bnow+1;
    if(bnext==imgs.length){
      bnext=0;
    }
    imgs.eq(bnext).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   function bmovey(){
   
    bnext=bnow+1;
    if(bnext>=imgs.length){
      bnext=0;
    }
    imgs.css({"zIndex":2,"opacity":0})
    if(bnow%2!=0){
    imgs.eq(bnext).css({"zIndex":4}).end().eq(bnow).animate({"opacity":0.5},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext;
    }
    else{
      imgs.eq(bnext-1).css("opacity",1)
      bnow=bnext;
    }
   
   }
    function bmovez(){
    bnext=bnow-1;
    if(bnext<0){
      bnext=imgs.length-1;
    }
    imgs.eq(bnext).css({"zIndex":2,"opacity":1}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   bannerr.click(function(){
      if(bflag){bmove()}
      bflag=false;
   })
    bannerl.click(function(){
      if(bflag){bmovez()}
      bflag=false;
   })
    bth=setInterval(bmovey,2000)
   banner.hover(function(){clearInterval(bth);
   },function(){bth=setInterval(bmovey,2000)
   })
   b.mouseover(function(){
    
      i.css({height:3,background:"#fff"})
      btnone.css("display","none")
      span.css("display","block")
      var index=b.index($(this))
      i.eq(index).css({height:5,background:"#e3101e"})
      var index1=Math.floor((index)/2)
      btnone.eq(index1).css("display","block")
      span.eq(index1).css("display","none")
      imgs.eq(index).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
      end().eq(index).animate({"opacity":1},function(){bflag=true});
      bnow=index;
   
   })
/*晒单*/
$(".mcp ul").eq(0).css("display","block");
var nn=0;
$(".huan").click(function(){
  nn++;
  if (nn==$(".mcp ul").length) {
    nn=0;
  }
  $(".mcp ul").css("display","none").eq(nn).css("display","block");
})

/*左导航*/
var nows;
window.onscroll=function(){
 var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if(top>=$(".tem").eq(0).offset().top-200){
      $(".cbdh").css("display","block");
    }
    if(top<=$(".tem").eq(0).offset().top-200||top>=$(".tem").eq($(".tem").length-1).offset().top+300){
      $(".cbdh").css("display","none");
    }
    for (var j = 0; j < $(".tem").length; j++) {
      if (obj.scrollTop>=$(".tem").eq(j).offset().top-200) {
        for (var i = 0; i < $(".tem").length; i++) {
          $(".cb-nav .cbs").eq(i).css("color","#5e5e5e").children(".xsj").eq(0).css("display","none");
        };
        $(".cb-nav .cbs").eq(j).css("color","red").children(".xsj").eq(0).css("display","block");
        nows=j;
      };
    };
  }
    $(".cb-nav .cbs").click(function(){
        $(document.documentElement).animate({scrollTop:$(".tem").eq($(this).index()).offset().top});
        $(document.body).animate({scrollTop:$(".tem").eq($(this).index()).offset().top}); 
        nows=$(this).index();     
  })
   $(".cbs").hover(function(){  
      $(this).css("color","red");  
   },function(){
    if ($(this).index()!=nows) {
      $(this).css("color","#5e5e5e");
    };
   })
   $(".lctop").click(function(){
      $(document.documentElement).animate({scrollTop:0});
        $(document.body).animate({scrollTop:0});
   })
   $(".lcbottom").click(function(){
      $(document.documentElement).animate({scrollTop:$(".footer").offset().top});
        $(document.body).animate({scrollTop:$(".footer").offset().top});
   })
//右导航
$(".app").mouseover(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":-140});
  $(".app b").css("background-position","-40px -464px");
})
$("body").click(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
})
function hover(a,b,c){
  a.hover(function(){
  b.stop(true);
  b.delay(200).animate({"left":-82});
  c.css("background-position","-40px -464px");
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
},function(){
   b.stop(true);
   b.delay(200).animate({"left":82});
   c.css("background-position","-47px -464px");
})
}
hover($(".servy"),$(".servy .transform"), $(".servy b"));
hover($(".service"),$(".service .transform"), $(".service b"));
hover($(".go-back"),$(".go-back .transform"), $(".go-back b"));

 jQuery.backTop($(".go-back"),300);  


//懒加载
  // $("img.lazy").lazyload({
  //   threshold:200,
  //    effect:"fadeIn"
  // })


})