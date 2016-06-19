function getClass(classname,obj){/*封装函数，传入两个参数 一个类名，一个输出*/
    var obj=obj||document;/*对obj进行定义，并实现开关思想 如果没有传入obj则为document*/
    if(obj.getElementsByClassName){/*如果获取为真 */
    	return obj.getElementsByClassName(classname)/*返回类名*/
    }else{                       /*如果为假*/
        var arr=[];
        var alls=document.getElementsByTagName('*')/*提取所有的标签名*/
    	for(var i=0;i<alls.length;i++){
             if(checkclass(alls[i].className,classname)){/*如果传入的值与*相同，则将传其保存下来*/
                  arr.push(alls[i]);/*用来保存比较之后相同的类*/
             }
    	}
        return arr;/*最后返回arr*/
    }
}

function checkclass(s,e){/*定义函数两个参数用来检测同名的类*/
	var brr=s.split(" ");/*用空格将分割的数组分开*/
	for(var i=0;i<brr.length;i++){
		if(brr[i]==e){           /* 对传入的值进行比较，如果有相同的就返回zhen*/
			return true;
		}
	}
   return false;
} 
// window.onload=function(){
// 	console.log(getClass("one")[0]);
// } 


    function getInner(obj,value){/*定义一个函数用来改变内部的值或者
        获取类名属性*/
    if(obj.textContent){/*如果输出的浏览器有textContent
        ,则输出类名，如果传值，则改变内容*/
       if(value==undefined){/*如果输入的value
        =undefined,则只获取，不传值*/
          return obj.textContent;/*返回类名*/
       }else{
        obj.textContent=value;/*否则传值*/
       }
    }else{
        if(value==undefined){/*如果在没有textcontent
            的浏览器中使用innerText 和上面一样的方法*/
          return obj.innerText;
       }else{
        alert(obj.innerText=value);
       }

     }
}
function getStyle(obj,style){/*封装一个函数，用来获取某个对象的属性值*/
  if(obj.currentStyle){/*如果在拥有currentStyle中，则直接输出*/
    return obj.currentStyle[style];
  }else{/*如果在没有currentStyle中，则调用computedStyle*/
    return getComputedStyle(obj,null)[style];
  }
}
//获取类名  id  标签名
function $(search,obj){/*封装一个函数，用来直接调用id 类名 标签*/
  var obj=obj||document;
  if(typeof(search)=="string"){
      /*
    定义一个对象，让你实现开关思想，存在默认值*/
    if(search.charAt(0)=="#"){/*通过首字母来确认他属于什么，然后
      通过charAt来截取首字母用来与传入的值相比，来确定其类【如果是“#”
      则为id】*/
      return document.getElementById(search.substr(1));
    }else if(search.charAt(0)=="."){/*如果是“.” 则为类*/
      return getClass(search.substr(1),obj);
    }else{/*剩余则为便签*//*缺少正则的用法补充*/
      return obj.getElementsByTagName(search);
    }
  }else if(typeof(search)=="function"){
    window.onload=function(){
      search();
    }
  }
  
}
//获取元素节点
//获取子节点
//获取元素节点和文本节点
//type"a"只要元素节点， b 要元素节点和文字节点
//正则替代all[i].nodeValue.replace(/^\s*|\s*$/g,"");
function getChilds(obj,type){
     var type=type||"a";/*输入的默认值为a，然后如果输入b
     则运行另一个函数*/
     var alls=obj.childNodes;/*获取所有的孩子节点*/
     var arr=[];/*定义一个空数组，用来将判断出来的节点进行保存*/
     for(var i=0;i<alls.length;i++){/*进行for循环用来查找所需要的节点*/
      if(type=="a"){/*如果输入a,则进行a中的函数*/
        if(alls[i].nodeType==1){/*如果孩子节点中是元素节点，*/
          arr.push(alls[i]);/*我们将所需要的孩子节点保存*/
        }
      }else if(type=="b"){/*如果输入b,则进行b中的函数*/
        if(alls[i].nodeType==1||(alls[i].nodeType==3&&alls[i].nodeValue.replace(/^\s*|\s*$/g,""))){
         /*如果孩子节点中为元素节点，并且为文本节点，需要正则判断，代替空格*/
          arr.push(alls[i]);
        }
      }
     }
     return arr;
}
function getFirst(obj){
  return getChilds(obj)[0];
}


