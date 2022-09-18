
function updateImg(imgID) {

  const image = images[imgID];
  const path = imgID;
  console.log(imgID);
  var storageRef = firebase.storage().ref();
  storageRef
    .child(path)
    .put(image)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      snapshot.ref.getDownloadURL().then(function (m_downloadURL)
      {
        console.log(m_downloadURL);
        firebase.database().ref("ImageInfomation/"+path).set({
          link:m_downloadURL
        })
      });
    });
  
}
(async function () {
  //saving the images
  var dbRef = firebase.database().ref("ImageInfomation");
 
  for (let i = 1; i <= 6; i++) {
    var path = "image"+i;
    dbRef.child(path).on("value", function(snapshot) {
      console.log(snapshot.val().link);
      document.getElementById("image" + i + "-preview").src =snapshot.val().link
    }, function (error) {
        console.log("Error: " + error.code);
    });
  
  }
  
})();
