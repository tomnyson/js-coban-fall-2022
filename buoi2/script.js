const mang = [1, 2, 8, 4, 6, 7, 3, 0, 9];

//duyet mang
let min = mang[0];
let sum = 0;
let dem = 0;
for (let i = 0; i < mang.length; i++) {
  //cách gọi hàm
  if (KTChan(mang[i])) {
    console.log(`so chan ${mang[i]}`);
  } else {
    console.log(`so le ${mang[i]}`);
  }
  if (min > mang[i]) {
    min = mang[i];
  }
  sum = sum + i;
  dem++;
  console.log(`mang tai vi tri ${i} gia tri: ${mang[i]}`);
}
console.log(`min ${min}`);
console.log(`tong: ${sum}`);
console.log(`tong tbc: ${sum / dem}`);

/**
 *   in gia tri chan le
 *  tim gia tri lon nhat cua mang
 *  tim gia tri nho nhat
 *  tinh tong cua mang
 *  tinh trung binh cong cua mang
 */

function KTChan(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// OBJECT
const sinhvien = {
  ten: "Lê Hồng Sơn",
  tuoi: 30,
  nganh: "CNTT",
};

console.log(sinhvien);
console.log(sinhvien["ten"]);
console.log(sinhvien.ten);
// object string
console.log(JSON.stringify(sinhvien));
console.log(JSON.parse(JSON.stringify(sinhvien)));

const sinhvienList = [
  {
    id: 1,
    ten: "a",
    tuoi: 30,
    nganh: "CNTT",
  },
  {
    id: 2,
    ten: "b",
    tuoi: 30,
    nganh: "LTMT",
  },
];

console.log(sinhvienList);
/**
 * duyet mang
 *  tìm kiếm
 * thêm
 * xoá
 * sửa
 */
for (let i = 0; i < sinhvienList.length; i++) {
  console.log(sinhvienList[i]);
}
console.log("bai 2");
for (let i = 0; i < sinhvienList.length; i++) {
  if (sinhvienList[i].id == 21) {
    console.log(sinhvienList[i]);
  }
}
console.log("bai 3");
const sinhvienMoi = {
  id: 3,
  ten: "c",
  tuoi: 20,
  nganh: "TKW",
};
// them
sinhvienList.push(sinhvienMoi);
for (let i = 0; i < sinhvienList.length; i++) {
  console.log(sinhvienList[i]);
}
//cap nhat id = 3 -> tuoi = 20 -> 21

for (let i = 0; i < sinhvienList.length; i++) {
  if (sinhvienList[i].id == 3) {
    sinhvienList[i].tuoi = 21;
  }
}

for (let i = 0; i < sinhvienList.length; i++) {
  console.log(sinhvienList[i]);
}

// xoa id =2

for (let i = 0; i < sinhvienList.length; i++) {
  if (sinhvienList[i].id == 2) {
    delete sinhvienList[i];
  }
}

for (let i = 0; i < sinhvienList.length; i++) {
  console.log(sinhvienList[i]);
}
