function handleDangKy(event) {
  const messages = [];
  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log({ fullName, username, password });

  if (fullName === "") {
    messages.push("tên đầy đủ không được rỗng");
  }
  if (username === "") {
    messages.push("tài khoản không được rỗng");
  }
  // password > 6 kí tự
  if (password === "") {
    messages.push("mât khẩu không được rỗng");
  }

  if (password.length < 6) {
    messages.push("mật khẩu phải lớn hơn 6 ký tự");
  }
  //   if (messages.length > 0) {
  //     alert(messages.join("\n"));
  //   }
  if (messages.length > 0) {
    let html = "";
    for (let i = 0; i < messages.length; i++) {
      html += `<span class='text-danger'>${messages[i]}</span> <br>`;
    }
    document.getElementById("errors").innerHTML = html;
  } else {
    // insert
    /**
     *
     * c1: hệ thống chứa có user name
     * c2: hệ thống đã có user đăng ký
     */
    const users = localStorage.getItem("users");
    if (users === null) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            fullName,
            username,
            password,
          },
        ])
      );
    } else {
      // c2
    }
    // case 1

    alert("đăng ký thành công");
  }
}
