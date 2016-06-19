/**
 * 命名空间
 * 只要加入了CocosTvFrame就可以在自己的代码中使用st命名空间，当然你也可以定义自己的命名空间
 */

var NameSpace = NameSpace || {};

NameSpace.register = function(path){     
    var arr = path.split(".");     
    var ns = "";     
    for(var i=0;i<arr.length;i++){     
        if(i>0) ns += ".";     
        ns += arr[i];     
        eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = new Object();");     
    }     
}     

NameSpace.register("st.Scene");
NameSpace.register("st.View");
NameSpace.register("st.Widget");
NameSpace.register("st.Model");


// var st = st || {};
// st.CocosTvFrame = st.CocosTvFrame || {};
// st.Scene = st.Scene || {};
// st.View = st.View || {};
// st.Widget = st.Widget || {};
// st.Model = st.Model || {};