$(function(){
	$('.loading').fadeOut()
	if($('#gp').length){
		var clink = window.location.href;
		$('#gp').attr('href','https://plus.google.com/share?url='+clink);
		$('#gp').html('<img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+">').end().click(function(){
			window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=360');
			return false;
		})
	}
})