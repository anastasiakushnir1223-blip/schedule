const texts=document.querySelectorAll('textarea');
texts.forEach(area=>{
    area.addEventListener('input',(event)=>{
    const card = event.target.closest('.d');
    const priority=card.querySelector('.priority');
    if (event.target.value.length>0){
        priority.style.display='block';
    }else{
        priority.style.display='none';
    }
})})

const btns= document.querySelectorAll('.btn-add');
btns.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        
        const card = event.target.closest('.d')
        const textArea = card.querySelector('#input');
        const added = card.querySelector('.added');
        const text = textArea.value;
        const option=card.querySelector('.priority');
        const prio=option.value;
        
        const sound=new Audio('clip.mp3');
        sound.currentTime=0;
        sound.play();


        if (text!=''){
            const li= document.createElement('li');
            li.textContent=text;
            li.classList.add('item',prio);
            const spanText = document.createElement('span');
            spanText.textContent = text;
            li.appendChild(spanText);

            added.appendChild(li);
            textArea.value='';
            option.style.display='none';

            const delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');
            delBtn.textContent = 'x';
            
            delBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(delBtn);
            added.appendChild(li);
            
            textArea.value = '';
            if (prioritySelect) {
                prioritySelect.style.display = 'none';
            }

            
        }
        

    
    })
})
