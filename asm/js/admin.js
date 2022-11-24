const currentUser = localStorage.getItem("currentUser") || null;

if (currentUser) {
} else {
  window.location.href = "/asm/login.html";
}
var editorMota;
ClassicEditor.create(document.querySelector("#mota_dai"))
  .then((editor) => {
    editorMota = editor;
  })
  .catch((error) => {
    console.error(error);
  });

function handleThemPost(event) {
  const messages = [];
  const tieude = document.getElementById("tieude").value;
  const hinhanh = document.getElementById("hinhanh").value;
  const mota_ngan = document.getElementById("mota_ngan").value;
  console.log(Date.now());
  if (tieude === "") {
    messages.push("tiêu đề không được rỗng");
  }
  if (hinhanh === "") {
    messages.push("hình ảnh không được rỗng");
  }
  // password > 6 kí tự
  if (mota_ngan === "") {
    messages.push("mô tả ngắn không được rỗng");
  }
  if (editorMota.getData().length === 0) {
    messages.push("mô tả dài không được rỗng");
  }

  if (messages.length > 0) {
    let html = "";
    for (let i = 0; i < messages.length; i++) {
      html += `<span class='text-danger'>${messages[i]}</span> <br>`;
    }
    document.getElementById("errors").innerHTML = html;
  } else {
    /**
     *  tao id
     *  kt xem có post chưa nếu chưa thì thêm vào như đk
     *  có rồi -> thì tiến hành push thêm
     */
    const post = {
      id: Date.now(),
      tieude,
      hinhanh,
      mota_ngan,
      mota_dai: editorMota.getData(),
    };
    const posts = JSON.parse(localStorage.getItem("posts"));
    // chưa có post
    if (posts === null) {
      localStorage.setItem("posts", JSON.stringify([post]));
    } else {
      // đã có post
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
    renderListPost();
    //render lại post
  }
}

function renderListPost() {
  const posts = JSON.parse(localStorage.getItem("posts"));
  let outHtml = "";
  for (let i = 0; i < posts.length; i++) {
    outHtml += `<div>
      <h3>${posts[i].tieude}</h3>
      <p>${posts[i].mota_ngan}</p>
    </div>`;
  }
  document.getElementById("posts").innerHTML = outHtml;
}
