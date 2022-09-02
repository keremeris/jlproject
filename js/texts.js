const API = "https://imagesetting.vercel.app/api/txtfile";
// const API = "http://localhost:3000/api/txtfile";

(function () {
  fetch(API).then(async (res) => {
    obj = (await res.json()).texts;
    obj = JSON.parse(obj);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      document.getElementById(keys[i]).innerHTML = obj[keys[i]];
    }
  });
})();

(function () {
  const btns = [...document.getElementsByClassName("updatetextbtn")];
  btns.forEach((btn) => {
    btn.onclick = function () {
      const obj = {};
      for (let i = 1; i <= 6; i++) {
        obj["text-" + i] = document.getElementById("text-" + i).value;
      }
      console.log(JSON.stringify(obj));
      fetch(API, {
        method: "POST",
        body: JSON.stringify({ texts: JSON.stringify(obj) }),
      });
    };
  });
})();
