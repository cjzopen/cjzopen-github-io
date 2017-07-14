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
	        "link": "https://www.google.com.tw/intl/zh-TW/analytics/",
	        "title": "google analytics",
	        "preface": "."
	    },
	    a3:{
	        "link": "https://www.google.com/webmasters/tools/home?hl=zh-TW",
	        "title": "Search Console",
	        "preface": "google 的網站 debug 工具"
	    },
	    a4:{
	        "link": "https://developers.google.com/speed/pagespeed/insights/",
	        "title": "PageSpeed Insights",
	        "preface": "網站速度, 結果看看就好, 需求取捨比較重要"
	    },
	    a5:{
	        "link": "http://jsbin.com/",
	        "title": "jsbin",
	        "preface": "線上測試"
	    },
	    a6:{
	        "link": "https://developers.facebook.com/docs/plugins/",
	        "title": "FB social API",
	        "preface": "更詳細請自己去看 graph API"
	    },
	    a7:{
	        "link": "https://developers.facebook.com/tools/debug/",
	        "title": "FB share debug",
	        "preface": "分享在 fb 上的長相跟自己想的不一樣？ 該 debug 一下了"
	    },
	    a8:{
	        "link": "http://cubic-bezier.com/",
	        "title": "cubic-bezier",
	        "preface": "cubic-bezier 產生器"
	    },
	    a9:{
	        "link": "http://bennettfeely.com/clippy/",
	        "title": "clip-path",
	        "preface": "clip-path 產生器"
	    },
	    a10:{
	        "link": "http://phpfiddle.org/",
	        "title": "phpfiddle",
	        "preface": "PHP 線上測試"
	    },
	    a11:{
	        "link": "https://regex101.com/",
	        "title": "regex101",
	        "preface": "regex 語法測試"
	    },
	    a12:{
	        "link": "http://graphemica.com/unicode/characters",
	        "title": "unicode",
	        "preface": "unicode 查詢"
	    },
	    a13:{
	        "link": "http://refresh-sf.com/",
	        "title": "css js 壓縮",
	        "preface": "破壞性壓縮 (會改變變數名稱)"
	    },
	    a14:{
	        "link": "http://csscompressor.com/",
	        "title": "csscompressor",
	        "preface": "css 壓縮"
	    },
	    a15:{
	        "link": "http://caniuse.com/",
	        "title": "caniuse.com",
	        "preface": "相容性查詢"
	    },
	    a16:{
	        "link": "https://tinypng.com/",
	        "title": "Tinypng (tinyjpg)",
	        "preface": "圖片無痕壓縮"
	    },
	    a17:{
	        "link": "https://websemantics.uk/tools/image-to-data-uri-converter/",
	        "title": "image to data-URI converter",
	        "preface": "圖片轉成 data-URI"
	    },
	    a18:{
	        "link": "https://developers.google.com/+/web/+1button/",
	        "title": "Google social 指南",
	        "preface": "G+ 社交的簡單運用"
	    }
	}
	var htools ='';
	var str ='';
	for(var i=Object.keys(tools).length;i>=1;i--){
		str = '<div class="col-xs-12 col-sm-6 col-md-3"><a class="thumbnail" href="'+tools[Object.keys(tools)[i - 1]].link+'" title="'+tools[Object.keys(tools)[i - 1]].title+'"><img src="'+img+'" alt="*"><h2 class="main-color">'+tools[Object.keys(tools)[i - 1]].title+'</h2><p class="text-left">'+tools[Object.keys(tools)[i - 1]].preface+'</p></div>';
		htools += str;
	}
	$('#tool-data').html(htools);

	var orig = $('#tool-data').children();

	reorder();

	function reorder() {
	    var grp = $('#tool-data').children();
	    var cnt = grp.length;

	    var temp, x;
	    for (var i = 0; i < cnt; i++) {
	        temp = grp[i];
	        x = Math.floor(Math.random() * cnt);
	        grp[i] = grp[x];
	        grp[x] = temp;
	    }
	    $(grp).remove();
	    $('#tool-data').append($(grp));
	}

	function orderPosts() {
	    $('#tool-data').html(orig);
	}
})