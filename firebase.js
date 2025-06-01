auth.onAuthStateChanged(async user => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }
});

document.getElementById("logout").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
});

db.collection("usernames").doc("admin").get()
  .then((doc) => {
    if (doc.exists) {
      const data = doc.data();
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
      document.getElementById("max").innerHTML = data.max;
      document.getElementById("max-number").innerHTML = data.max_number;
      document.getElementById("bad-data").innerHTML = data.bad_data;
      document.getElementById("bad-data-number").innerHTML = data.bad_data_number;
      document.getElementById("bad-data-date").innerHTML = data.bad_data_date;





    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });