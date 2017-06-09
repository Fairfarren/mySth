var gbl = gbl || {};
//头部
gbl.header = '<div>header<a href="javascript:(0)" onclick="gbl.changeModle1(\'#/header/home1\',\'2\')">home1</a><a href="javascript:(0);" onclick="gbl.changeModle1(\'#/header/home2\',\'2\');">home2</a><div class="model2"></div></div><script>'+
	'$(document).ready(function(){'+
		'if(gbl.nowLocation.length > 3){return};'+
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
gbl.footer = '<div>footer<a href="javascript:(0)" onclick="gbl.changeModle1(\'#/header/home1\',\'2\',\'id=2&where=home\')">home1</a><a href="javascript:(0);" onclick="gbl.changeModle1(\'#/header/home2\',\'2\');">home2</a><a href="javascript:(0);" onclick="gbl.changeModle1(\'#/header/home2/home3\',\'3\');">home3</a></div>';

gbl.home1 = '<div>home1</div>';
gbl.home2 = '<div>home2<div class="model3"></div></div>';
gbl.home3 = '<div>home3</div>'

gbl.changeModle1 = function(loca,index,sear){
	//改变前
	if(loca == window.location.hash){
		if($('.model'+ index +'').children().length > 0){
			return;
		}
	};
	var theLastWindowHash = window.location.hash.split('/');
	//改变后
	window.location.hash = loca;
	gbl.nowLocation = loca.split('/');
	console.log(gbl.nowLocation);
	for(var i=1;i<gbl.nowLocation.length;i++){
		if(gbl.nowLocation[i] != theLastWindowHash[i]){
			console.log(gbl.nowLocation[i] +'!='+ theLastWindowHash[i]);
			var goToHash = gbl.nowLocation.slice(0,i+1).join('/');
			console.log('拼接'+goToHash);
			console.log('index='+i);
			gbl.hashModelFC(i,sear);
		}else{
			gbl.hashModelFC(index,sear);
		}
	}


	// gbl.hashModelFC(index);
	
	console.log("zhixing");

}
gbl.hashModelFC = function(index,sear){
	// gbl.nowLocation = loca.split('/');

	if(!gbl[gbl.nowLocation[index]]){
		alert('更新了');
		window.location.hash = '#/header';
		location.reload([true]);
		return;
	}
	$('.model'+ index +'').children().remove();
	$('.model'+ index +'').append(gbl[gbl.nowLocation[index]]);
	if(sear){
		window.location.search = sear;
	}
	console.log('nowSearch='+window.location.search);
}






