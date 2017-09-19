$(function(){

	$.get("http://localhost:8080/liangXian/php/index.php",{data:"header"},function(res,status,defer){
		$("#header").html(res);
		
		$(".top_wrapper_l a").mouseover(function(){
			$(this).css({
				color:"#000"
			})		
		})
		$(".top_wrapper_l a").mouseout(function(){
			$(this).css({
				color:""
			})
		})
		
		$(".header_nav_l").children("li").hover(function(){
			$(this).css({
				background:"yellow"
			})
			$(this).children("a").css({
				borderRight:"none",
				color:"#000",
				width:"104px"
				
			})
		},function(){
			$(this).css({
				background:""
			})
			$(this).children("a").css({
				borderRight:"",
				color:"",
				width:""
				
			})

		});
		$(".nav_list").children("li").hover(function(){
			$(this).css({
				background:"#f4f9ec",
				borderRight:"none"
			})
			$(this).children("div").show();
			
		},function(){
			$(this).css({
				background:"",
				borderRight:""
			})
			$(this).children("div").hide();
			
		});
		$(".nav_list").children("li").children("div").children("div").children("a").hover(function(){
			$(this).css({
				color:"#469c2e"
			})
		},function(){
			$(this).css({
				color:""
			})
		});
		$(document).scroll(function(){
			if($(this).scrollTop()>200){
				$(".header_nav").css({
					position:"relative",
					left:0,
					top:$(this).scrollTop()-200
				})
				$(".nav_list").hide()
				$(".nav_left").hover(function(){
					$(".nav_list").show()
				},function(){
					$(".nav_list").hide()
				});
			}else{
				$(".nav_list").show()
			}
		})
		
		
	},"html");
	$.get("http://localhost:8080/liangXian/php/index.php",{data:"footer"},function(res,status,defer){
		//console.log(1)
		$("#footer").html(res);
		$(".footer_l ul").children("li").hover(function(){
			$(this).css({
				background:"yellow"
			})
			$(this).children("a").css({
				color:"#000"
			})
		},function(){
			$(this).css({
				background:""
			})
			$(this).children("a").css({
				color:""
			})
		});
		
	})
	
	
	
})
