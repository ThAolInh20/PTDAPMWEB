function checkemail(){
    var email = document.getElementById("email").value;
    var regix= /^[^@]*@[^@.]+\.[^@.]+$/;

    if(!regix.test(email)){
        alert("Vui lòng nhập đúng email");
    }
}
function registerAndRedirect() {
    var us = document.getElementById('username').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;

    // Kiểm tra tính hợp lệ của mật khẩu
    if (pass1 !== pass2) {
        alert("Mật khẩu chưa trùng khớp!");
    } else if (taikhoanList.indexOf(us) > -1) {
        alert('Tài khoản đã tồn tại');
    } else {
        alert("Đăng ký thành công!");
        
        // Thêm tài khoản và mật khẩu vào mảng
        taikhoanList.push(us);
        passList.push(pass1);

        // Lưu dữ liệu vào localStorage
        saveDataToLocalStorage();

        // Chờ 1 giây sau đó chuyển hướng đến trang đăng nhập
        setTimeout(function() {
            window.location.href = "../Login/index.html";
        }, 1000);
    }
  
}
function saveDataToLocalStorage() {
    localStorage.setItem('taikhoanList', JSON.stringify(taikhoanList));
    localStorage.setItem('passList', JSON.stringify(passList));
}