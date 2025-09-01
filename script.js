document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword("admin@myapp.local", password);

    const doc = await db.collection("usernames").doc("admin").get();
    if (!doc.exists) throw new Error("Admin document not found");
    const data = doc.data();

    if (data.available_status === "0") {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "block";
      document.body.style.background = "white";
    } else {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "block";
      document.body.style.background = "linear-gradient(to bottom, #594413 50%, white 50%)";
      document.getElementById("unavailableui").style.display = "none";
      document.getElementById("name-1").innerHTML = data.leaderboard_1_name;
      document.getElementById("number-1").innerHTML = data.leaderboard_1_number;
      document.getElementById("name-2").innerHTML = data.leaderboard_2_name;
      document.getElementById("number-2").innerHTML = data.leaderboard_2_number;
      document.getElementById("name-3").innerHTML = data.leaderboard_3_name;
      document.getElementById("number-3").innerHTML = data.leaderboard_3_number;
      document.getElementById("name-4").innerHTML = data.leaderboard_4_name;
      document.getElementById("number-4").innerHTML = data.leaderboard_4_number;
      document.getElementById("name-5").innerHTML = data.leaderboard_5_name;
      document.getElementById("number-5").innerHTML = data.leaderboard_5_number;
      document.getElementById("name-6").innerHTML = data.leaderboard_6_name;
      document.getElementById("number-6").innerHTML = data.leaderboard_6_number;
      document.getElementById("name-7").innerHTML = data.leaderboard_7_name;
      document.getElementById("number-7").innerHTML = data.leaderboard_7_number;
      document.getElementById("name-8").innerHTML = data.leaderboard_8_name;
      document.getElementById("number-8").innerHTML = data.leaderboard_8_number;
      document.getElementById("name-9").innerHTML = data.leaderboard_9_name;
      document.getElementById("number-9").innerHTML = data.leaderboard_9_number;
      document.getElementById("name-10").innerHTML = data.leaderboard_10_name;
      document.getElementById("number-10").innerHTML = data.leaderboard_10_number;
      document.getElementById("name-11").innerHTML = data.leaderboard_11_name;
      document.getElementById("number-11").innerHTML = data.leaderboard_11_number;
      document.getElementById("max").innerHTML = data.max;
      document.getElementById("max-number").innerHTML = data.max_number;
      document.getElementById("bad-data").innerHTML = data.bad_data;
      document.getElementById("bad-data-number").innerHTML = data.bad_data_number;
      document.getElementById("min").innerHTML = data.min;
      document.getElementById("min-number").innerHTML = data.min_number;
      document.getElementById("last-updated").innerHTML = data.last_updated;
    }

  } catch (err) {
    if (err.code === "auth/too-many-requests") {
      document.getElementById("error").innerHTML = "Too Many Requests";
    } else if ((err.code === "auth/wrong-password") || (err.code === "auth/invalid-credential")) {
      document.getElementById("error").innerHTML = "Invalid Access Code";
    } else {
      console.error(err);
      document.getElementById("error").innerHTML = "Unexpected error.";
    }
    document.getElementById("password").style.border = "1px solid rgb(140, 31, 31)";
  }
});

auth.onAuthStateChanged(async user => {
  if (!user) {
    document.getElementById("loginui").style.display = "block";
    document.getElementById("indexui").style.display = "none";
    document.getElementById("unavailableui").style.display = "none";
    return;
  }

  try {
    const doc = await db.collection("usernames").doc("admin").get();
    if (!doc.exists) throw new Error("Admin document not found");
    const data = doc.data();

    if (data.available_status === "0") {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "none";
      document.getElementById("unavailableui").style.display = "block";
      document.body.style.background = "white";
    } else {
      document.getElementById("loginui").style.display = "none";
      document.getElementById("indexui").style.display = "block";
      document.body.style.background = "linear-gradient(to bottom, #594413 50%, white 50%)";
      document.getElementById("unavailableui").style.display = "none";
      document.getElementById("name-1").innerHTML = data.leaderboard_1_name;
      document.getElementById("number-1").innerHTML = data.leaderboard_1_number;
      document.getElementById("name-2").innerHTML = data.leaderboard_2_name;
      document.getElementById("number-2").innerHTML = data.leaderboard_2_number;
      document.getElementById("name-3").innerHTML = data.leaderboard_3_name;
      document.getElementById("number-3").innerHTML = data.leaderboard_3_number;
      document.getElementById("name-4").innerHTML = data.leaderboard_4_name;
      document.getElementById("number-4").innerHTML = data.leaderboard_4_number;
      document.getElementById("name-5").innerHTML = data.leaderboard_5_name;
      document.getElementById("number-5").innerHTML = data.leaderboard_5_number;
      document.getElementById("name-6").innerHTML = data.leaderboard_6_name;
      document.getElementById("number-6").innerHTML = data.leaderboard_6_number;
      document.getElementById("name-7").innerHTML = data.leaderboard_7_name;
      document.getElementById("number-7").innerHTML = data.leaderboard_7_number;
      document.getElementById("name-8").innerHTML = data.leaderboard_8_name;
      document.getElementById("number-8").innerHTML = data.leaderboard_8_number;
      document.getElementById("name-9").innerHTML = data.leaderboard_9_name;
      document.getElementById("number-9").innerHTML = data.leaderboard_9_number;
      document.getElementById("name-10").innerHTML = data.leaderboard_10_name;
      document.getElementById("number-10").innerHTML = data.leaderboard_10_number;
      document.getElementById("name-11").innerHTML = data.leaderboard_11_name;
      document.getElementById("number-11").innerHTML = data.leaderboard_11_number;
      document.getElementById("max").innerHTML = data.max;
      document.getElementById("max-number").innerHTML = data.max_number;
      document.getElementById("bad-data").innerHTML = data.bad_data;
      document.getElementById("bad-data-number").innerHTML = data.bad_data_number;
      document.getElementById("min").innerHTML = data.min;
      document.getElementById("min-number").innerHTML = data.min_number;
      document.getElementById("last-updated").innerHTML = data.last_updated;
    }
  } catch (err) {
    console.error("Error fetching Firestore data after login:", err);
  }
});