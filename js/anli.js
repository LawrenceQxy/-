let num = 0
let data = data0;
createLi();
$(window).scroll(function () {
  let m = $('#container ul li').last().get(0).getBoundingClientRect().bottom;
  if (m < window.innerHeight) {
    num++;
    switch (num) {
      case 1:
        data = data1;
        createLi()
        break;
      case 2:
        data = data0;
        createLi()
        break;
      case 3:
        data = data1;
        createLi()
        break;
      case 4:
        data = data0;
        createLi()
        break;
    }
  }
})
function createLi () {
  for (let i = 0; i < data.length; i++) {
    $('#container ul').append(
      `<li>
      <a href="anliDetail.html" title="${data[i].title}">
          <div class="show">
              <img src="images/icons.png" alt="${data[i].title}" />
          </div>
          <img src="${data[i].img}" alt="${data[i].title}" />
          <div class="auto">
              <h4>${data[i].title}</h4>
              <span>${data[i].info}</span>
              <div class="auto_mask"></div>
          </div>
        </a>
      </li>`
    )
  }
}
