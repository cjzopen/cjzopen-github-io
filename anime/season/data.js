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
    ItemList:'http://schema.org/ItemList',
    ListItem:'http://schema.org/ListItem',
    itemUrl:'item url',
    itemImage:'image',
    itemName:'name',
    items:[
      {
        '2018-aki':[
          {
            day: 'w1',
            img: '../img/2018-aki/あかねさす少女.jpg',
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
            day: 'w0',
            img: 'https://shucap.cf-anime.com/wp-content/themes/shucap/img/og_image.jpg',
            title: '末班電車後、膠囊旅館、給上司微熱的夜晚。',
            link: 'https://shucap.cf-anime.com/'
          },
          {
            day: 'w0',
            img: 'http://gaikotsu-honda-anime.com/common/images/common/ogp03.jpg',
            title: '書店裡的骷髏店員本田',
            link: 'http://gaikotsu-honda-anime.com/'
          },
          {
            day: 'w1',
            img: '../img/2018-aki/直感.jpg',
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
            day: 'w1',
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
            day: 'w1',
            img: 'https://ganma.jp/g/anime/otonabougu/img/fb1200x630.png',
            title: '大人的防具店',
            link: 'https://ganma.jp/g/anime/otonabougu/'
          },
          {
            day: 'w1',
            img: '../img/2018-aki/走り.jpg',
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
            day: 'w1',
            img: 'http://www.tv-tokyo.co.jp/anime/captaintsubasa2018/images/facebook_icon.jpg',
            title: '足球小將翼 中學生篇',
            link: 'http://www.tv-tokyo.co.jp/anime/captaintsubasa2018/'
          },
          {
            day: 'w2',
            img: '../img/2018-aki/人外.jpg',
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
            day: 'w4',
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
            img: '../img/2018-aki/妹妹.jpg',
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
            day: 'w3',
            img: 'http://rerided.com/img/top/mainvisual1.png',
            title: 'RErideD-刻越えのデリダ-',
            link: 'http://rerided.com/'
          },
          {
            day: 'w4',
            img: 'https://zombielandsaga.com/images/ogp2.jpg',
            title: '佐賀偶像是傳奇',
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
            img: '../img/2018-aki/sao.jpg',
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
            day: 'w0',
            img: 'http://dabudeka.com/common/images/og_img1809.png',
            title: 'DOUBLE DECKER！道格＆西里爾',
            link: 'http://dabudeka.com/'
          },
          {
            day: 'w0',
            img: 'http://baki-anime.jp/images/common/ogp.png',
            title: '刃牙 2期',
            link: 'http://baki-anime.jp/'
          },
          {
            day: 'w6',
            img: '../img/2018-aki/gridman.jpg',
            title: 'SSSS.GRIDMAN',
            link: 'https://gridman.net/'
          },
          {
            day: 'w0',
            img: 'https://releasethespyce.jp/img/ogp_3.jpg',
            title: 'RELEASE THE SPYCE',
            link: 'https://releasethespyce.jp/'
          },
          {
            day: 'w0',
            img: 'http://www.tv-tokyo.co.jp/anime/aigan_kaiju/images/facebook_icon.jpg',
            title: '愛玩怪獣',
            link: 'http://www.tv-tokyo.co.jp/anime/aigan_kaiju/'
          },
          {
            day: 'w0',
            img: 'https://fairytail-tv.com/assets/img/ogp1809_B.png',
            title: 'FAIRY TAIL Final Series',
            link: 'https://www.fairytail-tv.com/'
          },
          {
            day: 'w0',
            img: 'http://ulysses-anime.jp/images/ogp2.jpg',
            title: '尤利西斯 貞德與鍊金騎士',
            link: 'http://ulysses-anime.jp/'
          },
          {
            day: 'w0',
            img: 'http://animayell.com/core_sys/images/others/ogp.jpg',
            title: 'Anima Yell!',
            link: 'http://animayell.com/'
          },
          {
            day: 'w0',
            img: 'http://himotehouse.com/wp/wp-content/themes/himotehouse/img/bg_header.png',
            title: 'Himote House',
            link: 'http://himotehouse.com/'
          },
          {
            day: 'w0',
            img: 'http://tsurune.com/img/social.jpg',
            title: '弦音－風舞高中弓道部－',
            link: 'http://tsurune.com/'
          }
        ],
        '2019-fuyu':[
          {
            day: 'w5',
            img: '../../img/2019-fuyu/笑容的代價.jpg',
            title: '笑容的代價',
            link: 'http://egaonodaika.com/',
            words:['花守ゆみり','早見沙織','佐藤利奈']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/1048119794321387520/foT5eF1v_bigger.jpg',
            title: 'W’z',
            link: 'http://wz-anime.net/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://kemono-friends.jp/wp/wp-content/uploads/2018/09/bnr_footer02_W360H140.png',
            title: '動物朋友 2',
            link: 'http://kemono-friends.jp/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://pbs.twimg.com/profile_images/1070605577296928773/kbIJQonL_400x400.jpg',
            title: '多羅羅',
            link: 'https://dororo-anime.com/',
            words:['手塚治虫']
          },
          {
            day: 'w2',
            img: 'http://rainycocoa.jp/anime/img/story_05_04.gif',
            title: '雨色可可亞 s5',
            link: 'http://rainycocoa.jp/anime/',
            words:['']
          },
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/profile_images/955270573172535296/6ATNu-QA_bigger.jpg',
            title: '3D彼女 s2',
            link: 'http://www.3dkanojo-anime.com/',
            words:['']
          },
          {
            day: 'w3',
            img: 'http://revisions.jp/images/storyimg3.jpg',
            title: 'revisions',
            link: 'http://revisions.jp/',
            words:['NETFLIX']
          },
          {
            day: 'w4',
            img: 'https://neverland-anime.com/og.png',
            title: '約定的夢幻島',
            link: 'http://neverland-anime.com/',
            words:['這本漫畫真厲害2018男性第1名','内田真礼','伊瀬茉莉也','藤田奈央']
          },
          {
            day: 'w3',
            img: 'https://pbs.twimg.com/profile_images/1027661323188891649/jLpuQtmS_400x400.jpg',
            title: '煙草',
            link: 'http://kemurikusa.com/',
            words:['たつき','小松未可子']
          },
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/profile_images/1027718383968477185/2oJRHfvZ_bigger.jpg',
            title: '臨死！！江古田',
            link: 'http://ekodachan.com/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://pbs.twimg.com/profile_images/958557331968659458/MviqVLEc_bigger.jpg',
            title: '琴之森 s2',
            link: 'http://piano-anime.jp/',
            words:['']
          },
          {
            day: 'w4',
            img: '../../img/2019-fuyu/五等分.jpg',
            title: '五等分の花嫁',
            link: 'http://www.tbs.co.jp/anime/5hanayome/',
            words:['松岡禎丞','花澤香菜','竹達彩奈','伊藤美来','佐倉綾音','水瀬いのり','内田彩']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/media/DvxS53hV4AE3E5J.jpg',
            title: '輝夜姬想讓人告白～天才們的戀愛頭腦戰～',
            link: 'http://kaguya.love/',
            words:['CHiCO']
          },
          {
            day: 'w3',
            img: 'https://hizaue.com/images/ogp.png',
            title: '同居人時而在腿上、時而跑到腦袋上',
            link: 'https://hizaue.com/',
            words:['南條愛乃']
          },
          {
            day: 'w1',
            img: 'https://pasumemotv.com/wp-content/themes/pasumemotv/assets/img/pasmemo_ogp.jpg',
            title: '粉彩回憶',
            link: 'https://pasumemotv.com/',
            words:['今井麻美']
          },
          {
            day: 'w5',
            img: 'http://www.domekano-anime.com/images/fb_image.png',
            title: '家有女友',
            link: 'http://www.domekano-anime.com/',
            words:['内田真礼','日笠陽子','美波']
          },
          {
            day: 'w5',
            img: 'http://date-a-live-anime.com/images/renewal/bnr/bnr01.jpg',
            title: 'DATE A LIVE s3',
            link: 'http://date-a-live-anime.com/',
            words:['']
          },
          {
            day: 'w0',
            img: 'http://miss-ueno.com/wp/wp-content/uploads/2018/10/1.jpg',
            title: '笨拙之極的上野',
            link: 'http://www.miss-ueno.com/',
            words:['芹澤優','伊藤美来']
          },
          {
            day: 'w0',
            img: '../../img/2019-fuyu/荒野.jpg',
            title: '荒野のコトブキ飛行隊',
            link: 'https://kotobuki-anime.com/',
            words:['水島努']
          },
          {
            day: 'w4',
            img: 'http://www.tbs.co.jp/anime/grimmsnotes/img/banner_gensaku_2.png',
            title: '格林筆記',
            link: 'http://www.tbs.co.jp/anime/grimmsnotes/',
            words:['']
          },
          {
            day: 'w4',
            img: 'http://dimension-hs.com/apple-touch-icon.png',
            title: '超次元高校',
            link: 'http://dimension-hs.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'https://pbs.twimg.com/profile_images/995267826058387456/hgSDbBQk_bigger.jpg',
            title: 'BanG Dream！ s2',
            link: 'https://anime.bang-dream.com/2nd/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://pbs.twimg.com/profile_images/1017426482186997760/fOaBunip_bigger.jpg',
            title: '路人超能 100 s2',
            link: 'http://mobpsycho100.com/',
            words:['']
          },
          {
            day: 'w5',
            img: 'http://magical-five.jp/assets/book/1.jpg',
            title: '魔法少女特殊戰明日香',
            link: 'http://magical-five.jp/',
            words:['']
          },
          {
            day: 'w6',
            img: '../../img/2019-fuyu/endro.png',
            title: 'えんどろ〜！',
            link: 'http://endro.jp/',
            words:['小澤亜李','水瀬いのり','麻倉もも','久野美咲']
          },
          {
            day: 'w5',
            img: '../../img/2019-fuyu/幻影.jpeg',
            title: '不吉波普不笑',
            link: 'http://boogiepop-anime.com/',
            words:['第4回電撃ゲーム小説大賞受賞','悠木碧','MYTH&ROID']
          },
          {
            day: 'w3',
            img: 'http://meikoi.com/assets/images/pc/tv-anime/header/header_logo.png',
            title: '明治東京戀伽',
            link: 'http://meikoi.com/tv-anime/',
            words:['']
          },
          {
            day: 'w5',
            img: 'https://bpro-anime.com/ogp.png',
            title: 'B-PROJECT～絕頂＊Emotion～',
            link: 'http://bpro-anime.com/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://colorful-pastrale.com/wp-content/themes/colorful-pastrale/img/og-image.jpg',
            title: 'Colorful Pastrale ~from Bermuda△~',
            link: 'https://colorful-pastrale.com/',
            words:['']
          },
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/media/DsmMpPIVYAI6ZUL.jpg',
            title: '狂賭之淵 xx',
            link: 'http://kakegurui-anime.com/',
            words:['']
          },
          {
            day: 'w3',
            img: 'http://shieldhero-anime.jp/assets/img/book/book_0_0.jpg',
            title: '盾之勇者成名錄',
            link: 'http://shieldhero-anime.jp/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://manaria.jp/assets/data/character_icon_01.png',
            title: '巴哈姆特之怒 -Manaria Friends-',
            link: 'http://manaria.jp/',
            words:['日笠陽子','水樹奈々']
          },
          {
            day: 'w4',
            img: 'http://gaf-anime.jp/img/books/novel_pic01.png',
            title: '飛翔吧！戰機少女',
            link: 'http://gaf-anime.jp/',
            words:['Lynn']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/1050594132459061250/npS6AKEX_bigger.jpg',
            title: '不愉快的妖怪庵 s2',
            link: 'http://mononokean.tv/',
            words:['']
          },
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/profile_images/1007276721169575937/9xuIPHh__bigger.jpg',
            title: '天使降臨到我身邊！',
            link: 'http://watatentv.com/',
            words:['上田麗奈','鬼頭明里']
          },
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/profile_images/1027449605905047552/tZoDeCFX_bigger.jpg',
            title: 'CIRCLET PRINCESS',
            link: 'http://cirpri-anime.jp/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/952853299534880769/F4le2vCB_bigger.jpg',
            title: '迷你 刀使巫女',
            link: 'http://minitoji.jp/',
            words:['']
          },
          {
            day: 'w4',
            img: 'http://fukushimagainax.co.jp/wp/wp-content/uploads/2018/07/IMG_0533-600x425.jpg',
            title: 'Flying Babies',
            link: 'https://hulaingbabies.com/',
            words:['佳村はるか','三森すずこ','伊藤美來']
          },
          {
            day: 'w0',
            img: 'https://papashita.cf-anime.com/wp-content/themes/papashita/img/character/s_naruse.png',
            title: 'パパだって、したい',
            link: 'https://papashita.cf-anime.com/',
            words:['']
          },
          {
            day: 'w3',
            img: 'https://pbs.twimg.com/profile_images/1075000760016883712/tB9f0Quy_400x400.jpg',
            title: 'バーチャルさんはみている',
            link: 'https://virtualsan-looking.jp/',
            words:['']
          },
          {
            day: '',
            img: 'https://pbs.twimg.com/profile_images/973424093453103105/EuQfVntZ_400x400.jpg',
            title: '嫌な顔されながらおパンツ見せてもらいたい s2',
            link: 'http://iyapan-anime.com/',
            words:['放送時間未知']
          },
          {
            day: 'w4',
            img: 'https://pbs.twimg.com/profile_images/1065483827064107010/VCLZEEyO_400x400.jpg',
            title: 'Fight League 交鋒聯盟',
            link: 'https://anime.fight-league.com/',
            words:['茅野愛衣','M・A・O','大橋彩香']
          }
        ],
        '2019-haru':[
          {
            day: 'w2',
            img: 'https://pbs.twimg.com/profile_images/876650666973839362/-VaXMbcx_400x400.jpg',
            title: '一拳超人s2',
            link: 'http://onepunchman-anime.net/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://shingeki.tv/news/wp-content/uploads/2019/03/69875f7ece1867f0f774d53e01deef5a-281x400.jpg',
            title: '進擊的巨人s3 part2',
            link: 'https://shingeki.tv/season3/',
            words:['4/28']
          },
          {
            day: 'w2',
            img: 'http://isekai-quartet.com/og-image.jpg',
            title: '異世界四重奏',
            link: 'http://isekai-quartet.com/',
            words:['']
          },
          {
            day: 'w5',
            img: 'http://bungo-stray-dogs.jp/news/news-contents/news-3rdseason-keyvisual/images/thumb.png',
            title: '文豪野犬s3',
            link: 'http://bungo-stray-dogs.jp/',
            words:['']
          },
          {
            day: 'w3',
            img: 'http://caroleandtuesday.com/core_sys/images/contents/00000033/base/l1.jpg',
            title: 'Carole & Tuesday',
            link: 'http://caroleandtuesday.com/',
            words:['BONES20周年','NETFLIX']
          },
          {
            day: 'w5',
            img: 'https://fruba.jp/assets/siteinfo/og_image.jpg',
            title: 'Fruits Basket',
            link: 'https://fruba.jp/',
            words:['石見舞菜香','釘宮理惠']
          },
          {
            day: 'w3',
            img: 'http://kenja-no-mago.jp/news/img/20190225_1/1.jpg',
            title: '賢者の孫',
            link: 'http://kenja-no-mago.jp/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://kimetsu.com/anime/assets/img/bnr_radio.jpg',
            title: '鬼滅の刃',
            link: 'https://kimetsu.com/anime/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://boku-ben.com/news/SYS/CONTENTS/2019022817524039438749/w496',
            title: '我們真的學不來！',
            link: 'https://boku-ben.com/',
            words:['']
          },
          {
            day: 'w5',
            img: 'http://hitoribocchi.jp/assets/other/stvd-wp/thumb.jpg',
            title: '一個人的○○小日子',
            link: 'http://hitoribocchi.jp/',
            words:['花田十輝','カツヲ']
          },
          {
            day: 'w0',
            img: 'http://nankoko-anime.com/wp/wp-content/themes/nankoko/img/op_anime.png',
            title: '為什麼老師會在這裡!?',
            link: 'http://nankoko-anime.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'http://sarazanmai.com/img/thumb-lyricmv.jpg',
            title: 'さらざんまい',
            link: 'http://sarazanmai.com/',
            words:['幾原邦彦']
          },
          {
            day: 'w5',
            img: 'http://senryu-girl-official.com/images/comics-image07.jpg',
            title: '川柳少女',
            link: 'http://senryu-girl-official.com/',
            words:['花澤香菜','久野美咲','矢作紗友里','上坂すみれ']
          },
          {
            day: 'w0',
            img: 'https://shoumetsutoshi-anime.com/special/img/thumb_op.jpg',
            title: '消滅都市',
            link: 'https://shoumetsutoshi-anime.com/',
            words:['花澤香菜']
          },
          {
            day: 'w2',
            img: 'http://yuno-anime.com/wp/wp-content/uploads/2019/03/YU-NO-ep01-0125-cap_0041-1024x576.jpg',
            title: '在世界盡頭詠唱愛的少女YU-NO',
            link: 'http://yuno-anime.com/',
            words:['']
          },
          {
            day: 'w6',
            img: 'http://www.konooto-anime.jp/img/music/inst1.jpg',
            title: '一弦定音！',
            link: 'http://www.konooto-anime.jp/',
            words:['']
          },
          {
            day: 'w3',
            img: 'http://senkosan.com/images/story-intro-fig.png',
            title: '賢惠幼妻仙狐小姐',
            link: 'http://senkosan.com/',
            words:['和氣あず未','内田真礼','佐倉綾音','動画工房']
          },
          {
            day: 'w2',
            img: 'https://diaace.com/images/banners/diaacefamily.jpg',
            title: '鑽石王牌s2',
            link: 'https://diaace.com/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://pbs.twimg.com/media/D1LoZb8UwAAGlCv?format=jpg&name=small',
            title: 'Fairy Gone',
            link: 'https://www.fairygone.com/',
            words:['(K)NoW_NAME']
          },
          {
            day: 'w5',
            img: 'http://aochan-anime.com/images/story-kv-character02.png',
            title: '淫らな青ちゃんは勉強ができない',
            link: 'http://aochan-anime.com/',
            words:['']
          },
          // {
          //   day: '',
          //   img: 'http://pipecat-kabukicho.jp/ogp.jpg',
          //   title: '歌舞伎町シャーロック',
          //   link: 'http://pipecat-kabukicho.jp/',
          //   words:['']
          // },
          {
            day: 'w2',
            img: 'http://w-witch.jp/501_takeoff/img/top/mainvisual_pc.jpg',
            title: '強襲魔女 501部隊出動！',
            link: 'http://w-witch.jp/501_takeoff/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/1072385563838291968/6M1rxfnp_400x400.jpg',
            title: '信長老師的幼妻',
            link: 'http://nobutsuma-anime.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'http://hangyakusei-anime.com/core_sys/images/banner/00000001.jpg',
            title: '叛逆性ミリオンアーサーs2',
            link: 'http://hangyakusei-anime.com/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/1087530080383848448/cePswUM__400x400.jpg',
            title: '女子高中生',
            link: 'http://joshikau-anime.com/',
            words:['立花理香']
          },
          {
            day: 'w6',
            img: 'https://www.ytv.co.jp/mix/sns.jpg',
            title: 'MIX MEISEI STORY',
            link: 'https://www.ytv.co.jp/mix/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://anime-hachinai.com/anime-assets/img/footer/app-icon.png',
            title: '八月的棒球甜心',
            link: 'https://anime-hachinai.com/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://pbs.twimg.com/profile_images/1095971107721494528/0yEbYDL4_400x400.jpg',
            title: 'RobiHachi',
            link: 'https://robihachi.jp/',
            words:['杉田智和']
          },
          {
            day: 'w4',
            img: 'https://www.tbs.co.jp/anime/BAKUMATSU/news/img/news20190218_01.png',
            title: 'BAKUMATSU ~恋愛幕末カレシ 外伝~',
            link: 'https://www.tbs.co.jp/anime/BAKUMATSU/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://namuami-utena-anime.com/wp-content/uploads/2019/02/namuami_header_1200_630_190226.jpg',
            title: 'なむあみだ仏っ! -蓮台 UTENA-',
            link: 'https://namuami-utena-anime.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'https://yatogame.nagoya/wp-content/themes/yatogame_theme/img/update_icon_01.jpg',
            title: '八十亀ちゃんかんさつにっき',
            link: 'https://yatogame.nagoya/',
            words:['戸松遥']
          },
          {
            day: 'w0',
            img: 'https://araiya.cf-anime.com/wp-content/themes/araiya/img/character/s_aoi.png',
            title: '洗い屋さん! ~俺とアイツが女湯で!?~',
            link: 'https://araiya.cf-anime.com/',
            words:['']
          },
          {
            day: 'w6',
            img: 'http://choukadou-anime.com/img/top_character_01_btn.png',
            title: '超可動ガール1/6',
            link: 'http://choukadou-anime.com/',
            words:['']
          },
          {
            day: 'w2',
            img: 'http://cingeki-anime.com/lib/images/logo.png',
            title: '灰姑娘女孩劇場s4',
            link: 'http://cingeki-anime.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'https://pbs.twimg.com/profile_images/991492866068307968/mfpurKSl_400x400.jpg',
            title: 'CARDFIGHT!! Vanguard s2',
            link: 'https://anime.cf-vanguard.com/',
            words:['愛美','南條愛乃']
          },
          {
            day: 'w4',
            img: 'https://pbs.twimg.com/profile_images/1067251795980836864/3R3-5FE3_400x400.jpg',
            title: '7Seeds',
            link: 'http://7seeds.jp/',
            words:['NETFLIX','6月播出']
          },
          {
            day: 'w6',
            img: 'https://pbs.twimg.com/profile_images/1078726632897110016/rzQnwM53_400x400.jpg',
            title: 'Miru Tights',
            link: 'https://mirutights.jp/',
            words:['5/11']
          },
          {
            day: '',
            img: 'https://pbs.twimg.com/media/DxKX-tGVYAE5dOY.jpg',
            title: '巨蟲列島',
            link: 'http://kyochu-retto.net/',
            words:['6/20']
          },
          {
            day: '',
            img: 'https://www.monogatari-series.com/zokuowarimonogatari/assets/img/music/img_kikan.jpg',
            title: '続・終物語',
            link: 'https://www.monogatari-series.com/zokuowarimonogatari/',
            words:['5/18全6集']
          },
          {
            day: 'w1',
            img: 'https://kinpri.com/assets/img/common/footer/bnr_kop1.jpg',
            title: 'KING OF PRISM -Shiny Seven Stars-',
            link: 'https://kinpri.com/',
            words:['']
          },
          {
            day: 'w0',
            img: 'http://gunjyo-magumeru.com/news/wp-content/uploads/2019/01/mg_reopen-300x135.jpg',
            title: '拾又之國',
            link: 'http://gunjyo-magumeru.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://hoshiiro.jp/ogp.png',
            title: 'POP TEAM EPIC tvsp',
            link: 'http://hoshiiro.jp/',
            words:['4/1','花澤香菜自爆']
          },
          {
            day: '',
            img: 'https://maerchen-anime.com/core_sys/images/contents/00000038/base/l3.jpg',
            title: '童話魔法使',
            link: 'https://maerchen-anime.com/',
            words:['4/25','11,12話']
          },
          {
            day: '',
            img: 'https://kotobuki-game.bn-ent.net/assets/images/character/2/v2/chara.png',
            title: '荒野のコトブキ飛行隊外伝　大空のハルカゼ飛行隊',
            link: 'https://kotobuki-anime.com/',
            words:['4/10','本渡楓','白石晴香','黒沢ともよ']
          }
        ],
        '2019-natsu':[
          {
            day: '',
            img: 'https://i.imgur.com/wlbXQhs.jpg',
            title: 'ダンまちⅡ',
            link: 'http://danmachi.com/danmachi2/',
            words:['']
          },
          {
            day: '',
            img: 'https://arifureta.com/wp-content/uploads/2018/12/arifureta_kv2_trimming-212x300.jpg',
            title: '平凡職業造就世界最強',
            link: 'https://arifureta.com/',
            words:['']
          },
          {
            day: '',
            img: 'https://dr-stone.jp/wp-content/themes/dr-stone_teaser/img/common/ogpimg.jpg',
            title: 'Ｄｒ．ＳＴＯＮＥ',
            link: 'https://dr-stone.jp/',
            words:['']
          },
          {
            day: 'w5',
            img: 'https://toaru-project.com/accelerator/core_sys/images/main/top/main_img_2.webp',
            title: 'とある科学の一方通行',
            link: 'https://toaru-project.com/accelerator/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://i.imgur.com/fwCPLKv.jpg',
            title: 'からかい上手の高木さんs2',
            link: 'http://takagi3.me/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://vinlandsaga.jp/assets/img/common/main-03.jpg',
            title: 'Vinland Saga',
            link: 'https://vinlandsaga.jp/',
            words:['']
          },
          {
            day: 'w6',
            img: 'https://anime.elmelloi.com/assets/img/ep0_01.jpg',
            title: 'ロード・エルメロイⅡ世の事件簿 -魔眼蒐集列車 Grace note-',
            link: 'https://anime.elmelloi.com/',
            words:['']
          },
          {
            day: 'w5',
            img: 'http://fireforce-anime.jp/images/special_list_gallery.jpg',
            title: '炎炎ノ消防隊',
            link: 'http://fireforce-anime.jp/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://i.ytimg.com/vi/4deqHYYzhwY/maxresdefault.jpg',
            title: 'あんさんぶるスターズ！ ',
            link: 'https://ensemblestars-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://isekai-cheat-magician.com/img/ogp.png',
            title: '異世界チート魔術師',
            link: 'http://isekai-cheat-magician.com/',
            words:['高橋李依','田中美海']
          },
          {
            day: 'w3',
            img: 'https://dumbbell-anime.jp/assets/comics/1.png',
            title: 'ダンベル何キロ持てる？',
            link: 'https://dumbbell-anime.jp/',
            words:['']
          },
          {
            day: '',
            img: 'https://okaasan-online.com/assets/img/special/thumb_present.jpg',
            title: '通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？',
            link: 'https://okaasan-online.com/',
            words:['茅野愛衣']
          },
          {
            day: '',
            img: 'https://hensuki.com/img/ogp.png',
            title: '可愛ければ変態でも好きになってくれますか？',
            link: 'https://hensuki.com/',
            words:['大橋彩香']
          },
          {
            day: '',
            img: 'http://maousama-anime.com/wp/wp-content/themes/maousama/assets/img/top/kv02.jpg',
            title: '魔王様、リトライ！',
            link: 'http://maousama-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://www.symphogear-xv.com/img/XVlogo.png',
            title: '戦姫絶唱シンフォギアXV ',
            link: 'http://www.symphogear-xv.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://tejina-senpai.jp/images/bg_onair.png',
            title: '手品先輩',
            link: 'http://tejina-senpai.jp/',
            words:['']
          },
          {
            day: '',
            img: 'http://www.nhg-anime.com/images/visual_main.jpg',
            title: 'ナカノヒトゲノム【実況中】',
            link: 'http://www.nhg-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://astra-anime.com/assets/news/kv1.jpg',
            title: '彼方のアストラ',
            link: 'http://astra-anime.com/',
            words:['']
          },
          {
            day: 'w4',
            img: 'http://uchinoko-anime.com/wp/wp-content/themes/uchinoko/assets/img/page/movie/pv_thumb02.jpg',
            title: '為了女兒，我說不定連魔王都能幹掉。',
            link: 'http://uchinoko-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://given-anime.com/special/wallpaper/1024x768.jpg',
            title: 'Given',
            link: 'http://given-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'https://i.imgur.com/y7nIeRv.jpg',
            title: '荒ぶる季節の乙女どもよ。',
            link: 'http://araoto-anime.com/',
            words:['岡田麿里','安済知佳','黒沢ともよ','麻倉もも','上坂すみれ']
          },
          {
            day: 'w1',
            img: 'https://i.imgur.com/6SaXqTe.jpg',
            title: 'COP CRAFT',
            link: 'http://copcraft.tv/',
            words:['賀東招二']
          },
          {
            day: '',
            img: 'https://katsu-kami.com/core_sys/images/contents/00000004/block/00000016/00000029.jpg',
            title: 'かつて神だった獣たちへ',
            link: 'https://katsu-kami.com/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://newbem.jp/wp/wp-content/themes/bem/assets/images/introduction_bg.jpg',
            title: 'BEM',
            link: 'https://newbem.jp/',
            words:['']
          },
          {
            day: 'w1',
            img: 'https://hstar-mu.com/core_sys/images/main/common/logo.png',
            title: '高校星歌劇',
            link: 'https://hstar-mu.com/',
            words:['']
          },
          {
            day: 'w5',
            img: 'http://granbelm.com/img/pc_kv.jpg',
            title: 'グランベルム',
            link: 'http://granbelm.com/',
            words:['']
          },
          {
            day: 'w1',
            img: 'http://wakanobu.com/img/goods/item/goods_02.png',
            title: '胡蝶綺 ~若き信長~',
            link: 'http://wakanobu.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://jyoshimuda.com/images/top/001/shoei/p_001.png',
            title: '女子高生の無駄づかい',
            link: 'http://jyoshimuda.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://sounandesuka.jp/images/ogp.png',
            title: 'ソウナンですか?',
            link: 'http://sounandesuka.jp/',
            words:['安野希世乃']
          },
          {
            day: '',
            img: 'https://www.ntv.co.jp/tryknights/images/ogp_anime.png',
            title: 'トライナイツ',
            link: 'https://www.ntv.co.jp/tryknights/',
            words:['']
          },
          {
            day: 'w4',
            img: 'https://www.tbs.co.jp/anime/machikado/img/ogp.png',
            title: '街角魔族',
            link: 'https://www.tbs.co.jp/anime/machikado/',
            words:['']
          },
          {
            day: '',
            img: 'https://www.tv-tokyo.co.jp/anime/yamishibai7/images/facebook_icon.jpg',
            title: '闇芝居s7',
            link: 'https://www.tv-tokyo.co.jp/anime/yamishibai7/',
            words:['']
          },
          {
            day: 'w0',
            img: 'https://rst-anime.com/special/img/thumb_pv_2.jpg',
            title: 'Re:ステージ! ドリームデイズ♪',
            link: 'https://rst-anime.com/',
            words:['']
          },
          {
            day: '',
            img: 'http://kengan.net/wp/wp-content/uploads/2019/04/main03.jpg',
            title: '拳願阿修羅',
            link: 'http://kengan.net/',
            words:['Netflix','7/31']
          },
          {
            day: '',
            img: 'http://nep-anime.tv/img/products/img_bd-boxImg.jpg',
            title: '超次元ゲイム ネプテューヌ ～ねぷのなつやすみ2019～',
            link: 'http://nep-anime.tv/',
            words:['OVA']
          }
        ]
      }
    ]
  },
  mounted: function() {
    this.theday ='w' + this._day().toLocaleString();
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
