function handleDangKy(event) {
  event.preventDefault();
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
      alert("đăng ký thành công");
      return;
    } else {
      // c2
      const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
      let isChecked = false;
      // kiểm tra tài khoản
      for (let i = 0; i < currentUsers.length; i++) {
        if (currentUsers[i].username === username) {
          isChecked = true;
          break;
        }
      }
      if (isChecked) {
        alert("tài khoản đã tồn tại");
        return;
      } else {
        const userCreate = {
          fullName,
          username,
          password,
        };
        currentUsers.push(userCreate);
        localStorage.setItem("users", JSON.stringify(currentUsers));
        alert("đăng ký thành công");
        return;
      }
    }
  }
}

function handleLogin(event) {
  event.preventDefault();
  const messages = [];
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log({ username, password });

  if (username === "") {
    messages.push("tài khoản không được rỗng");
  }
  // password > 6 kí tự
  if (password === "") {
    messages.push("mât khẩu không được rỗng");
  }
  if (messages.length > 0) {
    let html = "";
    for (let i = 0; i < messages.length; i++) {
      html += `<span class='text-danger'>${messages[i]}</span> <br>`;
    }
    document.getElementById("errors").innerHTML = html;
  } else {
    // thanh cong
    const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (currentUsers.length > 0) {
      let isChecked = false;
      let user = null;
      // kiểm tra tài khoản
      for (let i = 0; i < currentUsers.length; i++) {
        if (
          currentUsers[i].username === username &&
          currentUsers[i].password === password
        ) {
          isChecked = true;
          user = currentUsers[i];
          break;
        }
      }
      if (isChecked) {
        // luu thong tin user
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Đăng nhập thành công");
        window.location.href = "/asm/admin.html";
        return;
        // dua ra thong bao
      } else {
        alert("Tài khoản or mật khẩu sai");
        return;
      }
    }
  }
}
