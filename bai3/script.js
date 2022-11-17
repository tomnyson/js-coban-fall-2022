// const sinhvienMoi = {
//   id: 3,
//   ten: "c",
//   tuoi: 20,
//   nganh: "TKW",
// };
// // them
// //luu
// localStorage.setItem("sinhvien", JSON.stringify(sinhvienMoi));
// ///get
// console.log(JSON.parse(localStorage.getItem("sinhvien")));
// // clear
// // localStorage.clear();
// localStorage.removeItem("sinhvien");

const element = document.getElementById("title");
element.innerHTML = `update title`;
element.style.color = "red";
element.onclick = () => {
  alert("click here");
};
console.log(element);

function handleSubmit(event) {
  const ten = document.getElementsByName("ten");
  element.innerHTML = ten[0].value;
  event.preventDefault();
  console.log(event);
}
