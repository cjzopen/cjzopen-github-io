var vue2 = new Vue({
  el: '#wrapper',
  data: {
    theday:'',
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
            day: 'w7',
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
            img: '../img/2018-aki/gridman.jpg',
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
            day: 'w7',
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
            day: 'w7',
            img: 'http://miss-ueno.com/wp/wp-content/uploads/2018/10/1.jpg',
            title: '笨拙之極的上野',
            link: 'http://www.miss-ueno.com/',
            words:['芹澤優','伊藤美来']
          },
          {
            day: 'w7',
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
            day: 'w7',
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
            day: 'w7',
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
            day: 'w1',
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
            day: '',
            img: 'https://pbs.twimg.com/profile_images/876650666973839362/-VaXMbcx_400x400.jpg',
            title: '一拳超人s2',
            link: 'http://onepunchman-anime.net/',
            words:['']
          },
        ]
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
    },
    select_day:function(anime_list='.animes'){
      let wDay = this.theday;
      let _list = $('.list');
      _list.find(anime_list).hide();
      _list.find('.'+wDay).fadeIn('200');
      gtag('config', 'UA-77969491-3', {
        'page_title' : '動畫新番表',
        'page_path': location.pathname+wDay
      });
    }
  }
});
vue2.reorder();
