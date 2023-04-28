<script>
      const myBtn = document.getElementById('btn');
      myBtn.addEventListener('click', function() {
        alert('Clicked!');
      });
</script>


const contents = document.getElementsByClassName('content');
for (let i = 0; i < contents.length; i++) {
    contents[i].style.color = 'red';
}

const idElement = document.getElementById('id');
idElement.textContent = '새로운 내용';


const listItem = document.querySelector('.list-item');
listItem.style.textDecoration = 'line-through';


const pp = document.querySelectorAll('.pp');
for (let i = 0; i < pp.length; i++) {
    pp[i].style.color = 'blue';
}

const id99ListItems = document.querySelectorAll("#id99");
        for (let i = 0; i < id99ListItems.length; i++) {
            id99ListItems[i].style.color = "purple";
        }
const id100ListItems = document.querySelectorAll("#id100");
        for (let i = 0; i < id100ListItems.length; i++) {
            id100ListItems[i].style.fontsize = "24px";
        }




