window.onload=function(){
   function aaa(){
     var tu=$(".shop-c-a");/*获取类名为tu,定义为tu*/
    var lis=$(".lis");/*获取类名为lis，定义变量为lis，以下一样*/
    var p=$(".shop-center")[0];/*获取类名为parent*/
    var left=$(".center-aa")[0];/*获取类名为left*/
    var right=$(".center-ab")[0];/*获取类名为right*/
    var n=0;
    var next=0;
    var t=setInterval(move,2000);
    var width=parseInt(getStyle(tu[0],"width"));/*通过获取宽度，
    应用parseInt获取整形变量*/
    function move(){/*建立主题运行函数*/
       next=n+1;
       if(next>=tu.length){
        next=0;/*当下一张的数目大于等于这个总图片的长度的时候
        将0赋予它，让他重新运行*/
       }
       for(var i=0;i<tu.length;i++){
        lis[i].style.background="#000";/*当进行一个for循环，让运行的函数
        继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
       }
         lis[next].style.background="red";/*将所需要的点的颜色瞬间改变为
         红色*/
         tu[next].style.left=width+"px";/*将运行的图片向左运用一个图片长度*/
         animate(tu[n],{left:-width},500);
         animate(tu[next],{left:0},500);/*通过animate的动画效果将下一张移动*/
         n=next;
    }
      function move1(){
       next=n-1
          if(next<0){
            next=tu.length-1;
            /*当下一张的数目小于0的时候
        将最大长度-1赋予它，让他重新运行*/
          }
            for(var i=0;i<tu.length;i++){
                lis[i].style.background="#000";
                /*当进行一个for循环，让运行的函数
        继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
            }
               lis[n].style.background="red";
               /*将所需要的点的颜色瞬间改变为
         红色*/
               tu[next].style.left=-width+"px";/*将运行的图片向左运用一个图片负长度*/
               animate(tu[n],{left:width},500);
               animate(tu[next],{left:0},500);
               n=next;
      }   
         p.onmouseover=function(){/*鼠标移入终止函数的运行*/
           clearInterval(t)
         }
        // 划出继续
         p.onmouseout=function(){/*鼠标移出，重新建立函数*/
           t=setInterval(move,1000)
         }
        left.onclick=function(){/*左箭头点击事件*/
            move1();
        }
        right.onclick=function(){/*右箭头点击事件*/
            move();
        } 
        

        for(var i=0;i<lis.length;i++){
                lis[i].index=i;
          lis[i].onclick=function(){/*小点点击事件*/
            for(var i=0;i<tu.length;i++){
                lis[i].style.background="#000";
                /*当进行一个for循环，让运行的函数
          继续运行，不会出现断裂的结果，瞬间将所有的点背景设置为黑色*/
            } 
                lis[this.index].style.background="red"
                /*将所需要的点的颜色瞬间改变为
           红色*/
              if(this.index<n){               
                  tu[this.index].style.left=width+"px";
                  animate(tu[n],{left:-width},500);
                  animate(tu[this.index],{left:0},500)
                  n=this.index;
              }else if(this.index>n){
                  tu[this.index].style.left=-width+"px";
                  animate(tu[n],{left:width},500);
                  animate(tu[this.index],{left:0},500)
                  n=this.index;
              } 
          }
        }
   }
   aaa();

  function getHi(){
              var one=$("#head-a");/*获取类名为one的
              */
              var two=$(".denglu")[0];/*获取子元素的长度*/
              one.onmouseover=function(){
                  animate(two,{height:124},800);/*创建元素的鼠标移入时间*/
              }
              one.onmouseout=function(){
                  animate(two,{height:0},800);
              }/*创建鼠标移出的时间*/
          }
          getHi();


     function getHidden(a){
              var one=$(".QE-b")[a];/*获取类名为one的
              */
              var two=$(".dl")[a];/*获取子元素的长度*/

              one.onmouseover=function(){
                  animate(two,{height:40},800);
                  two.style.border="1px solid #ccc"
                  /*创建元素的鼠标移入时间*/
              }
              one.onmouseout=function(){
                  animate(two,{height:0},800);
                  two.style.border=0;
              }/*创建鼠标移出的时间*/
          }
          var one=$(".QE-b");
          for(var i=0;i<one.length;i++){
            getHidden(i);/*通过循环调用函数*/
   
          }  

    function getH(){
              var one=$("#left-a");/*获取类名为one的
              */
              var two=$(".erwei")[0];/*获取子元素的长度*/
              one.onmouseover=function(){
                  animate(two,{height:140},800);/*创建元素的鼠标移入时间*/
              }
              one.onmouseout=function(){
                  animate(two,{height:0},800);
              }/*创建鼠标移出的时间*/
          }
          getH();
  function aab(){
    var box=$(".float")[0];
    var win=$(".float-u")[0];
    var imgs=$(".fff");
    var left=$(".di-left")[0];
    var right=$(".di-right")[0];
    var wu=$("#float-c");
    var width=imgs.offsetWidth;
    var flag=true;
    var t=setInterval(move,2000);
      function move(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win);
          win.appendChild(lif);     
            win.style.left=width-11+"px"; 
          animate(win,{left:11},500,function(){         
                       flag=true;
          })                                       
        }
        function movez(){
          if(!flag){
                return;
          }
          flag=false;
          var lif=getFirst(win); 
          var lil=getLast(win);  
          insertBefore(lil,lif); 
          win.style.left=-width+11+"px";
          animate(win,{left:11},500,function(){
            flag=true;
          });  
                                     
            }  
       addEvent(box,"mouseover",function(){
            clearInterval(t);
       }) 
       addEvent(box,"mouseout",function(){
            t=setInterval(move,1000);
       }) 
       addEvent(left,"click",move);
       addEvent(right,"click",movez);

  }
  aab();
    
}

  