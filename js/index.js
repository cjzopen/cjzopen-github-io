$(function(){
    console.log('%c幹嘛偷看倫家','color:red;font-size:20px;');
    console.log('這是專門提供給開發人員的瀏覽器功能。你想變工程師嗎(大哭)')
	var $main = $('main');
    var gotTop =0;
    var gotRigth =0;
    var gotBottom =0;
    var gotLeft =0;
    var hhome = '';
    var htop = '';
    var hleft = '';
    var hright = '';
    var hbottom = '';
	$.ajax({
        type: "GET",
        // dataType: "script",
        url: '/str/home.html',
        beforeSend: function(){
            $main.fadeOut()
        }
    }).done(function(data){
        console.log('homepage loaded')
        hhome = data;
        $main.html(hhome)
    }).fail(function(jqXHR, status, errorThrown) {
        console.log('header load Error: ' + errorThrown)
        console.log('Status: ' + status)
        console.dir(jqXHR)
        var errMsg;
        if (jqXHR.status === 0) {
            errMsg = 'Not connect./n Verify Network.';
        } else if (jqXHR.status == 404) {
            errMsg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            errMsg = 'Internal Server Error [500].';
        } else if (status === 'parsererror') {
            errMsg = 'Requested JSON parse failed.';
        } else if (status === 'timeout') {
            errMsg = 'Time out error.';
        } else if (status === 'abort') {
            errMsg = 'Ajax request aborted.';
        } else {
            errMsg = 'Uncaught Error./n' + jqXHR.responseText;
        }
        $main.text(errMsg)
    }).always(function(){
        $main.fadeIn()
    });

	$(document).on('click','nav li',function(){
		var $this = $(this);
		if($this.not('.act').attr('id') == 'top'){
            if(!gotTop){
                $.ajax({
                  type: "GET",
                  // dataType: "script",
                  url: '/str/top.html',
                  beforeSend: function(){
                      $main.fadeOut()
                  }
                }).done(function(data){
                  gotTop = 1;
                  htop = data;
                  $main.html('<section class="container"></section>');
                  $main.find('section').html(htop).end().fadeIn();
                  ga('send', 'pageview', 'top');
                })
            }else{
                $main.html('<section class="container"></section>');
                $main.find('section').html(htop);
            }

		}else if($this.not('.act').attr('id') == 'right'){
            if(!gotTop){
                $.ajax({
                  type: "GET",
                  // dataType: "script",
                  url: '/str/right.html',
                  beforeSend: function(){
                      $main.fadeOut()
                  }
                }).done(function(data){
                  gotRight = 1;
                  hright = data;
                  $main.html('<section class="container"></section>');
                  $main.find('section').html(hright).end().fadeIn();
                  ga('send', 'pageview', 'right');
                })
            }else{
                $main.html('<section class="container"></section>');
                $main.find('section').html(hright);
            }

		}else if($this.not('.act').attr('id') == 'bottom'){
            if(!gotBottom){
                $.getScript( "/str/bottom.js",function(success){
                    gotBottom = 1;
                    ga('send', 'pageview', 'bottom');
                })
            }else{
                $main.html('<section class="container"></section>');
                $main.find('section').html(hcss);
            }
			
		}else if($this.not('.act').attr('id') == 'left'){
          if(!gotLeft){
              $.ajax({
                type: "GET",
                // dataType: "script",
                url: '/str/left.html',
                beforeSend: function(){
                    $main.fadeOut()
                }
              }).done(function(data){
                gotLeft = 1;
                hleft = data;
                $main.html('<section class="container"></section>');
                $main.find('section').html(hleft).end().fadeIn();
                ga('send', 'pageview', 'left');
              })
          }else{
              $main.html('<section class="container"></section>');
              $main.find('section').html(hleft);
          }

		}
        $this.siblings().fadeOut().end().addClass('act');
        $('footer').fadeIn();
	})
	$(document).on('click','nav li.act',function(){
		var $this = $(this);
		$main.html(hhome)
		$this.siblings().fadeIn().end().removeClass('act');
    $('footer').fadeOut();
	})
})