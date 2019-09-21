 // function add() {
 //     let value = $('.inputtext').val();
 //     let message = $('.message').val('<li>' + value + '</li>');
 //     $('.inputtext').val('');

    // $.ajax({
    //         url: "http://openapi.tuling123.com/openapi/api/v2",//接口地址
    //         type: "post",
    //         dataType: "json",
    //         data: {
    //             key: 'c7cdaf5fad634a34bb326779d9b1553e',//APIKey
    //             info: value//用户文本
    //         }
    //     }
    // );


//     $.ajax({
//         url:"http://openapi.tuling123.com/openapi/api/v2", //要提交的URL路径
//         type:"post", //发送请求的方式“data:“name=”+name, //要发送到服务器的数据
//         dataType:"json", //要指定返回的数据格式
//         success:callBack, //相应成功后执行的代码
//         error:function(){} //请求失败后执行的代码
// });
//     function callBack(data){ //入参表示相应结果
//     };






//     $.ajax({
//         type: 'post',
//         url: "http://openapi.tuling123.com/openapi/api",
//         dataType: 'jsonp',
//         jsonp:"callback",
//         async:true,
//         data:{
//
//         },
//         success: function(ret){
//             console.log(ret)
//         },
//         error:function(data) {
//         },
//     });
//
//
// }











// function add(){
//     let value = $('.inputtext').val();
//     let message = $('.message').val('<li>' + value + '</li>');
//     $('.inputtext').val('');
//     $.ajax({
//         url:"http://openapi.tuling123.com/openapi/api/v2",//接口地址
//         type:"post",
//         dataType:"json",
//         data:{
//             key:'c7cdaf5fad634a34bb326779d9b1553e',//APIKey
//             info:value//用户文本
//         },
//         success:function(data,status){
//             if(data.code == "100000"){//成功
//                 let message = $('.message');
//                 let m = "<li><div><span>我：</span><span>" +value +"</span></div></li>"
//                 let t = "<li><div><span>机器人：</span><span>" + data.value +"</span></div></li>";
//                 message.html('message.html() + m + t');
//                 // var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
//                 // show.scrollTop = show.scrollHeight;
//                 $(".top-wapper").scrollTop(message.scrollHeight);
//             }
//             if(data.code == "200000"){//成功
//                 let message = $('.message');
//                 let m = "<li><div><span>我：</span><span>" + text +"</span></div></li>"
//                 let t = "<li><div><span>机器人：</span><span>" + data.value +"</span></div></li>";
//                 let u = "<li><div><span>机器人：</span><span><a href="+data.url+">" + "为你找到的连接"+"</a></span></div></li>";
//                 message.html('message.html() + m + t + u');
//                 // var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
//                 // show.scrollTop = show.scrollHeight;
//                 $(".top-wapper").scrollTop(message.scrollHeight);
//             }
//             if(data.code == "40001"){//成功
//                 alert("不好意思，输入的apikey有问题，请检查！！");
//             }
//             // if(data.code == "40002" && text != null ){//成功
//             //     alert("不好意思，输入的消息有问题，请检查！！");
//             // }
//             if(data.code == "40004"){//成功
//                 alert("不好意思，当天聊天次数已用完！！");
//             }
//         }
//     });
// }


// $(".inputtext").on("focus",function(){
//     $(".inputtext").prop("value","");
// });
//
// $(function(){
//     $("#text").on("focus",function(){
//         $("#text").keydown(
//             function(){
//                 if(event.keyCode == "13"){
//                     $("#submit").click();
//                 }
//             }
//
//         );
//     });
// });