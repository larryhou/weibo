jQuery("div[action-type='feed_list_item']").map(function() 
{
	var mid = $(this).attr('mid');
	jQuery.post('http://weibo.com/aj/mblog/del?ajwvr=6', 'mid=' + mid, function(data) 
	{
		data.mid = mid;
		console.log(JSON.stringify(data))
	})
})