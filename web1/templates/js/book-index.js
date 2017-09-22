// JavaScript Document

window.onload=function(){

	/*这是登录遮罩层的代码*/

		$("#login").click(function(){			
			$("#mask").removeClass();
			$("#mask").addClass("mask");
		});

		$("#deng-close").click(function(){			
			$("#mask").removeClass();
			$("#mask").addClass("hide");
		});

	/*这是图片轮播的代码*/

		var list=document.getElementById('list');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
		var buts=document.getElementById('but').getElementsByTagName('span');
		var con=document.getElementById('container');
		var index=1;
		var timer;

		function ani(dis){
             var speed=dis/10;
             var n=0;
              if(list.offsetLeft==-3000)
			{
				list.style.left=0+'px';
			}
             if(list.offsetLeft==0&&dis>0)
			{
				list.style.left=-2400+'px';
				return;
			}
			var go=function(){
				if(n==10){
					return;
				}
              list.style.left=list.offsetLeft+speed+'px';
               n++;
              setTimeout(go,30);
			}
			go();
			
		}

		function biao(){
            for(var i=0;i<buts.length;i++)
            {
            	buts[i].className='';
            }
            buts[index-1].className='on';
		}

        function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, 2000);
            }
            function stop() {
                clearTimeout(timer);
            }

		next.onclick=function(){
			index++;
			if(index>5){index=1;}
			biao();
			ani(-600)
			
			
			
		}

		prev.onclick=function(){
			index--;
			if(index==0){index=5;}
			biao();
			ani(600);
			
			
		}

		for(var j=0;j<buts.length;j++)
		{
             buts[j].onclick=function(){
             	var in1=parseInt(this.getAttribute('index'))
             	var index1=index;
             	index=in1;
             	biao();
                  ani((index1-in1)*600);
             	
             }
		}
       con.onmouseover=stop;
       con.onmouseout = play;
       play();

       /*图片轮播代码结束*/
       
       /*这是左边栏弹出的代码*/
        var left_lis=document.getElementById("left-list").getElementsByTagName("li");
		var left_divs=document.getElementById("left-content").children;
		
			for(var n=0;n<left_lis.length;n++)
			{
				left_lis[n].onmouseover=function(){
					var that=this;
					for(var m=0;m<left_divs.length;m++)
					{
						left_divs[m].className='';
					}
					var index=parseInt(that.id);
					left_divs[index-1].className='show';
					
				}

				left_divs[n].onmouseleave=function(){
					var that=this;
					for(var m=0;m<left_divs.length;m++)
					{
						left_divs[m].className='';
					}
					
					
				}
				
			}
				

			
		
       
	}
	

