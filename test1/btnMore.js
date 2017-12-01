//더보기 버튼
function more(){
  //페이지 파라미터를 1 증가시켜줌
  page++;
  // console.log(page);
  url = currentURL + '?pagesize='+pagesize+'' + '&page='+page+''
  getJSON(url,done);
}
var btnMore = document.getElementsByClassName("btn btn-default");
btnMore[0].addEventListener('click',more); //버튼에 이벤트 부여
