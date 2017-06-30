$(function(){
	$.ajax({
		type: "GET",
        url: '/exp/str/nav.html',
    }).done(function(data){
        console.log('menu loaded')
        nav = data;
        $('header.sticky').html(nav)
	})
	// $('header.sticky').load('/exp/str/nav.html')
})