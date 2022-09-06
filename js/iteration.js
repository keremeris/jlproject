//const API = "https://imagesetting.vercel.app/api/txtfile";
const API = "https://jlproject1.vercel.app/api/txtfile";
// const API = "http://localhost:3000/api/txtfile";

(function () {
  fetch(API).then(async (res) => {
    let id = (await res.json()).iteration;
    console.log(id);
    document.getElementById(id).checked = true;
  });
})();

function updateiteration() {
  const value = document.querySelector('input[name="iteration"]:checked').id;
  fetch(API, {
    method: "POST",
    body: JSON.stringify({ iteration: value }),
  }).then(() => {
    alert("Updated Successfully");
  });
}
