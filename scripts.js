document.addEventListener('DOMContentLoaded', () => {
    // Case Status Form
    const caseStatusForm = document.getElementById('case-status-form');
    if (caseStatusForm) {
        caseStatusForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const caseId = document.getElementById('case-id').value;
            // Here you would normally fetch the case status from a server
            // For demonstration, we'll just display a static message
            const resultDiv = document.getElementById('case-status-result');
            resultDiv.innerHTML = `<p>Case ID <strong>${caseId}</strong> is currently under review.</p>`;
        });
    }

    // Complaint Form
    const complaintForm = document.getElementById('complaint-form');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const complaint = document.getElementById('complaint').value;
            // Here you would normally send the data to the server
            // For demonstration, we'll display a confirmation message
            const resultDiv = document.getElementById('complaint-result');
            resultDiv.innerHTML = `<p>Thank you, <strong>${name}</strong>. Your complaint has been submitted.</p>`;
            complaintForm.reset();
        });
    }

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const lawyer = document.getElementById('lawyer').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            // Here you would normally send the data to the server
            // For demonstration, we'll display a confirmation message
            const resultDiv = document.getElementById('booking-result');
            resultDiv.innerHTML = `<p>Thank you, <strong>${name}</strong>. Your appointment with <strong>${lawyer}</strong> on <strong>${date}</strong> at <strong>${time}</strong> has been booked.</p>`;
            bookingForm.reset();
        });
    }

    // Lawyer Directory Search
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const filter = e.target.value.toLowerCase();
            const lawyers = document.querySelectorAll('.lawyer');
            lawyers.forEach(lawyer => {
                const name = lawyer.querySelector('h3').textContent.toLowerCase();
                const specialization = lawyer.querySelector('p').textContent.toLowerCase();
                if (name.includes(filter) || specialization.includes(filter)) {
                    lawyer.style.display = '';
                } else {
                    lawyer.style.display = 'none';
                }
            });
        });
    }
});

// Function to handle booking consultations from Lawyer Directory
function bookConsultation(lawyerName) {
    alert(`You have chosen to book a consultation with ${lawyerName}. Please navigate to the "Book Advocate" page to complete your booking.`);
}



document.getElementById('complaint-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Example of form validation or handling
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const complaintType = document.getElementById('complaint-type').value;
    
    if (name && email && complaintType) {
        // Simulate form submission success
        document.getElementById('form-status').textContent = "Complaint submitted successfully!";
        document.getElementById('form-status').style.color = "green";
    } else {
        // Show error if validation fails
        document.getElementById('form-status').textContent = "Please fill in all required fields.";
        document.getElementById('form-status').style.color = "red";
    }
});
