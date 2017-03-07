// 头部a标签的hover效果
$('#header ul li a').hover(function(){
	  $(this).stop().animate({'margin-top':'-30px'},200)
	},function(){
	  $(this).stop().animate({'margin-top':'0px'},200)
})
// 规定每个屏的宽高
$('.screen').css({'width':window.innerWidth,'height':window.innerHeight});
// 除第一屏外都要有的padding
$('.screen:gt(1)>div').css('padding-top','67px');
// 生成server页面内容
for (let i = 0; i < serverdata.length; i++) {
	$('.server_ul').append(
		`<li>
			<div class="server_cont ${serverdata[i].className}">
				<div class="server_img">
					<img src="${serverdata[i].imgb}" alt="" class="sho"/>
					<img src="${serverdata[i].imgw}" alt="" class="hid"/>
				</div>
				<p>${serverdata[i].title}</p>
				<div class="server_intro">${serverdata[i].info}</div>
			</div>
			<div class="server_mask">
				<div class="server_mask_div"></div>
			</div>
			<img src="${serverdata[i].maskpic}" alt="" />
		</li>`
	)
}
// 第二屏li的hover效果
$('.server ul li').hover(function(){
    $(this).find('.server_mask').stop().animate({height:'100%'},'slow')
},function(){
    $(this).find('.server_mask').stop().animate({height:'0%'})
})
// 生成case页面内容
for (let i = 0; i < casedata.length; i++) {
	$('.case_ul_wrap').append(
		`<ul class="case_ul">
				<li>
						<a href="javascript:;">
								<div class="show">
										<img src="images/icons.png" alt="" />
								</div>
								<img src="${casedata[i].img}" alt="" />
								<div class="auto">
										<h4>${casedata[i].title}</h4>
										<span>${casedata[i].info}</span>
										<div class="auto_mask"></div>
								</div>
						</a>
				</li>
		</ul>`
	)
}
// 生成team页面内容
for (let i = 0; i < teamdata.length; i++) {
	$('#teach ul').append(
		`<li>
			<a href="javascript:;">
					<img src="${teamdata[i].img}" />
					<img src="${teamdata[i].imghover}" />
			</a>
			<div>
				<h4>${teamdata[i].job}</h4>
			</div>
		</li>`
	)
}
// 生成news页面内容
for (let i = 0; i < newsdata.length; i++) {
	$('.news-list').append(
		`<a href="javascript:;">
			<img src="${newsdata[i].img}" width="${newsdata[i].width}" height="${newsdata[i].height}" alt="${newsdata[i].alt}" />
			<div>
				<span> ${newsdata[i].date}/<sub>${newsdata[i].month}</sub></span>
				<p>${newsdata[i].info}</p>
			</div>
		</a>`
	)
}
// 生成cust页面内容
for (let i = 0; i < custdata.length/4; i++) {
	$('.v-show ul li:eq(0) div:eq(0)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
for (let i = custdata.length/4; i < custdata.length/2; i++) {
	$('.v-show ul li:eq(0) div:eq(1)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
for (let i = custdata.length/2; i < custdata.length*3/4; i++) {
	$('.v-show ul li:eq(1) div:eq(0)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
for (let i = custdata.length*3/4; i < custdata.length; i++) {
	$('.v-show ul li:eq(1) div:eq(0)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
for (let i = 0; i < custdata.length/4; i++) {
	$('.v-show ul li:eq(2) div:eq(0)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
for (let i = custdata.length/4; i < custdata.length/2; i++) {
	$('.v-show ul li:eq(2) div:eq(1)').append(
		`<span><img src="${custdata[i]}" alt="" /></span>`
	)
}
