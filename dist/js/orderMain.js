console.log("加载完成");

require.config({
    paths:{
        "jquery" : "jquery-1.11.3",
        "jquery-cookie" : "jquery.cookie",
        "index" : "index",
        "login" : "login",
        "register" : "register",
        "drag" : "drag",
        "product" : "product",
        "order" : "order"
    },

    shim:{
        'jquery-cookie' : ["jquery"]
    }
})

require(["index", "login", "register", "order"], function(index, login, register, order){
    index.index();
    login.login();
    order.order()
})