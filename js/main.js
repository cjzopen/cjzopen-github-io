$(function(){
	$('.loading').fadeOut()

	var googleShare = $('#gp');
	if(googleShare.length){
		var clink = window.location.href;
		googleShare.attr('href','https://plus.google.com/share?url='+clink);
		googleShare.html('<img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+" style="width:28px;vertical-align:bottom">')
		googleShare.on('click',function(){
			window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=360');
			return false;
		})
	}
})