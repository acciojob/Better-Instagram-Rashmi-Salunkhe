//your code here
// Get all draggable elements and the container
const draggables = document.querySelectorAll('.image');
const container = document.getElementById('parent');

// Add event listeners for dragstart, dragover, dragenter, and drop
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
});

container.addEventListener('dragover', dragOver);
container.addEventListener('dragenter', dragEnter);
container.addEventListener('drop', drop);

let draggedElement = null;

function dragStart(e) {
    draggedElement = this; // Store the dragged element
    setTimeout(() => {
        this.style.display = 'none'; // Hide the dragged element during drag
    }, 0);
}

function dragEnd(e) {
    setTimeout(() => {
        draggedElement.style.display = 'block'; // Show the dragged element after drag
        draggedElement = null;
    }, 0);
}

function dragOver(e) {
    e.preventDefault(); // Prevent default behavior to allow dropping
}

function dragEnter(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (draggedElement !== this && this.classList.contains('image')) {
        // Swap the content of the dragged element and the drop target
        const target = this;
        const targetHTML = target.innerHTML;
        target.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = targetHTML;
    }
}
