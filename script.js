let data;

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword("admin@myapp.local", password);
    if (data && data.available_status == "0") {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "block";
    } else {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "block";
      document.getElementById("unavailableui").style.display = "none";
    }
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

auth.onAuthStateChanged(async user => {
  if (!user) {
    if (data && data.available_status == "0") {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "block";
    } else {
      document.getElementById("loginui").style.display = "block";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "none";
      return;
    }
  }
  if (user) {
    if (data && data.available_status == "0") {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "block";
    } else {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "block";
      document.getElementById("unavailableui").style.display = "none";
      return;
    }
  }
});

db.collection("usernames").doc("admin").get()
  .then((doc) => {
    if (doc.exists) {
      data = doc.data();
      if (data && data.available_status == "0") {
        document.getElementById("loginui").style.display = "none";
        document.getElementById("indexui").style.display = "none";
        document.getElementById("unavailableui").style.display = "block";
      } else {
        document.getElementById("name-1").innerHTML = data && data.leaderboard_1_name;
        document.getElementById("number-1").innerHTML = data && data.leaderboard_1_number;
        document.getElementById("name-2").innerHTML = data && data.leaderboard_2_name;
        document.getElementById("number-2").innerHTML = data && data.leaderboard_2_number;
        document.getElementById("name-3").innerHTML = data && data.leaderboard_3_name;
        document.getElementById("number-3").innerHTML = data && data.leaderboard_3_number;
        document.getElementById("name-4").innerHTML = data && data.leaderboard_4_name;
        document.getElementById("number-4").innerHTML = data && data.leaderboard_4_number;
        document.getElementById("name-5").innerHTML = data && data.leaderboard_5_name;
        document.getElementById("number-5").innerHTML = data && data.leaderboard_5_number;
        document.getElementById("name-6").innerHTML = data && data.leaderboard_6_name;
        document.getElementById("number-6").innerHTML = data && data.leaderboard_6_number;
        document.getElementById("name-7").innerHTML = data && data.leaderboard_7_name;
        document.getElementById("number-7").innerHTML = data && data.leaderboard_7_number;
        document.getElementById("name-8").innerHTML = data && data.leaderboard_8_name;
        document.getElementById("number-8").innerHTML = data && data.leaderboard_8_number;
        document.getElementById("name-9").innerHTML = data && data.leaderboard_9_name;
        document.getElementById("number-9").innerHTML = data && data.leaderboard_9_number;
        document.getElementById("name-10").innerHTML = data && data.leaderboard_10_name;
        document.getElementById("number-10").innerHTML = data && data.leaderboard_10_number;
        document.getElementById("name-11").innerHTML = data && data.leaderboard_11_name;
        document.getElementById("number-11").innerHTML = data && data.leaderboard_11_number;
        document.getElementById("max").innerHTML = data && data.max;
        document.getElementById("max-number").innerHTML = data && data.max_number;
        document.getElementById("bad-data").innerHTML = data && data.bad_data;
        document.getElementById("bad-data-number").innerHTML = data && data.bad_data_number;
        document.getElementById("min").innerHTML = data && data.min;
        document.getElementById("min-number").innerHTML = data && data.min_number;
        document.getElementById("last-updated").innerHTML = data && data.last_updated;
      }
    }
  })