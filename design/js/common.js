/*!
 * WhiteSnow JavaScript Library v0.1
 * @author miniflycn
 */

(function(__host){
	var host = __host;	
	
	/* ID Selector */
	var $ = function(__id){
		return document.getElementById(__id);
	}
	
	/* onReady */
	var isReady=false;
    var readyList= [];
    var timer;
    var ready = function(fn) {
		if (isReady )
			fn.call( document);
		else
			readyList.push( function() { return fn.call(this);});
		return this;
	};
	
	var onDOMReady = function(){
		for(var i=0;i<readyList.length;i++){
			readyList[i].apply(document);
		}
		readyList = null;
    };
    
	var bindReady = function(evt){
		if(isReady) return;
		isReady=true;
		onDOMReady.call(window);
		if(document.removeEventListener){
			document.removeEventListener("DOMContentLoaded", bindReady, false);
		}else if(document.attachEvent){
			document.detachEvent("onreadystatechange", bindReady);
			if(window == window.top){
				clearInterval(timer);
				timer = null;
			}
		}
	};

	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", bindReady, false);
	}else if(document.attachEvent){
		document.attachEvent("onreadystatechange", function(){
			if((/loaded|complete/).test(document.readyState))
				bindReady();
		});
		if(window == window.top){
			timer = setInterval(function(){
				try{
					isReady||document.documentElement.doScroll('left');
				}catch(e){
					return;
				}
					bindReady();
			},5);
		}
	}
	
	/* Ajax */
	
	/* Menu */

	/* ShowBox */
	function ShowBox(__id){
	
	}
	
	/* Mount */
	host.$ = $;
	host.ready = ready;
})(this);






function init(){
	var timeout = -1;
	$("buttons").onmouseover = function(){
		$("buttons").style.left = "740px";
	};
	$("buttons").onmouseout = function(){
		$("buttons").style.left = "800px";
	};
	$("button0").onmouseover = function(){
		$("button0").className = "buttonShow";
	};
	$("button0").onmouseout = function(){
		$("button0").className = "button";
	};
	$("button1").onmouseover = function(){
		$("button1").className = "buttonShow";
	};
	$("button1").onmouseout = function(){
		$("button1").className = "button";
	};
	$("button2").onmouseover = function(){
		$("button2").className = "buttonShow";
	};
	$("button2").onmouseout = function(){
		$("button2").className = "button";
	};
		
	$("test0").onclick = function(){
		$("message").style.visibility = "visible";
	};
}