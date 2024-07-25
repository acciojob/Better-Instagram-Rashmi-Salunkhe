document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll('.image');
    let draggedElement = null;

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', handleDragStart);
        draggable.addEventListener('dragover', handleDragOver);
        draggable.addEventListener('drop', handleDrop);
        draggable.addEventListener('dragenter', handleDragEnter);
        draggable.addEventListener('dragleave', handleDragLeave);
        draggable.addEventListener('dragend', handleDragEnd);
    });

    function handleDragStart(e) {
        draggedElement = this;
        setTimeout(() => {
            this.style.opacity = '0.5';
        }, 0);
    }

    function handleDragEnd(e) {
        setTimeout(() => {
            this.style.opacity = '1';
            draggedElement = null;
        }, 0);
    }

    function handleDragOver(e) {
        e.preventDefault(); // Allow drop
    }

    function handleDragEnter(e) {
        e.preventDefault();
        if (this !== draggedElement) {
            this.style.border = '2px dashed #000';
        }
    }

    function handleDragLeave(e) {
        if (this !== draggedElement) {
            this.style.border = '2px solid black';
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        if (draggedElement !== this) {
            let tempHTML = this.innerHTML;
            let tempBG = this.style.backgroundImage;

            this.innerHTML = draggedElement.innerHTML;
            this.style.backgroundImage = draggedElement.style.backgroundImage;

            draggedElement.innerHTML = tempHTML;
            draggedElement.style.backgroundImage = tempBG;
        }
        this.style.border = '2px solid black';
        draggedElement.style.opacity = '1';
    }
});
