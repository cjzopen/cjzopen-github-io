var vue2 = new Vue({
  el: '#wrapper',
  data: {
    theday:'w0',
    week:[
      {
        code:'w0',
        chinese:'週日'
      },
      {
        code:'w1',
        chinese:'週一'
      },
      {
        code:'w2',
        chinese:'週二'
      },
      {
        code:'w3',
        chinese:'週三'
      },
      {
        code:'w4',
        chinese:'週四'
      },
      {
        code:'w5',
        chinese:'週五'
      },
      {
        code:'w6',
        chinese:'週六'
      },
      {
        code:'other',
        chinese:'其它'
      }
    ],
    querySeason:'',
    items:[
      {
        season:['2019-aki'],
        day: 'w6',
        img: 'https://i.imgur.com/rV7TBeF.jpg',
        title: '我的英雄學院 4th',
        link: 'https://heroaca.com/',
        words:['']
      },
      {
        season:['2019-haru','2019-aki'],
        day: 'w6',
        img: 'https://i.imgur.com/RKuH9x6.jpg',
        title: 'SAO Alicization - War of Underworld',
        link: 'https://sao-alicization.net/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/VrssBRT.jpg',
        title: '食戟のソーマ 神ノ皿',
        link: 'http://shokugekinosoma.com/4thplate/?lang=ja',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://i.imgur.com/IqyOwoX.jpg',
        title: 'PSYCHO-PASS 3',
        link: 'https://psycho-pass.com/3rd/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://www.tv-tokyo.co.jp/anime/7-taizai/images/bnr/bnr_official.png',
        title: '七つの大罪 神々の逆鱗',
        link: 'https://www.tv-tokyo.co.jp/anime/7-taizai/',
        words:['']
      },
      {
        season:['2019-aki','2020-fuyu'],
        day: 'w6',
        img: 'https://anime.fate-go.jp/ep7-tv/assets/img/story/00/img_05.jpg',
        title: 'FGO -絶対魔獣戦線バビロニア-',
        link: 'https://anime.fate-go.jp/ep7-tv/',
        words:['']
      },
      {
        season:['2019-aki','2020-fuyu'],
        day: 'w2',
        img: 'https://www.ntv.co.jp/chihayafuru/_nuxt/img/ee2916a.jpg',
        title: '花牌情緣3',
        link: 'https://www.ntv.co.jp/chihayafuru/',
        words:['']
      },
      {
        season:['2019-haru','2019-aki'],
        day: 'w6',
        img: 'https://i.imgur.com/8M7VBz8.png',
        title: 'ぼくたちは勉強ができない！',
        link: 'https://boku-ben.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/ZUvJiCz.jpg',
        title: '高分少女II',
        link: 'http://hi-score-girl.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/vg9RhQz.jpg',
        title: '歌舞伎町シャーロック',
        link: 'http://pipecat-kabukicho.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://anime.granbluefantasy.jp/1st/news/SYS/CONTENTS/2019011511215993948775/w500',
        title: '碧藍幻想 s2',
        link: 'https://anime.granbluefantasy.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/inRYAZS.jpg',
        title: '慎重勇者~この勇者が俺TUEEEくせに慎重すぎる~',
        link: 'http://shincho-yusha.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://m.imageimg.net/upload/artist_img/ASSSP/5ac2a0cd77668228b788397bcb7684f039caa222_5d6e839b9a20e.jpg',
        title: '刺客守則',
        link: 'https://assassinspride-anime.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://azurlane-anime.jp/images/ogp2.png',
        title: '碧藍航線',
        link: 'https://azurlane-anime.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w6',
        img: 'https://i.imgur.com/BlBiTW4.jpg',
        title: 'この音とまれ！ s2',
        link: 'http://www.konooto-anime.jp/',
        words:['']
      },
      {
        season:['2019-aki','2020-fuyu'],
        day: 'w3',
        img: 'https://www.nhk.or.jp/anime/radiant/assets/images/art/popup.png',
        title: 'Radiant s2',
        link: 'https://www.nhk.or.jp/anime/radiant/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://ore.ski/_assets/siteinfo/og_image.jpg',
        title: '俺を好きなのはお前だけかよ',
        link: 'https://ore.ski/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/1omi7YB.jpg',
        title: 'あひるの空',
        link: 'http://ahirunosora.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/tdoaX9w.png',
        title: 'BEASTARS',
        link: 'https://bst-anime.com/',
        words:['NETFLIX','漫畫大賞2018第1名']
      },
      {
        season:['2019-haru','2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/k6z8RLm.png',
        title: 'Fairy Gone',
        link: 'https://www.fairygone.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w1',
        img: 'https://babylon-anime.com/img/common/ogp2.jpg',
        title: 'バビロン',
        link: 'https://babylon-anime.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://i.imgur.com/2t5LVoi.png',
        title: '超人高校生たちは異世界でも余裕で生き抜くようです！',
        link: 'http://choyoyu.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w1',
        img: 'https://img.imageimg.net/artist/noukin-anime/img/news_thumbnail_image_1076010.jpg',
        title: '私、能力は平均値でって言ったよね!',
        link: 'https://noukin-anime.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/A8nqfte.jpg',
        title: '旗揚！けものみち',
        link: 'http://hataage-kemonomichi.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://i.imgur.com/8x5Yz09.jpg',
        title: 'No Guns Life',
        link: 'http://nogunslife.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w4',
        img: 'https://i.imgur.com/42VitIZ.png',
        title: '星合の空',
        link: 'http://www.tbs.co.jp/anime/hoshiai/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: '',
        img: 'https://i.imgur.com/bgjP1WB.jpg',
        title: 'pet',
        link: 'https://pet-anime.com/',
        words:['']
      },
      {
        season:['2019-aki','2020-fuyu'],
        day: 'w6',
        img: 'https://i.imgur.com/sKQ0CMS.jpg',
        title: '入間同學入魔了！',
        link: 'http://www6.nhk.or.jp/anime/program/detail.html?i=iruma',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/eG22EW6.gif',
        title: '本好きの下剋上',
        link: 'http://booklove-anime.jp/',
        words:['這本輕小說真厲害2018,2019第1名']
      },
      {
        season:['2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/sG8vzni.jpg',
        title: '警視庁 特務部 特殊凶悪犯対策室 第七課 -トクナナ-',
        link: 'http://www.tokunana.jp/',
        words:['']
      },
      {
        season:['2019-aki','2020-fuyu'],
        day: 'w1',
        img: 'https://i.imgur.com/bxhuJLZ.jpg',
        title: 'Phantasy Star Online 2: Episode Oracle',
        link: 'http://pso2.jp/anime_eporacle/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w3',
        img: 'https://i.imgur.com/CTITrhR.jpg',
        title: '放課後さいころ倶楽部',
        link: 'http://saikoro-club.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w1',
        img: 'https://i.imgur.com/7gEzqu9.jpg',
        title: 'Stand My Heroes PIECE OF TRUTH',
        link: 'https://www.standmyheroes.tv/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w2',
        img: 'https://i.imgur.com/pFDrT97.png',
        title: 'Z/X Code Reunion',
        link: 'https://www.zxtcg.com/animation/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w6',
        img: 'https://i.imgur.com/3dLLtI2.png',
        title: '戦×恋',
        link: 'https://val-love.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/yQShsAB.jpg',
        title: 'Rifle is Beautiful',
        link: 'https://chidori-high-school.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/l2P4jiC.jpg',
        title: '厨病激発ボーイ',
        link: 'http://chubyou.net/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/Y4Jn89D.jpg',
        title: 'ACTORS -Songs Connection-',
        link: 'https://actors-anime.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/qIjHmt7.jpg',
        title: 'アフリカのサラリーマン',
        link: 'http://afusara.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/g8cLHfP.png',
        title: 'ぬるぺた ',
        link: 'https://nullpeta.com/',
        words:['上田麗奈','和氣あず未']
      },
      {
        season:['2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/fvFEgBP.jpg',
        title: '真・中華一番！',
        link: 'http://cookingmaster-anime.jp/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: 'w2',
        img: 'https://i.imgur.com/1BIOSO6.jpg',
        title: '神田川JET GIRLS',
        link: 'http://kjganime.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: '',
        img: 'https://yuruyuri.com/miniyuri/img/ogp.jpg',
        title: 'みにゆり',
        link: 'https://yuruyuri.com/miniyuri/',
        words:['9/25','youtube']
      },
      {
        season:['2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/ikVoSTR.png',
        title: '天華百剣 ～めいじ館へようこそ！～',
        link: 'https://tenkahyakken.jp/special/anime/',
        words:['']
      },
      {
        season:['2019-natsu','2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/WBwtqtg.jpg',
        title: 'Ｄｒ．ＳＴＯＮＥ',
        link: 'https://dr-stone.jp/',
        words:['']
      },
      {
        season:['2019-natsu','2019-aki'],
        day: 'w5',
        img: 'https://i.imgur.com/k777xpT.jpg',
        title: '炎炎ノ消防隊',
        link: 'http://fireforce-anime.jp/',
        words:['']
      },
      {
        season:['2019-natsu','2019-aki'],
        day: 'w0',
        img: 'https://i.imgur.com/rZ2O2fq.jpg',
        title: '海盜戰記',
        link: 'https://vinlandsaga.jp/',
        words:['']
      },
      {
        season:['2019-natsu','2019-aki','2020-fuyu'],
        day: 'w2',
        img: 'https://i.imgur.com/u8jZRcd.jpg',
        title: '鑽石王牌Act II',
        link: 'https://diaace.com/',
        words:['']
      },
      {
        season:['2019-aki'],
        day: '',
        img: 'https://i.imgur.com/RSv1BGv.jpg',
        title: 'OBSOLETE',
        link: 'https://project-obsolete.com/',
        words:['虚淵玄','12月youtube配信']
      },
      {
        season:['2019-aki'],
        day: '',
        img: 'https://i.imgur.com/NTWIpX9.jpg',
        title: 'Levius',
        link: 'http://levius.net/',
        words:['Netflix','11/28']
      }
    ]
  },
  mounted: function() {
    this.theday ='w' + this._day().toLocaleString();

    var urlParams = new URLSearchParams(window.location.search);
    this.querySeason = urlParams.get('se');
  },
  methods:{
    _day: function(){
      let d = new Date();
      let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      let nd = new Date(utc + (3600000*'+1')).getDay();
      return nd;
    },
    reorder:function(){
      var _area = $('.list');
      var grp = _area.children('.animes');
      var cnt = grp.length;
      var temp, x;
      for (var i = 0; i < cnt; i++) {
        temp = grp[i];
        x = Math.floor(Math.random() * cnt);
        grp[i] = grp[x];
        grp[x] = temp;
      }
      $(grp).remove();
      _area.append($(grp));
    },
    _checked:function(e){
      if(e == this.theday){
        return true;
      }else{
        return false;
      }
    },
    select_day:function(e){
      var v = e.target.id;
      gtag('config', 'UA-77969491-3', {
        'page_title' : '動畫新番表',
        'page_path': location.pathname+v
      });
    }
  }
});
vue2.reorder();
