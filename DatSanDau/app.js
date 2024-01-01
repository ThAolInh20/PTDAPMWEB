var form = document.forms.DatSan;
form.addEventListener('submit',function(e){
    var SanDuocChon = document.querySelector("#booked");
    if(SanDuocChon.innerText=="")
    {
        alert('Bạn chưa chọn sân');
        return false;
    }
    if(confirm("Bạn có chắc muốn đặt sân ?")==true){
        var tensan = document.getElementById('tensan').innerText;
        var date = document.getElementById('ngaydat').value;
        var time = document.getElementById('thoigian').value;
        alert(`Bạn đã đặt sân : ${tensan} 
        Ngày đặt sân: ${date}
        Thời gian: ${time}`);
    }else{
        return false;
    }
   
    e.preventDefault();
})
 var btn = document.querySelectorAll('#booking');
  btn.forEach(function(button,index){
    button.addEventListener('click',function(e){
        var liItem = button.parentElement;
        var name = liItem.querySelector('#title').innerText;
        var imageProduct = liItem.querySelector('img').src;
        var kichThuoc = liItem.querySelector('#kichThuoc span').innerText;
        var tieuChuan = liItem.querySelector('#tiennghi span').innerText;
        var price = liItem.querySelector('#price span').innerText;
        var status = liItem.querySelector('#number span').innerText;
        if(status=="Đã có người đặt"){
            alert("sân đã có người đặt");
            return false;
        }else {
            alert('Đã thêm vào danh sách');
        }
        // console.log(price)
        addItem(name,imageProduct,kichThuoc,tieuChuan,price,status);
        e.preventDefault();
    })
})
function addItem(name,imageProduct,kichThuoc,tieuChuan,price,status){
    var dachon = document.getElementById('booked');
    dachon.innerHTML = ` 
    <div id="title1">Sân đã chọn: <span id ="tensan"> ${name} </span></div>
    <a href=""><img src="${imageProduct}" alt=""></a>
    <div id="infor">
        <div  class="infor-title" id="kichThuoc">Kích thước: <span>${kichThuoc}</span></div>
        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>${tieuChuan}</span></div>
        <div  class="infor-title" id="price">Giá:<span> ${price}</span> </div>
        <div  class="infor-title" id="number">Trạng Thái: <span>${status}</span></div>
    </div>
    `;
}
