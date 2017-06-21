var noImg ='/img/rrr.jpg';
var dcss = {
    a1:{
        "img": noImg,
        "link": "#",
        "title": "sticky",
        "date": "2017-06-13",
        "preface": "sticky 在今年能用嗎"
    },
    a2:{
        "img": noImg,
        "link": "#",
        "title": "test",
        "date": "2017-06-13",
        "preface": "test preface"
    }
}
var arr='';
var str='';
for(var i=Object.keys(dcss).length;i>=1;i--){
	str = '<article class="container"><div class="row"><picture class="col-sm-3"><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'"><img class="img-responsive center-block" src="'+dcss[Object.keys(dcss)[i - 1]].img+'" alt="'+dcss[Object.keys(dcss)[i - 1]].title+'"></a></picture><div class="col-sm-9"><h2 class="main-color"><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'">'+dcss[Object.keys(dcss)[i - 1]].title+'</a></h2><time class="main-color" datetime="'+dcss[Object.keys(dcss)[i - 1]].date+'">'+dcss[Object.keys(dcss)[i - 1]].date+'</time><p>'+dcss[Object.keys(dcss)[i - 1]].preface+'</p></div></div></article>';
	arr += str;
}
