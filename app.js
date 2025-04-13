let ul = document.querySelector('ul');
let btn = document.querySelector('button');
let icon2 = document.querySelector('.icon-2');
let icon1 = document.querySelector('.icon-1');
let input1 = document.querySelector('input');
let commentInput = document.querySelector('.comment-input');
let plus = document.querySelector('.purple-1');
plus.addEventListener('click', () => {
    flag = !flag;
    commentInput.style.display = flag ? 'flex' : 'none';
    if (flag) input1.focus();
});
let flag = false;
commentInput.style.display = 'flex';
btn.addEventListener('click', () => {

    let text = input1.value.trim();
    if (text !== '') {
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        ul.style.gap = '20px';
        let li = document.createElement('li')
        li.innerHTML = `  <div>${text}</div>
                        <div><i class="fa-solid fa-xmark "></i></div>
                    `
        li.classList.add('box-li');
        let deleteIcon = li.querySelector('i');
        deleteIcon.addEventListener('click', () => {
            li.remove();
            if (ul.querySelectorAll('li').length === 0) {
                ul.style.display = 'none';

            }
        });
        ul.appendChild(li);
        input1.value = '';
        flag = false;
        commentInput.style.display = 'none';
    }


});
icon2.addEventListener('click', () => {
    input1.value = '';
});
icon1.addEventListener('click', () => {
    let icon = icon1.querySelector('i');
    icon.classList.toggle('fa-arrow-down-short-wide');
    icon.classList.toggle('fa-arrow-up-short-wide');
    let listItems = [...ul.querySelectorAll('li')];
    let sortText = icon.classList.contains('fa-arrow-down-short-wide') ? false : true;
    listItems.sort((a, b) => {
        let textA = a.querySelector('div').innerText.toLowerCase();
        let textB = b.querySelector('div').innerText.toLowerCase();
        return sortText ? textA.localeCompare(textB) : textB.localeCompare(textA);
    })
    listItems.forEach(li => ul.removeChild(li));
    listItems.forEach(li => ul.appendChild(li));
});