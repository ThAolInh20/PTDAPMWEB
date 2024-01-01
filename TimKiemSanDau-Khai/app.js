

 var form = document.forms.formSearch;
 form.addEventListener('submit',function(e){
    var h1 = document.querySelector('h1');
    h1.innerText = "Danh sách sân đấu";
    var ulhtml = document.getElementById("list-stadium");
    ulhtml.innerHTML = `
    <li id="item">
                <div id="title"> Sân Mỹ Đình</div>
                <a href=""><img src="img/std1.png" alt=""></a>
                <div id="infor">
                    <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                    <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                    <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                    <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                </div>
            </li>
            <li id="item">
                <div id="title">Sân Hoài Đức</div>
                <a href=""><img src="img/san8.png" alt=""></a>
                <div id="infor">
                    <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                    <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                    <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                    <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                </div>
                <li id="item">
                    <div id="title">Sân Thành Đô</div>
                    <a href=""><img src="img/san2.png" alt=""></a>
                    <div id="infor">
                        <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                        <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                        <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                    </div>
                </li>
                <li id="item">
                    <div id="title">Sân Tân Lập</div>
                    <a href=""><img src="img/san3.png" alt=""></a>
                    <div id="infor">
                        <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                        <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                        <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                    </div>
                </li>
                <li id="item">
                    <div id="title">Sân Nam Từ Liêm</div>
                    <a href=""><img src="img/san4.png" alt=""></a>
                    <div id="infor">
                        <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                        <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                        <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                    </div>
                </li>
                <li id="item">
                    <div id="title">Sân Minh Khai</div>
                    <a href=""><img src="img/san5.png" alt=""></a>
                    <div id="infor">
                        <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                        <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                        <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                    </div>
                </li>
                <li id="item">
                    <div id="title">Sân Hoàng Mai</div>
                    <a href=""><img src="img/san6.png" alt=""></a>
                    <div id="infor">
                        <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                        <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                        <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                        <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                    </div>
                </li>
            </li>
            <li id="item">
                <div id="title">Sân Công Nghiệp</div>
                <a href=""><img src="img/san7.png" alt=""></a>
                <div id="infor">
                    <div  class="infor-title" id="kichThuoc">Kích thước: <span>500 mét vuông</span></div>
                    <div  class="infor-title" id="tiennghi">Tiêu chuẩn:<span>Tiêu chuẩn quốc tế</span></div>
                    <div  class="infor-title" id="price">Giá:<span> 300000/1h</span> </div>
                    <div  class="infor-title" id="number">Số Điện Thoại: <span>0337517142</span></div>
                </div>
            </li> 
    `
    e.preventDefault();
 })