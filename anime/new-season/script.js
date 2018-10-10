var vue2 = new Vue({
  el: '#wrapper',
  data: {
    ItemList:'http://schema.org/ItemList',
    ListItem:'http://schema.org/ListItem',
    itemUrl:'item url',
    itemImage:'image',
    itemName:'name',
    items:[
      {
        day: 'w1',
        img: 'img/2018-aki/あかねさす少女.jpg',
        title: 'あかねさす少女',
        link: 'http://akanesasushojo.com/'
      },
      {
        day: 'w1',
        img: 'http://thunderboltfantasy.com.tw/session2/images/mainpic0914.png',
        title: '東離劍遊紀2',
        link: 'http://thunderboltfantasy.com.tw/session2/'
      },
      {
        day: 'w1',
        img: 'http://www.ten-sura.com/4GfGdAp7/wp-content/themes/_s/img/home/kv.jpg',
        title: '關於我轉生變成史萊姆這檔事',
        link: 'http://www.ten-sura.com/'
      },
      {
        day: 'w3',
        img: 'https://ao-buta.com/ogp.png',
        title: '青春豬頭少年不做兔女郎學姐的夢',
        link: 'https://ao-buta.com/'
      },
      {
        day: 'w1',
        img: 'https://shucap.cf-anime.com/wp-content/themes/shucap/img/og_image.jpg',
        title: '末班電車後、膠囊旅館、給上司微熱的夜晚。',
        link: 'https://shucap.cf-anime.com/'
      },
      {
        day: 'w7',
        img: 'http://gaikotsu-honda-anime.com/common/images/common/ogp03.jpg',
        title: '書店裡的骷髏店員本田',
        link: 'http://gaikotsu-honda-anime.com/'
      },
      {
        day: 'w1',
        img: 'img/2018-aki/直感.jpg',
        title: '直感×アルゴリズム',
        link: 'http://project-algorhythm.com/'
      },
      {
        day: 'w1',
        img: 'http://www.kamuy-anime.com/core_sys/images/others/ogp.jpg',
        title: '黃金神威2期',
        link: 'http://www.kamuy-anime.com/'
      },
      {
        day: 'w1',
        img: 'http://www.souten-regenesis.com/wp/wp-content/themes/souten_2018_cms_v2/images/mv_new_sp.jpg',
        title: '蒼天の拳REGENESIS 2期',
        link: 'http://www.souten-regenesis.com/'
      },
      {
        day: 'w1',
        img: 'https://www.saintia-sho.com/lib/images/fb.jpg',
        title: '聖闘士星矢 セインティア翔',
        link: 'https://www.saintia-sho.com/'
      },
      {
        day: 'w2',
        img: 'http://tiramisu-anime.com/wp/wp-content/uploads/2018/09/ogp_1809.png',
        title: '宇宙戰艦提拉米蘇 2期',
        link: 'http://tiramisu-anime.com/'
      },
      {
        day: 'w2',
        img: 'http://xuanyuansword.net/tw/images/sp/img_logo.png',
        title: '軒轅劍 蒼之曜',
        link: 'http://xuanyuansword.net/tw/'
      },
      {
        day: 'w2',
        img: 'http://www.toei-anim.co.jp/tv/bbh/ogp.jpg',
        title: '爆釣バーハンター',
        link: 'http://www.toei-anim.co.jp/tv/bbh/'
      },
      {
        day: 'w2',
        img: 'https://ganma.jp/g/anime/otonabougu/img/fb1200x630.png',
        title: '大人的防具店',
        link: 'https://ganma.jp/g/anime/otonabougu/'
      },
      {
        day: 'w1',
        img: 'img/2018-aki/走り.jpg',
        title: '走り続けてよかったって。',
        link: 'http://hashiyoka.com/'
      },
      {
        day: 'w2',
        img: 'http://sidem-wakemini.com/lib/images/ogp.png',
        title: '偶像大師SideM 理由（ワケ）あってMini!',
        link: 'http://sidem-wakemini.com/'
      },
      {
        day: 'w2',
        img: 'https://www.marv.jp/special/tokyoghoul/ogp.png',
        title: '東京喰種:re 2期',
        link: 'http://www.marv.jp/special/tokyoghoul/'
      },
      {
        day: 'w2',
        img: 'http://www.tv-tokyo.co.jp/anime/captaintsubasa2018/images/facebook_icon.jpg',
        title: '足球小將翼 中學生篇',
        link: 'http://www.tv-tokyo.co.jp/anime/captaintsubasa2018/'
      },
      {
        day: 'w2',
        img: 'img/2018-aki/人外.jpg',
        title: '人外さんの嫁',
        link: 'https://jingaisan.com/'
      },
      {
        day: 'w2',
        img: 'http://kazetsuyo-anime.com/images/ogp3.jpg',
        title: '強風吹拂',
        link: 'http://kazetsuyo-anime.com/'
      },
      {
        day: 'w3',
        img: 'https://www.yte.co.jp/yte/public/assets/img/bangumi/0c4c0d164b1ff05e4b85543a516d272f.jpg',
        title: '喂，看見耳朵啦！',
        link: 'https://www.yte.co.jp/program/detail.php?id=107'
      },
      {
        day: 'w3',
        img: 'http://soraumi-anime.com/og.png',
        title: '轉吧！小海女！~在天空與海洋之間~',
        link: 'http://soraumi-anime.com/'
      },
      {
        day: 'w2',
        img: 'http://conception-anime.com/images/fb_image.png',
        title: 'Conception 產子救世錄',
        link: 'http://conception-anime.com/'
      },
      {
        day: 'w3',
        img: 'img/2018-aki/妹妹.jpg',
        title: '我喜歡的妹妹不是妹妹',
        link: 'http://imo-imo.jp/'
      },
      {
        day: 'w3',
        img: 'http://ingressanime.com/images/ogp2.jpg',
        title: 'INGRESS',
        link: 'http://ingressanime.com/'
      },
      {
        day: 'w4',
        img: 'http://rerided.com/img/top/mainvisual1.png',
        title: 'RErideD-刻越えのデリダ-',
        link: 'http://rerided.com/'
      },
      {
        day: 'w4',
        img: 'https://zombielandsaga.com/images/ogp2.jpg',
        title: '殭屍樂園薩加',
        link: 'https://zombielandsaga.com/'
      },
      {
        day: 'w4',
        img: 'https://beelmama.com/assets/ogp.png',
        title: '只要別西卜大小姐喜歡就好',
        link: 'https://beelmama.com/'
      },
      {
        day: 'w4',
        img: 'https://karakuri-anime.com/kc_ogp.png',
        title: '傀儡馬戲團',
        link: 'https://karakuri-anime.com/'
      },
      {
        day: 'w4',
        img: 'http://www.mercstoria.jp/images/ogp.jpg',
        title: '梅露可物語 -癒術士と鈴のしらべ-',
        link: 'http://www.mercstoria.jp/'
      },
      {
        day: 'w4',
        img: 'http://hangyakusei-anime.com/core_sys/images/main/common/logo.png',
        title: '叛逆性百萬亞瑟王',
        link: 'http://hangyakusei-anime.com/'
      },
      {
        day: 'w5',
        img: 'https://devidol.com/img/comingsoon03.png',
        title: 'でびどる！',
        link: 'https://devidol.com/'
      },
      {
        day: 'w5',
        img: 'http://www.tbs.co.jp/anime/gakuen_basara/img/ogp.png',
        title: '學園BASARA',
        link: 'http://www.tbs.co.jp/anime/gakuen_basara/'
      },
      {
        day: 'w5',
        img: 'http://www.tbs.co.jp/anime/BAKUMATSU/img/ogp.png',
        title: 'BAKUMATSU',
        link: 'http://www.tbs.co.jp/anime/BAKUMATSU/'
      },
      {
        day: 'w5',
        img: 'http://i.ytimg.com/vi/WNtmFBt3yzM/mqdefault.jpg',
        title: '隔壁的吸血鬼美眉',
        link: 'http://kyuketsukisan-anime.com/'
      },
      {
        day: 'w5',
        img: 'http://yagakimi.com/og-image.jpg',
        title: '終將成為妳',
        link: 'http://yagakimi.com/'
      },
      {
        day: 'w5',
        img: 'http://toaru-project.com/index_3/ogp/ogp.jpg',
        title: '魔法禁書目錄Ⅲ',
        link: 'http://toaru-project.com/index_3/'
      },
      {
        day: 'w5',
        img: 'https://hinomaru-zumou.com/img/og-image.png',
        title: '火ノ丸相撲',
        link: 'https://hinomaru-zumou.com/'
      },
      {
        day: 'w5',
        img: 'http://kitsune-no-koe.com/assets/img/main-img.png',
        title: '狐狸之聲',
        link: 'http://kitsune-no-koe.com/'
      },
      {
        day: 'w5',
        img: 'https://www.bs-sptv.com/gurazeni/og.png',
        title: '錢進球場 2期',
        link: 'https://www.bs-sptv.com/gurazeni/'
      },
      {
        day: 'w5',
        img: 'http://uzamaid.com/ogp.jpg',
        title: '我家的女僕有夠煩！',
        link: 'http://uzamaid.com/'
      },
      {
        day: 'w5',
        img: 'https://dakaretai-1st.com/assets/img/og.png',
        title: '抱かれたい男1位に脅されています。',
        link: 'https://dakaretai-1st.com/'
      },
      {
        day: 'w5',
        img: 'http://senran2.tv/img/img_person03.png',
        title: '閃亂神樂 東京妖魔篇',
        link: 'http://senran2.tv/'
      },
      {
        day: 'w6',
        img: 'http://www.vap.co.jp/chitosechan/images/ogp-img.png',
        title: '歡迎光臨、千歲醬',
        link: 'http://vap.co.jp/chitosechan/'
      },
      {
        day: 'w5',
        img: 'http://jojo-animation.com/og_img/og_img5.jpg',
        title: 'JOJO的奇妙冒險 黃金之風',
        link: 'http://jojo-animation.com/'
      },
      {
        day: 'w6',
        img: 'http://yamato2202.net/img/ogp_yamato2202.png',
        title: '宇宙戰艦大和號2202 愛的戰士們',
        link: 'http://yamato2202.net/'
      },
      {
        day: 'w6',
        img: 'http://www.juliet-anime.com/core_sys/images/others/ogp/ogp_3.jpg',
        title: '寄宿學校的茱麗葉',
        link: 'http://www.juliet-anime.com/'
      },
      {
        day: 'w5',
        img: 'http://www.iroduku.jp/img/common/og.jpg',
        title: '來自繽紛世界的明日',
        link: 'http://www.iroduku.jp/'
      },
      {
        day: 'w6',
        img: 'http://www.ytv.co.jp/animegyakuten/images/main_bg.jpg',
        title: '逆転裁判～その「真実」、異議あり！～ Season 2',
        link: 'http://www.ytv.co.jp/animegyakuten/'
      },
      {
        day: 'w6',
        img: 'https://www.nhk.or.jp/anime/radiant/og/201809.jpg',
        title: 'RADIANT',
        link: 'https://www.nhk.or.jp/anime/radiant/'
      },
      {
        day: 'w6',
        img: 'img/2018-aki/sao.jpg',
        title: '刀劍神域 Alicization',
        link: 'https://sao-alicization.net/'
      },
      {
        day: 'w6',
        img: 'http://goblinslayer.jp/wp-content/themes/goblinslayer/images/main-visual.png',
        title: '哥布林殺手',
        link: 'http://goblinslayer.jp/'
      },
      {
        day: 'w6',
        img: 'http://www.sonokano.com/images/sonokano_web_design-ogp.png',
        title: 'その時、カノジョは。',
        link: 'http://www.sonokano.com/'
      },
      {
        day: 'w7',
        img: 'http://dabudeka.com/common/images/og_img1809.png',
        title: 'DOUBLE DECKER！道格＆西里爾',
        link: 'http://dabudeka.com/'
      },
      {
        day: 'w7',
        img: 'http://baki-anime.jp/images/common/ogp.png',
        title: '刃牙 2期',
        link: 'http://baki-anime.jp/'
      },
      {
        day: 'w6',
        img: 'https://gridman.net/img/ogp.jpg',
        title: 'SSSS.GRIDMAN',
        link: 'https://gridman.net/'
      },
      {
        day: 'w7',
        img: 'https://releasethespyce.jp/img/ogp_3.jpg',
        title: 'RELEASE THE SPYCE',
        link: 'https://releasethespyce.jp/'
      },
      {
        day: 'w7',
        img: 'http://www.tv-tokyo.co.jp/anime/aigan_kaiju/images/facebook_icon.jpg',
        title: '愛玩怪獣',
        link: 'http://www.tv-tokyo.co.jp/anime/aigan_kaiju/'
      },
      {
        day: 'w7',
        img: 'https://fairytail-tv.com/assets/img/ogp1809_B.png',
        title: 'FAIRY TAIL Final Series',
        link: 'https://www.fairytail-tv.com/'
      },
      {
        day: 'w7',
        img: 'http://ulysses-anime.jp/images/ogp2.jpg',
        title: '尤利西斯 貞德與鍊金騎士',
        link: 'http://ulysses-anime.jp/'
      },
      {
        day: 'w7',
        img: 'http://animayell.com/core_sys/images/others/ogp.jpg',
        title: 'Anima Yell!',
        link: 'http://animayell.com/'
      },
      {
        day: 'w7',
        img: 'http://himotehouse.com/wp/wp-content/themes/himotehouse/img/bg_header.png',
        title: 'Himote House',
        link: 'http://himotehouse.com/'
      },
      {
        day: 'w7',
        img: 'http://tsurune.com/img/social.jpg',
        title: '弦音－風舞高中弓道部－',
        link: 'http://tsurune.com/'
      }
    ],
    lasts:[
      {
        img: 'img/2018-aki/少女歌劇.jpg',
        title: '少女☆歌劇レヴュー・スタァライト'
      },
      {
        img: 'img/2018-aki/高分少女.jpg',
        title: '高分少女'
      },
      {
        img: 'img/2018-aki/planetwith.jpg',
        title: 'Planet With'
      }
    ]
  },
  methods:{
    reorder:function(){
      var _area = $('.list');
      var grp = _area.children();
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
    }
  }
});
vue2.reorder();
$('#select').change(function(){
  var wDay = $(this).val();
  var _list = $('.list');
  _list.find('.col-lg-3').hide();
  _list.find('.'+wDay).fadeIn('200');
  gtag('config', 'UA-77969491-3', {
    'page_title' : '動畫新番表',
    'page_path': '/anime/new-season/'+ wDay
  });
});
