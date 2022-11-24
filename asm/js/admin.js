const currentUser = localStorage.getItem("currentUser") || null;

if (currentUser) {
} else {
  window.location.href = "/asm/login.html";
}
var myEditor;
ClassicEditor.create(document.querySelector("#mota_dai"))
  .then((editor) => {
    console.log(editor);
    myEditor = editor;
  })
  .catch((error) => {
    console.error(error);
  });

function handleThemPost(event) {
  myEditor.setData("<p>Welcome</p>");
}
