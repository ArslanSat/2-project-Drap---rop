// 1 =========================================

const item = document.querySelector('.item');
// console.log(item);

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    // console.log('drag start');
    // console.log('drag start', event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);  
}

function dragend(event) {
    // console.log('drag end');
// 1 ver
    // event.target.classList.remove('hold');
    // event.target.classList.remove('hide');
// 2ver
    // event.target.classList.remove('hold', 'hide')
// 3 ver
    event.target.className = 'item'
}
//  2 =================================================

const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    // console.log(placeholder);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
};


function dragover(event){
    // console.log('drag over');
    event.preventDefault();
}

function dragenter(event){
    // console.log('drag enter');
    event.target.classList.add('hovered');
}

function dragleave(event){
    // console.log('drag leave');
    event.target.classList.remove('hovered');
}

function dragdrop(event){
    // console.log('drag drop');
    event.target.append(item);
    event.target.classList.remove('hovered');
}