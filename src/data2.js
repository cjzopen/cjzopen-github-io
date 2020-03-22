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
    querySeason:'default',
    items:[
      {
        season:[''],
        day: '',
        img: 'https://cjzopen.github.io/anime/img/og.jpg',
        title: '次元交錯',
        link: 'https://www.facebook.com/japaneseanimeshare/',
        words:['粉絲團宣傳']
      },
      {
        season:['2019-10'],
        day: 'w6',
        img: 'https://i.imgur.com/rV7TBeF.jpg',
        title: '我的英雄學院 4th',
        link: 'https://heroaca.com/',
        words:['']
      },
      {
        season:['2019-04','2019-10','2020-04'],
        day: 'w6',
        img: 'https://i.imgur.com/RKuH9x6.jpg',
        title: 'SAO Alicization - War of Underworld',
        link: 'https://sao-alicization.net/',
        words:['4/25']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/VrssBRT.jpg',
        title: '食戟のソーマ 神ノ皿',
        link: 'http://shokugekinosoma.com/4thplate/?lang=ja',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w4',
        img: 'https://i.imgur.com/IqyOwoX.jpg',
        title: 'PSYCHO-PASS 3',
        link: 'https://psycho-pass.com/3rd/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://www.tv-tokyo.co.jp/anime/7-taizai/images/bnr/bnr_official.png',
        title: '七つの大罪 神々の逆鱗',
        link: 'https://www.tv-tokyo.co.jp/anime/7-taizai/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w6',
        img: 'https://anime.fate-go.jp/ep7-tv/assets/img/story/00/img_05.jpg',
        title: 'FGO -絶対魔獣戦線バビロニア-',
        link: 'https://anime.fate-go.jp/ep7-tv/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w2',
        img: 'https://www.ntv.co.jp/chihayafuru/_nuxt/img/ee2916a.jpg',
        title: '花牌情緣3',
        link: 'https://www.ntv.co.jp/chihayafuru/',
        words:['']
      },
      {
        season:['2019-04','2019-10'],
        day: 'w6',
        img: 'https://i.imgur.com/8M7VBz8.png',
        title: 'ぼくたちは勉強ができない！',
        link: 'https://boku-ben.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/ZUvJiCz.jpg',
        title: '高分少女II',
        link: 'http://hi-score-girl.com/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/vg9RhQz.jpg',
        title: '歌舞伎町シャーロック',
        link: 'http://pipecat-kabukicho.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://anime.granbluefantasy.jp/1st/news/SYS/CONTENTS/2019011511215993948775/w500',
        title: '碧藍幻想 s2',
        link: 'https://anime.granbluefantasy.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://i.imgur.com/inRYAZS.jpg',
        title: '慎重勇者~この勇者が俺TUEEEくせに慎重すぎる~',
        link: 'http://shincho-yusha.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w4',
        img: 'https://m.imageimg.net/upload/artist_img/ASSSP/5ac2a0cd77668228b788397bcb7684f039caa222_5d6e839b9a20e.jpg',
        title: '刺客守則',
        link: 'https://assassinspride-anime.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w4',
        img: 'https://azurlane-anime.jp/images/ogp2.png',
        title: '碧藍航線',
        link: 'https://azurlane-anime.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w6',
        img: 'https://i.imgur.com/BlBiTW4.jpg',
        title: 'この音とまれ！ s2',
        link: 'http://www.konooto-anime.jp/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w3',
        img: 'https://www.nhk.or.jp/anime/radiant/assets/images/art/popup.png',
        title: 'Radiant s2',
        link: 'https://www.nhk.or.jp/anime/radiant/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://ore.ski/_assets/siteinfo/og_image.jpg',
        title: '俺を好きなのはお前だけかよ',
        link: 'https://ore.ski/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://i.imgur.com/1omi7YB.jpg',
        title: 'あひるの空',
        link: 'http://ahirunosora.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://i.imgur.com/tdoaX9w.png',
        title: 'BEASTARS',
        link: 'https://bst-anime.com/',
        words:['NETFLIX','漫畫大賞2018第1名']
      },
      {
        season:['2019-04','2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/k6z8RLm.png',
        title: 'Fairy Gone',
        link: 'https://www.fairygone.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w1',
        img: 'https://babylon-anime.com/img/common/ogp2.jpg',
        title: 'バビロン',
        link: 'https://babylon-anime.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w4',
        img: 'https://i.imgur.com/2t5LVoi.png',
        title: '超人高校生たちは異世界でも余裕で生き抜くようです！',
        link: 'http://choyoyu.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w1',
        img: 'https://img.imageimg.net/artist/noukin-anime/img/news_thumbnail_image_1076010.jpg',
        title: '私、能力は平均値でって言ったよね!',
        link: 'https://noukin-anime.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://i.imgur.com/A8nqfte.jpg',
        title: '旗揚！けものみち',
        link: 'http://hataage-kemonomichi.com/',
        words:['']
      },
      {
        season:['2019-10','2020-04'],
        day: 'w4',
        img: 'https://i.imgur.com/8x5Yz09.jpg',
        title: 'No Guns Life',
        link: 'http://nogunslife.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w4',
        img: 'https://i.imgur.com/42VitIZ.png',
        title: '星合の空',
        link: 'http://www.tbs.co.jp/anime/hoshiai/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w1',
        img: 'https://i.imgur.com/bgjP1WB.jpg',
        title: 'pet',
        link: 'https://pet-anime.com/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w6',
        img: 'https://i.imgur.com/sKQ0CMS.jpg',
        title: '入間同學入魔了！',
        link: 'http://www6.nhk.or.jp/anime/program/detail.html?i=iruma',
        words:['']
      },
      {
        season:['2019-10','2020-04'],
        day: 'w3',
        img: 'https://i.imgur.com/eG22EW6.gif',
        title: '本好きの下剋上',
        link: 'http://booklove-anime.jp/',
        words:['這本輕小說真厲害2018,2019第1名']
      },
      {
        season:['2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/sG8vzni.jpg',
        title: '警視庁 特務部 特殊凶悪犯対策室 第七課 -トクナナ-',
        link: 'http://www.tokunana.jp/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: 'w1',
        img: 'https://i.imgur.com/bxhuJLZ.jpg',
        title: 'Phantasy Star Online 2: Episode Oracle',
        link: 'http://pso2.jp/anime_eporacle/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w3',
        img: 'https://i.imgur.com/CTITrhR.jpg',
        title: '放課後さいころ倶楽部',
        link: 'http://saikoro-club.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w1',
        img: 'https://i.imgur.com/7gEzqu9.jpg',
        title: 'Stand My Heroes PIECE OF TRUTH',
        link: 'https://www.standmyheroes.tv/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w2',
        img: 'https://i.imgur.com/pFDrT97.png',
        title: 'Z/X Code Reunion',
        link: 'https://www.zxtcg.com/animation/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w6',
        img: 'https://i.imgur.com/3dLLtI2.png',
        title: '戦×恋',
        link: 'https://val-love.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/yQShsAB.jpg',
        title: 'Rifle is Beautiful',
        link: 'https://chidori-high-school.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/l2P4jiC.jpg',
        title: '厨病激発ボーイ',
        link: 'http://chubyou.net/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/Y4Jn89D.jpg',
        title: 'ACTORS -Songs Connection-',
        link: 'https://actors-anime.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/qIjHmt7.jpg',
        title: 'アフリカのサラリーマン',
        link: 'http://afusara.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/g8cLHfP.png',
        title: 'ぬるぺた ',
        link: 'https://nullpeta.com/',
        words:['上田麗奈','和氣あず未']
      },
      {
        season:['2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/fvFEgBP.jpg',
        title: '真・中華一番！',
        link: 'http://cookingmaster-anime.jp/',
        words:['']
      },
      {
        season:['2019-10'],
        day: 'w2',
        img: 'https://i.imgur.com/1BIOSO6.jpg',
        title: '神田川JET GIRLS',
        link: 'http://kjganime.com/',
        words:['']
      },
      {
        season:['2019-10'],
        day: '',
        img: 'https://yuruyuri.com/miniyuri/img/ogp.jpg',
        title: 'みにゆり',
        link: 'https://yuruyuri.com/miniyuri/',
        words:['9/25','youtube']
      },
      {
        season:['2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/ikVoSTR.png',
        title: '天華百剣 ～めいじ館へようこそ！～',
        link: 'https://tenkahyakken.jp/special/anime/',
        words:['']
      },
      {
        season:['2019-07','2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/WBwtqtg.jpg',
        title: 'Ｄｒ．ＳＴＯＮＥ',
        link: 'https://dr-stone.jp/',
        words:['']
      },
      {
        season:['2019-07','2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/k777xpT.jpg',
        title: '炎炎ノ消防隊',
        link: 'http://fireforce-anime.jp/',
        words:['']
      },
      {
        season:['2019-07','2019-10'],
        day: 'w0',
        img: 'https://i.imgur.com/rZ2O2fq.jpg',
        title: '海盜戰記',
        link: 'https://vinlandsaga.jp/',
        words:['']
      },
      {
        season:['2019-07','2019-10','2020-01'],
        day: 'w2',
        img: 'https://i.imgur.com/u8jZRcd.jpg',
        title: '鑽石王牌Act II',
        link: 'https://diaace.com/',
        words:['']
      },
      {
        season:['2019-10','2020-01'],
        day: '',
        img: 'https://i.imgur.com/RSv1BGv.jpg',
        title: 'OBSOLETE',
        link: 'https://project-obsolete.com/',
        words:['虚淵玄','12月youtube配信']
      },
      {
        season:['2019-10'],
        day: '',
        img: 'https://i.imgur.com/NTWIpX9.jpg',
        title: 'Levius',
        link: 'http://levius.net/',
        words:['Netflix','11/28']
      },
      {
        season:['2019-10'],
        day: '',
        img: 'https://i.imgur.com/xjFuEsk.jpg',
        title: '嫌な顔されながらおパンツ見せてもらいたい２',
        link: 'http://iyapan-anime.com/',
        words:['11/22','ニコニコチャンネル']
      },
      {
        season:['2019-07','2019-10'],
        day: 'w5',
        img: 'https://i.imgur.com/bqvlLu8.jpg',
        title: '少女☆寸劇 オールスタァライト',
        link: 'https://revuestarlight.bushimo.jp/allstar/',
        words:['手遊、Youtube放送']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://i.imgur.com/hE7SCpE.jpg',
        title: '八十亀ちゃんかんさつにっき 2期',
        link: 'https://yatogame.nagoya/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w6',
        img: 'https://i.imgur.com/FeXCk91.jpg',
        title: '異種族レビュアーズ',
        link: 'https://isyuzoku.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w2',
        img: 'https://i.imgur.com/YFCXql6.jpg',
        title: '異世界かるてっと2',
        link: 'http://isekai-quartet.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w3',
        img: 'https://i.imgur.com/OdMZynd.jpg',
        title: '痛いのは嫌なので防御力に極振りしたいと思います。',
        link: '',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://i.imgur.com/zZGVMqy.jpg',
        title: 'ID:INVADED',
        link: 'https://id-invaded-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/N7lwieW.jpg',
        title: 'Infinite Dendrogram',
        link: 'https://dendro-anime.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/wGQAv2k.jpg',
        title: 'うちタマ?! ～うちのタマ知りませんか？～',
        link: 'https://uchitama.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://i.imgur.com/6XUbfXo.jpg',
        title: '映像研には手を出すな！',
        link: 'http://eizouken-anime.com/',
        words:['湯浅政明']
      },
      {
        season:['2020-01'],
        day: 'w1',
        img: 'https://i.imgur.com/wj36wue.jpg',
        title: 'ARP Backstage Pass',
        link: 'http://arp-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w1',
        img: 'https://www.a3-animation.jp/images/ogp.png',
        title: 'A3!',
        link: 'https://www.a3-animation.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://overflow.cf-anime.com/wp-content/themes/overflow/img/kv_pc.png',
        title: 'おーばーふろぉ',
        link: 'https://overflow.cf-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/F8j3Chn.jpg',
        title: '推しが武道館いってくれたら死ぬ',
        link: 'https://oshibudo.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://shinamon-nobunaga.com/images/ogp3.png',
        title: '織田シナモン信長',
        link: 'https://shinamon-nobunaga.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w6',
        img: 'https://i.imgur.com/UBKIL43.png',
        title: '虚構推理',
        link: 'https://kyokousuiri.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w3',
        img: 'https://i.imgur.com/UNcCkbY.jpg',
        title: '空挺Dragons',
        link: 'https://drifting-dragons.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/pZIJGag.jpg',
        title: '恋する小惑星',
        link: 'http://koiastv.com/',
        words:['芳文社','動画工房']
      },
      {
        season:['2020-01'],
        day: '',
        img: 'https://i.imgur.com/8BkCzq9.jpg',
        title: '斉木楠雄のΨ難 Ψ始動編',
        link: 'https://www.saikikusuo.com/',
        words:['Netflix']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/eTCruRh.jpg',
        title: '地縛少年花子くん',
        link: 'https://www.tbs.co.jp/anime/hanakokun/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/DDMbKVO.jpg',
        title: 'SHOW BY ROCK!!ましゅまいれっしゅ!!',
        link: 'https://showbyrock-anime-m.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/Vx9h9tR.png',
        title: 'ソマリと森の神様',
        link: 'https://somali-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/hriX24T.jpg',
        title: '達爾文遊戲',
        link: 'https://darwins-game.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/wnevcH0.jpg',
        title: 'とある科学の超電磁砲T',
        link: 'https://toaru-project.com/railgun_t/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://i.imgur.com/coGwddi.jpg',
        title: '異獸魔都',
        link: 'https://dorohedoro.net/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w6',
        img: 'https://i.imgur.com/JOyPBax.jpg',
        title: '22/7',
        link: 'https://227anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w3',
        img: 'https://i.imgur.com/ijBomgR.jpg',
        title: 'number24',
        link: 'https://number24-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/tnGGg9T.jpg',
        title: 'ネコぱら',
        link: 'https://nekopara-anime.com',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/Bxpl3qk.jpg',
        title: 'ハイキュー!! TO THE TOP',
        link: 'https://haikyu.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/Ca5pSnl.jpg',
        title: 'はてな☆イリュージョン',
        link: 'https://hatenaillusion-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w2',
        img: 'https://i.imgur.com/sHi0Ll9.jpg',
        title: 'BanG Dream! 3rd Season',
        link: 'https://anime.bang-dream.com/3rd/',
        words:['台灣週二放送']
      },
      {
        season:['2020-01','2020-04'],
        day: 'w3',
        img: 'https://i.imgur.com/5YKACWO.jpg',
        title: '掠奪者',
        link: 'http://plunderer-info.com/',
        words:['水無月すう']
      },
      {
        season:['2020-01'],
        day: 'w1',
        img: 'https://yurucamp.jp/heyacamp/images/ogp.jpg',
        title: 'へやキャン△',
        link: 'https://yurucamp.jp/heyacamp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w4',
        img: 'https://i.imgur.com/WwZYDTo.jpg',
        title: '宝石商リチャード氏の謎鑑定',
        link: 'https://jeweler-richard.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://bokuhaka-anime.com/images/sb_fbsum.jpg',
        title: 'ぼくのとなりに暗黒破壊神がいます。',
        link: 'https://bokuhaka-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w6',
        img: 'https://i.imgur.com/KXEUtJe.jpg',
        title: '魔法紀錄 魔法少女小圓外傳',
        link: 'https://anime.magireco.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w2',
        img: 'https://i.imgur.com/lmFdkC0.jpg',
        title: '魔術士歐菲',
        link: 'http://ssorphen-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w1',
        img: 'https://i.imgur.com/1zTIHuK.jpg',
        title: '群れなせ！シートン学園',
        link: 'https://anime-seton.jp/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/QvAeUlS.png',
        title: '請在伸展台上微笑',
        link: 'https://runway-anime.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w5',
        img: 'https://i.imgur.com/1Ukj3Oe.png',
        title: '理系が恋に落ちたので証明してみた。',
        link: 'https://rikekoi.com/',
        words:['']
      },
      {
        season:['2020-01'],
        day: 'w0',
        img: 'https://rebirth-fy.com/wordpress/wp-content/themes/rebirth/image/anime/kv.png',
        title: 'りばあす',
        link: 'https://rebirth-fy.com/anime/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w4',
        img: 'https://i.imgur.com/ARhMTlW.jpg',
        title: 'やはり俺の青春ラブコメはまちがっている。完',
        link: 'https://www.tbs.co.jp/anime/oregairu/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w6',
        img: 'https://i.imgur.com/V4vumHX.jpg',
        title: 'かぐや様は告らせたい？',
        link: 'https://kaguya.love/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w5',
        img: 'https://i.imgur.com/vBAV5ZV.jpg',
        title: '食戟のソーマ 豪ノ皿',
        link: 'http://shokugekinosoma.com/5thplate/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w1',
        img: 'https://fruba.jp/assets/img/top/ph_mainvisual.jpg',
        title: 'フルーツバスケット s2',
        link: 'https://fruba.jp/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w2',
        img: 'https://i.imgur.com/plmQuL5.jpg',
        title: 'Gleipnir',
        link: 'http://gleipnir-anime.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w3',
        img: 'https://i.imgur.com/2OJfAKi.jpg',
        title: 'BNA',
        link: 'https://bna-anime.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w6',
        img: 'https://i.imgur.com/d9gc6CQ.jpg',
        title: '乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…',
        link: 'https://hamehura-anime.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w6',
        img: 'https://i.imgur.com/c2mhD18.jpg',
        title: '昨日之歌',
        link: 'https://singyesterday.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w1',
        img: 'https://i.imgur.com/1F4rEQ0.jpg',
        title: '超異域公主連結 Re:Dive',
        link: 'https://anime.priconne-redive.jp/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w4',
        img: 'https://i.imgur.com/IrhGnl1.jpg',
        title: '隱瞞之事',
        link: 'https://kakushigoto-anime.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: '',
        img: 'https://ore.ski/_assets/siteinfo/og_image.jpg',
        title: '俺を好きなのはお前だけかよ',
        link: 'https://ore.ski/',
        words:['OVA','5/23']
      },
      {
        season:['2020-04'],
        day: '',
        img: 'https://i.imgur.com/bUjAjkj.jpg',
        title: 'Strike the Blood IV',
        link: 'http://www.strike-the-blood.com/fourth/',
        words:['OVA']
      },
      {
        season:['2020-04'],
        day: 'w5',
        img: 'https://i.imgur.com/FtgvROq.jpg',
        title: '天晴爛漫！',
        link: 'http://appareranman.com/',
        words:['']
      },
      {
        season:['2020-04'],
        day: 'w0',
        img: 'https://i.imgur.com/AORDfgV.jpg',
        title: '継つぐもも',
        link: 'http://tsugumomo.com/',
        words:['']
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
    seasons_select:function(){
      var temp_array=[];
      var temp_item=this.items;
      temp_array=temp_item[0].season;
      for(key in temp_item){
        for(var i=0;i<temp_item.length;i++){
          if(temp_item[key].season[i] !== undefined){
            temp_array.push(temp_item[key].season[i]);
          }
        }
      }
      var all_season = Array.from(new Set(temp_array)).reverse();
      all_season.sort(function (a, b) {
        return b.replace('-', '') - a.replace('-', '')
      });

      for (let s of all_season){
        $('#seasons').append('<option value="'+s+'">'+s+'</option>');
      }
      // $('#seasons').on('change',function(){
      //   let v= $(this).val();
      //   document.location.href='./?se='+v;
      // })
    },
    seasonChange(event) {
      this.querySeason = event.target.value;
      $('.lazyloaded').attr('src','');
      $('.lazyloaded').removeClass('lazyloaded').addClass('lazyload');
      history.replaceState({se:this.querySeason}, '', '?se='+this.querySeason);
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
// vue2.reorder();
vue2.seasons_select();
