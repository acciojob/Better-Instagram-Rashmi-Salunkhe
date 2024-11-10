 let draggedImage = null;  // Global variable to hold the dragged image element

  // Function to allow dropping
  function allowDrop(event) {
      event.preventDefault(); // Necessary to allow a drop
  }
  
  // Function to handle drag event
  function drag(event) {
      draggedImage = event.target; // Set the dragged image to the current element
  }
  
  // Function to handle drop event
  function drop(event) {
      event.preventDefault(); // Prevent default behavior
  
      const targetContainer = event.currentTarget; // Container where the image is dropped
  
      // Ensure that the target container doesn't contain the dragged image already
      if (targetContainer !== draggedImage.parentElement) {
          // Get the target image (if any) within the container
          const targetImage = targetContainer.querySelector('img');
  
          // Swap the images if there is a target image
          if (targetImage) {
              // Swap the src attribute of the dragged image and target image
              const tempSrc = targetImage.src;
              targetImage.src = draggedImage.src;
              draggedImage.src = tempSrc;
          } else {
              // If the target container is empty, move the dragged image to the new container
              targetContainer.appendChild(draggedImage);
          }
      }
  }
