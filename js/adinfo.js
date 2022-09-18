
const API = "https://lexustestapp.herokuapp.com/api/img";
function updateImg_info(imgID) {
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
function updateHead()
{
    const obj = document.getElementById("adinfo_head").value;
    console.log(obj);
    var dbRef = firebase.database().ref("AdditionalInfomation");
    dbRef.child("head").set({
        content:obj  
    })
}
function updateContent()
{
    const obj = document.getElementById("adinfo_content").value;
    console.log(obj);
    var dbRef = firebase.database().ref("AdditionalInfomation");
    dbRef.child("content").set({
        content:obj  
    })
}
(async function () {
  //saving the images
  var dbRef = firebase.database().ref("ImageInfomation");
  dbRef.child("image_info").on("value", function(snapshot) {
    console.log(snapshot.val().link);
    document.getElementById("image_info-preview").src = snapshot.val().link;
 }, function (error) {
    console.log("Error: " + error.code);
 });
  
})();
