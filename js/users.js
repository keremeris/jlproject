function createuser() {
  const username = document.getElementById("new_user_name").value;
  const password = document.getElementById("new_user_pass").value;
  firebase
    .firestore()
    .collection("users")
    .add({ username, password })
    .then((e) => {
      console.log(e);
      document.getElementById("myModal").style.display = "block";
    });
}

(function () {
  const createUserElem = (name) => {
    const elem = document.createElement("div");
    elem.className = "user";
    elem.innerHTML = name;
    return elem;
  };
  const ref = firebase.firestore().collection("users");
  const userslist = document.getElementById("userslist");
  ref.get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach((user) => {
      user = user.data();
      console.log(user);
      userslist.append(createUserElem(user.username));
    });
  });
})();
