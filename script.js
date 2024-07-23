const draggables = document.querySelectorAll('.image');
const container = document.getElementById('parent');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragover', handleDragOver);
    draggable.addEventListener('drop', handleDrop);
    draggable.addEventListener('dragenter', handleDragEnter);
    draggable.addEventListener('dragleave', handleDragLeave);
});

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    setTimeout(() => {
        this.style.opacity = '0.5';
    }, 0);
}

function handleDragEnd(e) {
    setTimeout(() => {
        draggedElement.style.opacity = '1';
        draggedElement = null;
    }, 0);
}

function handleDragOver(e) {
    e.preventDefault(); // Allow drop
}

function handleDragEnter(e) {
    e.preventDefault();
    this.style.border = '2px dashed #000';
}

function handleDragLeave(e) {
    this.style.border = '2px solid black';
}

function handleDrop(e) {
    e.preventDefault();
    this.style.border = '2px solid black';
    if (draggedElement !== this) {
        const tempHTML = this.innerHTML;
        this.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = tempHTML;
    }
    draggedElement.style.opacity = '1';
}
