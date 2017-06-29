var $main = $('main');
var noImg ='/img/rrr.jpg';
var dcss = {
    a1:{
        "img": 'https://api.fnkr.net/testimg/360x205/9a91f2/FEFEFE/?text=sticky',
        "link": "/exp/sticky.html",
        "title": "position: sticky;",
        "date": "2017-06-13",
        "preface": "css 語法 sticky 在今年能用嗎？能！只要你不考慮 IE 或 Edge ..."
    },
    a2:{
        "img": 'https://api.fnkr.net/testimg/360x205/9a91f2/FEFEFE/?text=picture',
        "link": "/exp/picture.html",
        "title": "HTML5 picture tag",
        "date": "2017-06-26",
        "preface": "換圖用不再勞煩 css"
    },
    a3:{
        "img": 'https://api.fnkr.net/testimg/360x205/9a91f2/FEFEFE/?text=DevTool+59',
        "link": "/exp/devtool59.html",
        "title": "DevTools (Chrome 59)",
        "date": "2017-06-27",
        "preface": "一起來看 DevTools 在 Chrome 59 更新了什麼功能"
    },
    a4:{
        "img": 'https://api.fnkr.net/testimg/360x205/9a91f2/FEFEFE/?text=CSS+Variables',
        "link": "/exp/css-variables.html",
        "title": "CSS Variables",
        "date": "2017-06-29",
        "preface": "你知道 CSS3 其實有原生的變數系統嗎"
    }
}
var hcss='';
var str='';
for(var i=Object.keys(dcss).length;i>=1;i--){
	str = '<article class="container list"><div class="row"><picture class="col-sm-3"><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'"><img class="img-responsive center-block" src="'+dcss[Object.keys(dcss)[i - 1]].img+'" alt="'+dcss[Object.keys(dcss)[i - 1]].title+'" onerror="this.src=\'/img/rrr.jpg\';"></a></picture><div class="col-sm-9"><h2 class="main-color"><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'">'+dcss[Object.keys(dcss)[i - 1]].title+'</a></h2><time class="main-color" datetime="'+dcss[Object.keys(dcss)[i - 1]].date+'">'+dcss[Object.keys(dcss)[i - 1]].date+'</time><p>'+dcss[Object.keys(dcss)[i - 1]].preface+'</p></div></div></article>';
	hcss += str;
}
$main.html('<section class="container"></section>');
$main.find('section').html(hcss);