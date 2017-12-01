var arrURL = ['http://1boon.kakao.com/ch/trending.json',
              'http://1boon.kakao.com/ch/issue.json',
              'http://1boon.kakao.com/ch/enter.json'];
var currentURL = arrURL[0];

var pagesize = 20;
var page = 1;

var url = currentURL + '?pagesize='+pagesize+'' + '&page='+page+'';

var list = document.getElementById('list');
var str = '';

getJSON(url,done);

function done(result){
  // console.log(result);
  for(var i = 0; i < result.data.length; i++){
    // data[].title  제목
    // data[].coverImage 이미지
    // data[].path 링크  ( http://1boon.kakao.com/{path} 로 링크 걸어주세요)
    // data[].totalView 조회수
    str += '<a class="element" href = "http://1boon.kakao.com/'+result.data[i].path+'">';
    str += '<div class="content">';
    str += '<img src = '+result.data[i].coverImage+'></src>';
    str += '<h4>'+result.data[i].title+'</h4>';
    str += '<p class="view">'+AddComma(result.data[i].totalView)+'명이 봤어요</p>';
    str += '</div>';
    str += '</a>';
  }
  list.innerHTML = str;
}

//천 단위마다 콤마(,)
function AddComma(data_value) {
  return Number(data_value).toLocaleString('en');
}
