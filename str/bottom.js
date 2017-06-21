
var dcss = {
    a1:{
        "img": "jimmy",
        "link": "hello world",
        "title": "aa"
    },
    a2:{
        "img": "billy",
        "link": "foo equals bar",
        "title": "aa"
    }
}
var data='';
var str='';
for(var i=Object.keys(dcss).length;i>=1;i--){
	str = '<article class="container"><div class="row"><picture class="col-md-3"><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'"><img src="'+dcss[Object.keys(dcss)[i - 1]].img+'" alt="'+dcss[Object.keys(dcss)[i - 1]].title+'"></a></picture><div class="col-md-9"><h2><a href="'+dcss[Object.keys(dcss)[i - 1]].link+'" title="'+dcss[Object.keys(dcss)[i - 1]].title+'"></a></h2></div></div></article>';
	data += str;
}
