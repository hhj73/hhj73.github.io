function subject() {
    const subject = document.getElementById('input1').value;
    document.getElementById('result').innerText = subject;
}

function subject2(){
    const hour = document.getElementById('input2').value;
    day=10000/hour;
    document.getElementById('result2').innerText=day;
}
function doDisplay(){
    document.getElementById('hide').style.display = "block";
}
function modalOpen() {
    document.querySelector('.modal').style.display = 'block';
}
function modalClose() {
    document.querySelector('.modal').style.display = 'none';
}
function copyURL() {
    var url = window.location.href;  // 현재 페이지 URL
    navigator.clipboard.writeText(url).then(function() {
      alert('URL이 복사되었습니다.');
    });
  }
