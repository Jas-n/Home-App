var calendar={
	init:function(){
		this.render();
	},
	render:function(){
		this.get_schedule();
	},
	get_schedule:function(){
		home.ajax('calendar','get_schedule',this.got_schedule);
	},
	got_schedule:function(json){
		if(json.status){
			var data=json.data;
			var event={};
			$('.schedule .loading').remove();
			if(data.count){
				for(var i=0;i<data.rows.length;i++){
					event=data.rows[i];
					$('.schedule').append(`<div class="list-group-item event">
						<h3>`+php.formatted_date(event.start)+` <small class="text-muted">`+event.name+`</small></h3>
						<div class="description">`+event.description+`</div>
					</div>`);
				}
			}
		}
	}
};