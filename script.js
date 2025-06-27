document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword("admin@myapp.local", password);
    window.location.href = "index.html";
  } catch (err) {
    if (err.code == "auth/too-many-requests") {
      document.getElementById("error").innerHTML = "Too many requests";
    }
    else {
      document.getElementById("error").innerHTML = "Wrong password";
    }
    document.getElementById("password").style.border =  "1px solid rgb(140, 31, 31)";
  }
});