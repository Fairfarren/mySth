var gbl = gbl || {};
//头部
gbl.header = '<div>header<a href="#/header/home1" onclick="gbl.changeModle1(\'#/header/home1\',\'2\')">home1</a><a href="#/header/home2" onclick="gbl.changeModle1(\'#/header/home2\',\'2\');">home2</a><div class="model2"></div></div><script>'+
	'$(document).ready(function(){'+
		'var locationHash = window.location.hash.split("/").splice(0,3);'+
		'if(locationHash.length>=3){'+
			'var locationHashArr = locationHash.join(\'/\');'+
			'gbl.changeModle1(locationHashArr,"2");'+
		'}else{'+
			'gbl.changeModle1("#/header/home1","2");'+
		'}'+
	'})'+
'</script>';
//尾部
gbl.footer = '<div>footer</div>';

gbl.home1 = '<div>home1</div>';
gbl.home2 = '<div>home2</div>';

gbl.changeModle1 = function(loca,index){
	//改变前
	if(loca == window.location.hash){
		if($('.model'+ index +'').children().length > 0){
			return;
		}
	};
	//改变后
	gbl.nowLocation = loca.split('/');
	if(!gbl[gbl.nowLocation[index]]){
		window.location.hash = '#/header';
		location.reload([true]);
		return;
	}
	$('.model'+ index +'').children().remove();
	$('.model'+ index +'').append(gbl[gbl.nowLocation[index]]);
	console.log(gbl.nowLocation);
	console.log("zhixing");
}