function getLast(obj){
  var nub=getChilds(obj);
  return getChilds(obj)[getChilds(obj).length-1];
}

/*寻找当前孩子的下一个兄弟*/
// 获取下一个元素节点
// 遇到文字节点或注释节点跳过
function getNext(obj,type){
   var next=obj.nextSibling;/*定义变量获取下一个节点*/
   var type=type||"a";/*通过开关思想控制他走什么函数，
   当不传值的时候默认走a路线*/
  if(next.nodeType==null){/*如果next的节点值为null，则返回null*/
    return false;
  }
    if(type=="a"){
      while(next.nodeType==3||next.nodeType==8){/*如果next的类型为三或者为8
       的时候将next的下一个节点给他本身 */
      next=next.nextSibling;
        if(next.nodeType==null){/*如果next的类型为null,则返回false*/
          return false;
        }
      }
  }else if(type=="b"){/*如果传入的值是b，则走这里面的函数*/
      while((next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
       /*将传入的对象，进行审查，并将对象中的空格处理掉*/
        next=next.nextSibling;
          if(next.nodeType==null){/*如果next的类型是nnull则 返回false*/
            return false;
          }
      }
  }
  
  return next
}

// window.onload=function(){
//    var yi=$(".yi")[0]
//    console.log(getNext(yi))
//  }






// 获取上一个元素节点
// 遇到文字节点或注释节点跳过
function getPrevious(obj){
  var previous=obj.previousSibling/*获取对象中的上一个对象*/
  if(previous.nodeType==null){/*如果*/
        return false
  }
  while(previous.nodeType==3||previous.nodeType==8){
    previous=previous.previousSibling
    if(previous.nodeType==null){
      return false
    }
  }
  return previous
}
//insertBefore 插入在某一对象之前
function insertBefore(obj,before){
     var parent=before.parentNode;
     parent.insertBefore(obj,before)
}
//应用insertAfter插入某一对象之后
function insertAfter(obj,after){
     var next=getNext(after,"b");/*获取下一个*/
      var parent=after.parentNode;/*定义parent,判断属性*/
     if(next){
      insertBefore(obj,next)/*调用inserbefore,进行判断*/
     }else{
       parent.appendChild(obj);/*通过父类，插入父类之后*/
     }
}
/*事件添加*/
function addEvent(obj,events,value){
  if(obj.addEventListener){
    return obj.addEventListener(events,value,false)
  }else{
    return obj.attachEvent("on"+events,value)
  }
}
/*事件删除*/
function removeEvent(obj,events,value){
  if(obj.removeEventListener){
    return obj.removeEventListener(events,value,false)
  }else{
    return obj.detachchEvent("on"+events,value);
  }
}
/*鼠标滚轮事件*//*preventDefault()*/
function mouseWheel(obj,funUp,funDown){
   if(obj.attachEvent){
    obj.attachEvent("onmosewheel",scroll);/*判断浏览器的兼容性函数调用*/
   }else if(obj.addEventListener){/*现代浏览器的功能属性*/
    obj.addEventListener("DOMMouseScroll",scroll,false);
    obj.addEventListener("mousewheel",scroll,false)
   }
   function scroll(e){
        var ev=e||window.event;/*判断浏览器存储的鼠标数据的兼容性*/
        var d=ev.wheelDelta||ev.detal;/*判断鼠标的读取的滚动*/
        if(obj.attachEvent){
          ev.returnValue=false;
        }else{
          ev.preventDefault();/*解除浏览器的默认动作*/
        }
        if(d==-120||d==3){/*滚轮下滚*/
          if(funDown){
            funDown();
          }
        }else if(d==120||d==-3){/*滚轮上滚*/
          if(funUp){
            funUp();
          }
        }
   }
}