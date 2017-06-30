$(function(){
	$.ajax({
		type: "GET",
        url: '/str/nav.html',
    }).done(function(data){
        console.log('menu loaded')
        nav = data;
        $('header.sticky').html(nav)
	})
	var img = '/img/tool.svg';
	var tools ={
	    a1:{
	        "link": "https://cse.google.com.tw/cse/",
	        "title": "CSE 站內搜尋",
	        "preface": "google 提供的站內搜尋"
	    },
	    a2:{
	        "link": "https://cse.google.com.tw/cse/",
	        "title": "CSE 站內搜尋",
	        "preface": "google 提供r的站內搜尋"
	    }
	}
	var htools ='';
	var str ='';
	for(var i=Object.keys(tools).length;i>=1;i--){
		str = '<div class="col-xs-12 col-sm-6 col-md-3"><a class="thumbnail" href="'+tools[Object.keys(tools)[i - 1]].link+'" title="'+tools[Object.keys(tools)[i - 1]].title+'"><img src="'+img+'" alt="*"><h2 class="main-color">'+tools[Object.keys(tools)[i - 1]].title+'</h2><p class="text-left">'+tools[Object.keys(tools)[i - 1]].preface+'</p></div>';
		htools += str;
	}
	$('#tool-data').html(htools);
})