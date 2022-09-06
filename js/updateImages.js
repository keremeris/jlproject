/**
 * This script is used to handle Image Updation in the Dashboard
 */

//server api
const API = "https://imagesetting.vercel.app/api/img";
const API_info = "https://imagesetting.vercel.app/info/img";
function updateImg(imgID) {
  const image = images[imgID];

  const path = imgID;
  var storageRef = firebase.storage().ref();
  storageRef
    .child(path)
    .put(image)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log(path, downloadURL);
        //saving the image link in the next js mongodb
        fetch(API + "/", {
          method: "POST",
          body: JSON.stringify({
            path,
            link: downloadURL,
          }),
        }).then((res) => console.log(res.body));
      });
    });
}
function updateImg_info(imgID) {
  const image = images[imgID];

  const path = imgID;
  var storageRef = firebase.storage().ref();
  storageRef
    .child(path)
    .put(image)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log(path, downloadURL);
        //saving the image link in the next js mongodb
        fetch(API_info + "/", {
          method: "POST",
          body: JSON.stringify({
            path,
            link: downloadURL,
          }),
        }).then((res) => console.log(res.body));
      });
    });
}

(async function () {
  //saving the images
  for (let i = 1; i <= 6; i++) {
    document.getElementById("image" + i + "-preview").src =
      API + "?path=" + "image" + i;
  }
})();
