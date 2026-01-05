

const currentUser = getCurrentUser(); 


let navButtons = '';

if (currentUser) {
    
    navButtons = `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active fw-bold text-warning" href="#" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-user-circle"></i> ${currentUser.name}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">My Bookings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="logoutUser()">Logout</a></li>
            </ul>
        </li>
    `;
} else {
    
    navButtons = `
        <li class="nav-item ms-lg-3">
            <a class="btn btn-warning btn-sm text-dark fw-bold" href="login.html">Login / Signup</a>
        </li>
    `;
}


const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container">
        <a class="navbar-brand fw-bold text-warning" href="index.html"><i class="fas fa-paper-plane"></i> GhoomiGhoomi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li> <li class="nav-item"><a class="nav-link" href="destinations.html">Destinations</a></li>
                <li class="nav-item"><a class="nav-link" href="packages.html">Packages</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                ${navButtons}
            </ul>
        </div>
    </div>
</nav>
`;


const footerHTML = `
<footer class="bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-3">
                <h5 class="text-warning fw-bold">GhoomiGhoomi</h5>
                <p class="small">We make your travel dreams come true with affordable packages and premium service.</p>
            </div>
            <div class="col-md-4 mb-3">
                <h5 class="text-warning fw-bold">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="about.html" class="text-white text-decoration-none">About Us</a></li>
                    <li><a href="destinations.html" class="text-white text-decoration-none">Destinations</a></li>
                    <li><a href="contact.html" class="text-white text-decoration-none">Contact Support</a></li>
                </ul>
            </div>
            <div class="col-md-4 mb-3">
                <h5 class="text-warning fw-bold">Follow Us</h5>
                <div class="d-flex gap-3">
                    <a href="#" class="text-white"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="#" class="text-white"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
            </div>
        </div>
        <hr class="border-secondary">
        <div class="text-center">
            <p class="mb-0 small">© 2025 GhoomiGhoomi Travel. All rights reserved.</p>
        </div>
    </div>
</footer>
`;


document.body.insertAdjacentHTML('afterbegin', navbarHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);


const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');
for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("active");
        menuItem[i].classList.add("text-warning");
    }
}


function bookTrip(tripId) {
    const user = getCurrentUser();
    
    
    if (!user) {
        if(confirm("You must be logged in to book! Go to login page?")) {
            window.location.href = "login.html";
        }
        return;
    }

    
    const trip = tourData.find(t => t.id === tripId);

    if (trip) {
        
        let bookings = JSON.parse(localStorage.getItem("wanderlust_bookings")) || [];
        
        
        bookings.push({
            userEmail: user.email,
            tripTitle: trip.title,
            tripPrice: trip.price,
            date: new Date().toLocaleDateString()
        });
        
        localStorage.setItem("wanderlust_bookings", JSON.stringify(bookings));
        
        alert(`🎉 Success!\n\nYou have booked: ${trip.title}\nTotal: $${trip.price}\n\nA confirmation email has been sent to ${user.email}.`);
    } else {
        console.error("Trip ID not found:", tripId);
    }
}