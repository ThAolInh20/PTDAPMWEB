
function checktaikhoan(){
    var us = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    // Lấy dữ liệu từ localStorage
    var storedTaikhoanList = JSON.parse(localStorage.getItem('taikhoanList')) || [];
    var storedPassList = JSON.parse(localStorage.getItem('passList')) || [];

    // Kiểm tra xem tài khoản và mật khẩu có tồn tại trong mảng hay không
    var index = storedTaikhoanList.indexOf(us);
    if (index !== -1 && storedPassList[index] === pass) {
        alert("Đăng nhập thành công");
        setTimeout(function() {
            window.location.href = "../TrangChu/trangchu_login.html";
        }, 1000);
        // Thực hiện các bước cần thiết sau khi đăng nhập thành công
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
}
