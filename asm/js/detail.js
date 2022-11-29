const params = new URL(document.location).searchParams;
const id = params.get("id");
console.log("id", id);
/**
 *  lấy id
 *  tìm id trong localstorage post
 *  in ra kết quả tìm thấy
 */
