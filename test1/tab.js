//탭 메뉴 관련
//탭 선택
var tabMenu = document.getElementsByClassName("nav nav-tabs");
var children = tabMenu[0].getElementsByTagName("li");
for(var i=0; i<children.length; i++){
  children[i].addEventListener('click',function(){
    //첫 페이지를 보여주기 위해 초기화
    str = '';
    page = 1;

    //선택된 탭에 active 클래스 적용
    for(var j=0; j<children.length; j++){
      children[j].className="";
    }
    this.className = "active";

    //해당 탭에 해당하는 api 표시
    currentURL = arrURL[index(children, this)];
    url = currentURL + '?pagesize='+pagesize+'' + '&page='+page+'';
    // console.log(url);
    getJSON(url,done);
  });
}

//탭 인덱스 찾기
function index(arr, ele){
  for(var i=0; i<arr.length; i++) {
    if (arr[i] == ele) {
      // console.log(i);
      return i;
    }
  }
}
