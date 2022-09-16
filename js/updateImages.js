/**
 * This script is used to handle Image Updation in the Dashboard
 */

//server api
const API = "https://test-api-ruby.vercel.app/api/img";
//const API = "https://imagesetting.vercel.app/info/img";
//const API = "https://jlproject1.vercel.app/api/img";
function updateImg(imgID) {

  const image = images[imgID];
  var downloadURL =""; 
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
        downloadURL = m_downloadURL;
      });
    });
  console.log(downloadURL);
  firebase.database().ref("ImageInfomation/"+path).set({
     link:downloadURL
  })
}
(async function () {
  //saving the images
  for (let i = 1; i <= 6; i++) {
    document.getElementById("image" + i + "-preview").src =
      API + "?path=" + "image" + i;
  }
})();
