
$(document).ready(function(){

	$(function() {
		$( "#tabs" ).tabs();
	});
	
	$.getJSON("timeline.json")
	.done(function(data) {
		MakeMsg(data, "#tabs-1");
	}).fail(function(){
		alert("No se han podido cargar los mensajes");
	});


	$.getJSON("update.json")
	.done(function(data) {
		var newmessages = data.length;
		$("#mn").html(" tienes "+ newmessages + " mensajes nuevos");
		$("#boton").click(function(){
			if (newmessages != 0){
				MakeMsg(data, "#tabs-1");
				newmessages = 0;
				$("#mn").html(" tienes "+ newmessages + " mensajes nuevos");
			}else{
				alert("no tiene mensajes nuevos por leer");
			}
		});
	}).fail(function(){
		alert("No se han podido cargar los mensajes nuevos");
	});
	
	
	$.getJSON("myline.json").done(function(data) {
		MakeMsg(data, "#tabs-2");
	}).fail(function(){
		alert("No se han podido cargar los mensajes");
	});

	function MakeMsg(data, tab){
	
	for(var i=0 ; i < data.length;i+=1){
	$(tab+" .comment-list").prepend('<article class = "'+i+'" class="row"><div class="col-md-2 col-sm-2 hidden-xs"><figure class="thumbnail">' +'<img class="img-responsive" src="'+ data[i].avatar + '"/><figcaption class="text-center">'+data[i].autor+ '</figcaption> </figure></div><div class="col-md-10 col-sm-10"><div class="panel panel-default arrow left"> <div class="panel-body">'+
               '<header class="text-left"><div class="comment-user"><i class="fa fa-user"></i>'+data[i].titulo+ '</div><time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> '+data[i].fecha+'</time></header><div class="comment-post"><p>'+
                    data[i].contenido+'</p></div><p class="text-right"><a id="'+i+'" class="btn btn-default btn-sm"><i class="fa fa-reply"></i> leer mas </a></p>'+' </div></div></div></article>');
	$("."+(i)+" .comment-post").hide();
	$(tab+" #"+i).click(function(event){
		console.log(tab+" ."+this.id+" .comment-post");
		$(tab+" ."+this.id+" .comment-post").show();
		
	});
	};
	};

	
});


