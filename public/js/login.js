// initializeUsers()

// async function initializeUsers() {
// const password=await hashPassword("bobby");
// localStorage.setItem("users", JSON.stringify([ 
//     {
//         name:"bob",
//         email:"bob@gamil,com",
//         password:password
//     }
// ])); // Initialize users array if not present
// }

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}


async function registerUser() {
    debugger;
    const fnameInput=document.getElementById("fnameInput").value;
    const lnameInput=document.getElementById("lnameInput").value;
    const emailInput=document.getElementById("emailInput").value;
    const passwordInput=document.getElementById("passwordInput").value;
    const confirmPasswordInput=document.getElementById("confirmPasswordInput").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  if (users.some(u => u.email === emailInput)) {
    alert("Email already registered!");
    return;
  }

  if(passwordInput !== confirmPasswordInput){
    alert('Passwords do not match');
    return;
  }
  const hashed = await hashPassword(passwordInput);
  users.push({ name:fnameInput +' '+ lnameInput, email: emailInput, password: hashed });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  showLogin(true);
}

async function loginUser() {

  const userinput = document.getElementById("userinput")
  const passwordinput = document.getElementById("passwordinput")
  const email = userinput.value;
  const password = passwordinput.value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const hashed = await hashPassword(password);
  const user = users.find(u => u.email === email && u.password === hashed);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Welcome back, ${user.name}!`);
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}

function showLogin(show){
    const loginForm=document.getElementById("login-section");
    const registerForm=document.getElementById("register-section");

    if(show){
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    }
    else{
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}
