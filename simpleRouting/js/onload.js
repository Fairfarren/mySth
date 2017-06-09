var GG = GG || {};
GG.workTrends = function(){
	//工作动态
	var list = [];
		var page = 0;
		var listPage = [];
		$.ajax({
			url:'list.json',
			dataType:'json',
			success:function(data){
				list = data.list;
				howMcuhPage(list, 18);
			},
			error:function(err){
				console.log(err);
			}
		})
		var howMcuhPage = function(data, pageNum){
			page = Math.ceil(data.length / pageNum );
			for(var i=0;i<page;i++){
				var nullArr = [];
				listPage.push(nullArr);
				for(var l=0;l<pageNum;l++){
					listPage[i].push(data[(i*pageNum)+l]);
				}
			}
			console.log(listPage);
			nowPages(page, 1);
		}
		var nowPages = function(pageNum, nowNumber){
			$('.workTrendsList').children().remove();
			$('.workTrendsPagesNumber').children().remove();
			var clickWho = nowNumber;
			nowNumber -= 1;
			if(nowNumber < 1){
				nowNumber = 1;
			}
			for(var i=0;i<3;i++){
				if(nowNumber > page){
					if((page - 2) < 1){
						break;
					}
					$('.clickPages').eq(0).before('<li class="clickPages">'+ (page-2) +'</li>');
					break;
				}

				$('.workTrendsPagesNumber').append('<li class="clickPages" title='+ nowNumber +'>'+ nowNumber++ +'</li>');
			}
			nowNumber -= 3;
			// console.log(nowNumber);
			if(nowNumber > 1){
				$('.clickPages').eq(0).before('<li>...</li>');
			}
			if(nowNumber < page - 2){
				$('.clickPages').eq(2).after('<li>...</li>');
			}
			$('.clickPages[title='+ clickWho +']').addClass('clickPagesColor');
			//加数据
			for(var i=0;i<listPage[clickWho-1].length;i++){
				if(listPage[clickWho-1][i]){
					$('.workTrendsList').append('<li>'+
						'<a href="javascript:gbl.changeModle(\'#/newsNewsDetail\',1,\'id=2&where=workTrends\')">'+ listPage[clickWho-1][i].text +'</a>'+
						'<span>'+ listPage[clickWho-1][i].time +'</span>'+
					'</li>');
					if(i == 5 || i == 11){
						$('.workTrendsList').append('<hr>')
					}
				}
			}
			$('.clickPages').on('click',function(){
				var nowNumber = $(this).text();
				nowPages(page, nowNumber);
			})
		}
		$('.workTrendsFirst').on('click',function(){
			nowPages(page, 1);
		})
		$('.workTrendsLast').on('click',function(){
			nowPages(page, page);
		})
};
$(document).ready(function(){
	
})