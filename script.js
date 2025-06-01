document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userDoc = await db.collection("usernames").doc(username).get();
    if (!userDoc.exists) {
      document.getElementById("error").innerHTML = "Couldn't find your account";
      document.getElementById("password").style.border =  "1px solid #594413";
      document.getElementById("username").style.border =  "1px solid rgb(140, 31, 31)";
;

      return;
    }

    const email = userDoc.data().email;
    
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = "index.html";

  } catch (err) {
    document.getElementById("error").innerHTML = "Wrong password";
    document.getElementById("username").style.border =  "1px solid #594413";
    document.getElementById("password").style.border =  "1px solid rgb(140, 31, 31)";
  }
});