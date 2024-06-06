
document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', () => {
        const toast = button.closest('.toast');
        const toastBody = toast.querySelector('.toast-body');
        toastBody.textContent = 'Closed!';
        setTimeout(() => {
            toast.classList.remove('show');
            toast.setAttribute('aria-hidden', true);
        }, 500);
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        
        const toast = document.createElement('div');
        toast.classList.add('toast', 'position-fixed', 'bottom-0', 'end-0', 'm-3', 'toast', 'fade');
        toast.id = 'liveToast';

        
        const toastHeader = document.createElement('div');
        toastHeader.classList.add('toast-header');

        
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.dataset.bsDismiss = 'toast';
        closeButton.setAttribute('aria-label', 'Close');

        
        toastHeader.appendChild(closeButton);

        // Toast body
        const toastBody = document.createElement('div');
        toastBody.classList.add('toast-body');

        
        toastBody.textContent = 'Action performed';

       
        toastHeader.appendChild(toastBody);

        
        toast.appendChild(toastHeader);

        
        document.body.appendChild(toast);

        
        setTimeout(() => {
            var bsToast = new bootstrap.Toast(toast);
            bsToast.show();
        }, 1000);
    });
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this); 
    console.log('Form submitted:', Object.fromEntries(formData)); 

    // Here we can send the form data to a server using AJAX or similar methods as a new feature
});


function showModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
  }
  
 
  document.querySelector('.btn-learn-more').addEventListener('click', () => {
    showModal('learnMoreModal'); 
  });
  
  document.querySelector('.btn-donate-now').addEventListener('click', () => {
    showModal('donateNowModal'); 
  });

  document.querySelector('.btn-learn-more').addEventListener('click', () => {
    showModal('learnMoreModal'); 
});
  
document.querySelector('.btn-donate-now').addEventListener('click', () => {
    showModal('donateNowModal'); 
});

// New event listeners for the "Learn More" buttons on the Features and Get Involved pages

// Assuming you have already initialized your modals as shown previously
/* var featuresModal = new bootstrap.Modal(document.getElementById('featuresModal'));
var involvedModal = new bootstrap.Modal(document.getElementById('involvedModal'));

// Attach event listener to the "Learn More" button on the Features page
document.getElementById('learnMoreFeaturesBtn').addEventListener('click', () => {
    featuresModal.show();
});

// Attach event listener to the "Learn More" button on the Get Involved page
document.getElementById('learnMoreInvolvedBtn').addEventListener('click', () => {
    involvedModal.show();
}); */



  

