$(document).ready(function() {
    // SearchBox Animation
   $('#search-query').focus(function() {
       $(this).animate({width: '100%'}, 350);
   }).blur(function() {
       $(this).stop().animate({width: '60%'}, 350);
   });

   // Responsive Category & Location
   ToggleLeftSide();
   $(window).bind('resize', ToggleLeftSide);
   var chart0 = new Morris.Donut({
       element: 'chart0',
       data: [{
           label: "Môn học",
           value: 3
       }, {
           label: "Chuyên ngành",
           value: 12
       }, {
           label: "Lập trình",
           value: 45
       }, {
           label: "Tin học ứng dụng",
           value: 10
       }, {
           label: "Ngoại ngữ",
           value: 1
       }, {
           label: "Sửa máy tính",
           value: 5
       }, {
           label: "Thiết kế",
           value: 24
       }],
       resize: true,
       colors: ['red','green','blue','yellow','purple','brown','gray']
   });

   var chart1 = new Morris.Donut({
       element: 'chart1',
       data: [{
           label: "Môn học",
           value: 3
       }, {
           label: "Chuyên ngành",
           value: 12
       }, {
           label: "Lập trình",
           value: 45
       }, {
           label: "Tin học ứng dụng",
           value: 10
       }, {
           label: "Ngoại ngữ",
           value: 1
       }, {
           label: "Sửa máy tính",
           value: 5
       }, {
           label: "Thiết kế",
           value: 24
       }],
       resize: true,
       colors: ['red','green','blue','yellow','purple','brown','gray']
   });

   var chart2 = new Morris.Donut({
       element: 'chart2',
       data: [{
           label: "Môn học",
           value: 3
       }, {
           label: "Chuyên ngành",
           value: 12
       }, {
           label: "Lập trình",
           value: 45
       }, {
           label: "Tin học ứng dụng",
           value: 10
       }, {
           label: "Ngoại ngữ",
           value: 1
       }, {
           label: "Sửa máy tính",
           value: 5
       }, {
           label: "Thiết kế",
           value: 24
       }],
       resize: true,
       colors: ['red','green','blue','yellow','purple','brown','gray']
   });

   var chart3 = new Morris.Donut({
       element: 'chart3',
       data: [{
           label: "Môn học",
           value: 3
       }, {
           label: "Chuyên ngành",
           value: 12
       }, {
           label: "Lập trình",
           value: 45
       }, {
           label: "Tin học ứng dụng",
           value: 10
       }, {
           label: "Ngoại ngữ",
           value: 1
       }, {
           label: "Sửa máy tính",
           value: 5
       }, {
           label: "Thiết kế",
           value: 24
       }],
       resize: true,
       colors: ['red','green','blue','yellow','purple','brown','gray']
   });
});

function ToggleLeftSide(){
	var deviceWidth = $(window).width()//$('[data-role="page"]').first().width();
    if (deviceWidth <= 991){
    	$(".panel-title").attr("data-toggle","collapse");
    	$("#category").removeClass("in");
    	$("#location-list").removeClass("in");

    }else{
    	$(".panel-title").removeAttr("data-toggle");
        $("#category").css({"height":""});
        $("#location-list").css({"height":""});
    	$("#category").addClass("in");
    	$("#location-list").addClass("in");
    }
}
