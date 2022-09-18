(function () {
  var dbRef = firebase.database().ref("Iteration");
  dbRef.on("value", function(snapshot) {
    console.log(snapshot.val().link);
    document.getElementById(snapshot.val().iteration).checked = true;
    //document.getElementById("image_info-preview").src = snapshot.val().link;
  }, function (error) {
      console.log("Error: " + error.code);
  });
})();

function updateiteration() {
  const value = document.querySelector('input[name="iteration"]:checked').id;
  var dbRef = firebase.database().ref("Iteration");
  dbRef.set({
    iteration:value  
  })
}
