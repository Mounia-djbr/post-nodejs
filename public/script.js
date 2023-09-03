document.addEventListener('DOMContentLoaded', () => {
    const commentButton = document.querySelector('.comment-button');
    const commentInput = document.querySelector('.comment-input');
    const commentsContainer = document.querySelector('.comments');
  
    commentButton.addEventListener('click', () => {
      const commentText = commentInput.value;
      if (commentText.trim() === '') {
        return;
      }
  
      const comment = createCommentElement(commentText);
      commentsContainer.appendChild(comment);
  
      // Clear the input field
      commentInput.value = '';
    });
  
    // Delete comment
    commentsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
      }
    });
  });
  
  function createCommentElement(text) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
  
    const commentText = document.createElement('span');
    commentText.className = 'comment-text';
    commentText.textContent = text;
  
    const deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
  
    commentElement.appendChild(commentText);
    commentElement.appendChild(deleteButton);
  
    return commentElement;
  }
  