document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword("admin@myapp.local", password);
    window.location.href = "index.html";
  } catch (err) {
    if (err.code == "auth/too-many-requests") {
      document.getElementById("error").innerHTML = "Too Many Requests";
    }
    else {
      document.getElementById("error").innerHTML = "Invalid Access Code";
    }
    document.getElementById("password").style.border =  "1px solid rgb(140, 31, 31)";
  }
});