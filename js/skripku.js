function masuk() {
  let form = window.document.getElementById("countainer");
  let username = form.user.value;
  let password = form.pwd.value;

  if (username == "mimin" && password == "mimin123") {
    alert("Selamat Datang Mimin, Anda Administrator");
  } else if (username == "budi" && password == "budi123") {
    alert("Selamat Datang Budi, Anda Operator");
  } else {
    alert("Maaf Anda Gagal Login");
  }
}
function user() {
  //tangkap request form
  let frm = window.document.getElementById("countainer");
  frm.username.value = "";
}

function pwd() {
  //tangkap request form
  let frm = window.document.getElementById("countainer");
  frm.password.value = "";
}
