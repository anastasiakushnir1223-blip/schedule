function saveTasks() {
    localStorage.setItem('savedCards', document.querySelector('.cards').innerHTML);
}

if (localStorage.getItem('savedCards')) {
    document.querySelector('.cards').innerHTML = localStorage.getItem('savedCards');
}

const texts = document.querySelectorAll('textarea');
texts.forEach(area => {
    area.addEventListener('input', (event) => {
        const card = event.target.closest('.d');
        const priority = card.querySelector('.priority');
        if (event.target.value.length > 0) {
            priority.style.display = 'block';
        } else {
            priority.style.display = 'none';
        }
    });
});

const btns = document.querySelectorAll('.btn-add');
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const card = event.target.closest('.d');
        const textArea = card.querySelector('textarea');
        const added = card.querySelector('.added');
        const text = textArea.value.trim();
        const option = card.querySelector('.priority');
        const prio = option ? option.value : '';

        const sound = new Audio('clip.mp3');
        sound.currentTime = 0;
        sound.play();

        if (text !== '') {
            const li = document.createElement('li');
            li.classList.add('item', prio);

            const spanText = document.createElement('span');
            spanText.textContent = text;
            li.appendChild(spanText);

            const delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');
            delBtn.textContent = 'x';
            li.appendChild(delBtn);

            added.appendChild(li);

            textArea.value = '';
            if (option) {
                option.style.display = 'none';
            }

            saveTasks();
        }
    });
});

document.querySelector('.cards').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('li').remove();
        saveTasks();
    }
});

const back=document.querySelector('.back');
const forward=document.querySelector('.forward');
back.addEventListener('click',()=>{

});
back.addEventListener('click',()=>{
    
});