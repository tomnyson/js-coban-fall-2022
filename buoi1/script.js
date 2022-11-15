// console.log("hello world");
// var a = 1;
// a = 10;
// console.log(a);

// //hằng số
// // const b = 1;
// // b = 2;
// // console.log(b);

// const ten = "le hong son";
// const tuoi = 30;
// const chieucao = 1.75;

// console.log("ten:", ten);
// console.log("tuoi", tuoi);
// console.log("chieu cao", chieucao);

// const diem = 2.5;
// // true || false
// if (diem >= 5) {
//   console.log("pass môn");
// } else {
//   console.log("học lại");
// }
// // if else
// const soThu1 = 9;
// const soThu2 = 9;

// if (soThu1 >= soThu2) {
//   console.log(`số thứ 1 ${soThu1} >= ${soThu2} số thứ 2`);
// } else {
//   console.log(`số thứ 1 ${soThu1} <= ${soThu2} số thứ 2`);
// }

// // if else if else

// if (soThu1 == soThu2) {
//   console.log(`hai số đều bằng ${soThu2}`);
// } else if (soThu1 > soThu2) {
//   console.log(`số thứ 1 ${soThu1} > ${soThu2} số thứ 2`);
// } else {
//   console.log(`số thứ 1 ${soThu1} < ${soThu2} số thứ 2`);
// }
// /**
//  * if -> else if -> else
//  * nếu >=5 tb >=6.5 khá >= 8.0 giỏi >= 9.0 xuất sắc còn lại thì sẽ yếu
//  */

// const diemTb = 9.5;

// if (diemTb >= 9) {
//   console.log("xuất sắc");
// } else if (diemTb >= 8) {
//   console.log("giỏi");
// } else if (diemTb >= 6.5) {
//   console.log("khá");
// } else if (diemTb >= 5) {
//   console.log("trung bình");
// } else {
//   console.log("yếu");
// }

// const docSo = 10;

// switch (docSo) {
//   case 0:
//     console.log("số 0");
//     break;
//   case 1:
//     console.log("số 1");
//     break;
//   case 2:
//     console.log("số 2");
//     break;
//   case 3:
//     console.log("số 3");
//     break;
//   case 4:
//     console.log("số 4");
//     break;
//   case 5:
//     console.log("số 5");
//     break;
//   default:
//     console.log("error");
//     break;
// }
// // Tháng 1 có 31 ngày
// // Tháng 2 có 28 ngày hoặc 29 ngày
// // Tháng 3 có 31 ngày
// // Tháng 4 có 3 ngày
// // Có thể có 31 ngày
// // Tháng 6 có 30 ngày
// // Tháng 7 có 31 ngày
// // Tháng 8 có 31 ngày
// // Tháng 9 có 30 ngày
// // Tháng 10 có 31 ngày
// // Tháng 11 có 30 ngày
// // Tháng 12 có 31 ngày
// const thang = 2;
// switch (thang) {
//   case 1:
//   case 3:
//   case 5:
//   case 10:
//   case 12:
//     console.log("31 ngay");
//     break;
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 ngay");
//     break;
//   case 2:
//     console.log("28 or 29(năm nhuận) ngay");
//     break;
//   default:
//     console.log("ko hop le");
//     break;
// }

// // for
// /**
//  * khởi tạo ban đầu
//  * điều kiện dừng
//  * bước nhảy
//  */
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// //b1: in chan n=10
// console.log("bai 1 for");
// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 == 0) console.log(i);
// }
// console.log("bai 1 while");
// let i = 0;
// while (i < 10) {
//   if (i % 2 == 0) console.log(i);
//   i++;
// }
// console.log("bai 1 do while");
// i = 0;
// do {
//   if (i % 2 == 0) console.log(i);
//   i++;
// } while (i < 10);
// // b2 in chan va(&&) chia het cho 5 n=50
// console.log("bai 2");
// for (let i = 0; i < 50; i += 1) {
//   if (i % 2 == 0 && i % 5 == 0) console.log(i);
// }
// console.log("bai 3");
// // b4 in le ||(or) chia het cho 3 n=50
// for (let i = 0; i < 50; i += 1) {
//   if (i % 2 != 0 || i % 5 == 0) console.log(i);
// }
//mảng
const mang = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(mang);
