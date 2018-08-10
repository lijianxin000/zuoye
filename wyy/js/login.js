
 var login=(function () {
	 
    var loginUser=document.getElementsByClassName('loginUser')[0],
         toLogin=document.getElementById('toLogin'),
		 wahover=document.getElementsByClassName('wahover')[0],
		 win=document.documentElement||document.body,
		 wbigul=document.getElementsByClassName('wbigul')[0],
		 left=document.getElementsByClassName('wLeft')[0],
		 right=document.getElementsByClassName('wRight')[0],
		 wBigbox=document.getElementsByClassName('wBigbox')[0],
	     wbtns=document.getElementsByClassName('wbigul')[0],
		 wlis=wbtns.getElementsByTagName('li'),
		 wsmallul=document.getElementsByClassName('wsmallul')[0],
		 wsmalllis=wsmallul.getElementsByTagName('li'),
		 wsmall=document.getElementsByClassName('wmall'),
		 w1=document.getElementsByClassName('w1')[0],
		 w2=document.getElementsByClassName('w2')[0],
		 wBigtal=document.getElementsByClassName('wBigtal')[0],
		 wBigtallis=wBigtal.getElementsByTagName('li'),
		 wBigbox=document.getElementsByClassName('wBigbox')[0],
		 wbigLeft=wBigbox.getElementsByClassName('wbigLeft')[0],
		 wmoney=document.getElementsByClassName('wmoney')[0],
		 wmall1 =document.getElementsByClassName('wmall1')[0],
		 wmall2 =document.getElementsByClassName('wmall2')[0],
		 wsroll1=document.getElementsByClassName('wsroll1')[0],
		 wsroll2=document.getElementsByClassName('wsroll2')[0],
 		 wBigboxdiv=[];
		 wBigboxdiv[0]=wbigLeft;
		 wBigboxdiv[1]=wBigbox.getElementsByClassName('wbigRight')[0],
		 wplaycolse=document.getElementsByClassName('wplaycolse')[0],
		 wPostlayer=document.getElementsByClassName('wPostlayer')[0],
		 wbtn=document.getElementsByClassName('wbtn')[0];

	
		
     function onLogin() {
         
		 
     }
     //开始
     function init() {
		wapleyOpen();
		wapleyhide();
		
		wsamallzfTal(wBigtallis,wBigboxdiv,'on');//大选项卡
        wTopImg();
		 wBtns();
		 wsamallTal();
		 wsamallzfTal(wsmalllis,wsmall,'onaction');//点击li选择支付方式
		 wsboxmse(wmall1);
		 wsboxmse(wmall2);
	 }

	 function wapleyOpen(){
		wbtn.onclick=function(){
			wPostlayer.style.display='block';
		}
	 }

	//关闭弹层
	 function wapleyhide(){
        wplaycolse.onclick=function(){
			wPostlayer.style.display='none';
		}
	 }
	
    //手机滑到头像显示登录，开通弹层
	 function wTopImg(){
		wahover.onmouseenter=function(){
			wahover.style.width=400+'px';
			wahover.style.height=340+'px';
			
			toLogin.style.display='block';
 
		  }
		 wahover.onmouseleave=function(){
			 wahover.style.width=40+'px';
			 wahover.style.height=40+'px';
			 var timer=setTimeout(function(){
				 toLogin.style.display='none';
 
			 },500)
		  
		  }	 
	 }

	 //左右按钮
	 function wBtns(){
		

			 right.onclick=function(){
				 wbigul.style.left='-100px';
				 right.style.display='none';
				 left.style.display='block';
				 wbigLeft.className='wbigLeft';
			 }
			 left.onclick=function(){
				wbigul.style.left='0';
				 right.style.display='block';
				 left.style.display='none';
				 wbigLeft.className='wbigLeft wshaow';
			 }

	 }

	 //点击li选择月项
	 function wsamallTal(){
	   
	
			for(var i=0; i<wlis.length;i++){
                var cur=wlis[i];
				cur.index=i;
				
				wsmalllis[2].style.display='none';
				wsmalllis[3].style.display='none';
				w1.style.display='block';
				w2.style.display='block';
				wlis[1].classList.add('action');
				wsmalllis[0].classList.add('onaction');
				wsmall[0].style.display='block';
				//wmall1.style.display='block';
				wsroll1.style.display='block';
				wsroll2.style.display='block';
				cur.onclick=function(){
				
					 var index=this.index;
					 wsroll1.style.display='none';
					 wsroll2.style.display='none';
				
					 for( var y=0;y<wlis.length;y++){
					 
						wlis[y].classList.remove('action');
						wbigul.style.left='-100px';
						right.style.display='none';
						left.style.display='block';
						wbigLeft.className='wbigLeft';
					 }
					 for( var y=0;y<wsmalllis.length;y++){//wx,qq,qqb,sj li
				
						wsmalllis[y].classList.remove('onaction');
						wsmall[y].style.display='none';
					}
					 wsmalllis[0].classList.add('onaction');
					 wsmall[0].style.display='block';
				    if(index===0){
						wlis[0].classList.remove('action');
					}
					if(index===1){
					//第2个li显示wx，qq,txt
					wlis[1].classList.add('action');
					wsmalllis[2].style.display='none';
					wsmalllis[3].style.display='none';
					w1.style.display='block';
					w2.style.display='block';
					wsroll1.style.display='block';
					 wsroll2.style.display='block';
					
					 wsboxmse(wmall1);
					 wsboxmse(wmall2);

					}else if(index===2){
					 //第3个li显示wx，qq,qqb-20,sj
					wlis[2].classList.add('action');
					wsmalllis[2].style.display='block';
					wsmalllis[3].style.display='block';
					w1.style.display='none';
					w2.style.display='none';
					wmoney.innerHTML='20';
					wsroll1.style.display='none';
					wsroll2.style.display='none';
					wNosboxmse(wmall1);
					wNosboxmse(wmall2);
                  
					}else if(index===3){
					//第3个li显示wx，qq,qqb-58
					wlis[3].classList.add('action');
					wsmalllis[2].style.display='block';
					wsmalllis[3].style.display='none';
					w1.style.display='none';
					w2.style.display='none';
					wmoney.innerHTML='58';
					wsroll1.style.display='none';
					wsroll2.style.display='none';
					wNosboxmse(wmall1);
					wNosboxmse(wmall2);
                 
					}else if(index===4){
					//第4个li显示wx，qq,qqb-198
					wlis[4].classList.add('action');
					wsmalllis[2].style.display='block';
					wsmalllis[3].style.display='none';
					w1.style.display='none';
					w2.style.display='none';
					wmoney.innerHTML='128';
					wsroll1.style.display='none';
					wsroll2.style.display='none';
					wNosboxmse(wmall1);
					wNosboxmse(wmall2);
					}
	

				}

			}

		
	 }
	 
	 //选项卡
	 function wsamallzfTal(curEle,div,classname,callback){
		wmall1.style.top='0';
		wmall2.style.top='0';
		 for(var i=0;i<curEle.length;i++){
			var cur=curEle[i];
			
			cur.index=i;

			cur.onclick=function(){

				for( var y=0;y<curEle.length;y++){//wx,qq,qqb,sj li
				
					curEle[y].classList.remove(classname);
					div[y].style.display='none';
				}
				

				this.classList.add(classname);
				div[this.index].style.display='block';
				typeof callback==='function'?callback():null;
			}
		 }
	 }
	 
	 //滚动条
	 function wsboxmse(cur){
		
		cur.onmouseenter=function(){
             this.onmousewheel=function(e){

				 var t=parseFloat(getComputedStyle(cur)['top']);
				 if(e.wheelDelta>0){
					t-=10;
					 if(t<=-40){
                       t=-40;
					 }
				 }else{
					t+=10;
					if(t>=30){
                    t=30;
					}
				 }
				
				 cur.style.top=t+'px';
			 }
		}
	

	 }

	 //停止滚动条，top为-10px
	 function wNosboxmse(cur){
			cur.onmousewheel=null;
			cur.onmouseenter=null;
		
	 }

     return{
         init:init
     }
 })();
 

 login.init();