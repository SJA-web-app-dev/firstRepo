//버튼의 class를 가져와서 버튼의 정보를 element variable에 저장
const element = document.getElementById("countUp");

//element 클릭 감지

element.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });