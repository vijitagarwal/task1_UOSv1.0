
const USERS_KEY = "wanderlust_users";
const SESSION_KEY = "wanderlust_current_user";


function registerUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (users.find(user => user.email === email)) {
        return { success: false, message: "Email already registered!" };
    }
    users.push({ name, email, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: "Account created! Please login." };
}


function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        return { success: true };
    } else {
        return { success: false, message: "Invalid email or password" };
    }
}


function logoutUser() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
}


function getCurrentUser() {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
}