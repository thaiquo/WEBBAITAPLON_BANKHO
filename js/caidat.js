
  
  function ktHoTenDK() {
    let value = document.getElementById("txtname").value;
    let regex = /^([A-Z]{1}[a-z]*\s)([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
    if (regex.test(value)) {
      document.getElementById("mesName").innerHTML = " ";
      return true;
    } else {
      document.getElementById("mesName").innerHTML = "Không hợp lệ";
      return false;
    }
  }
  

  
  function ktNgayDK() {
    var datenow=new Date();
    var val=document.getElementById("txtngay").value;
    var dateregex=new Date(val);  
    if (dateregex<=datenow) {
      document.getElementById("mesNgay").innerHTML = "";
      return true;
    } else {
      document.getElementById("mesNgay").innerHTML = "Không hợp lệ";
      return false;
    }
  }
  
  function ktDienThoaiDK() {
    let value = document.getElementById("txtsdt").value;
    let regex = /^(0[0-9]{3})(-[0-9]{3}){2}$/;
    if (regex.test(value)) {
      document.getElementById("mesSDT").innerHTML = " ";
      return true;
    } else {
      document.getElementById("mesSDT").innerHTML = "Không hợp lệ";
      return false;
    }
  }
  
  function ktEmailDK() {
    let value = document.getElementById("txtemail").value;
    let regex = /^[a-zA-Z][a-zA-Z0-9]+@gmail.com$/;
    if (regex.test(value)) {
      document.getElementById("mesEmail").innerHTML = " ";
      return true;
    } else {
      document.getElementById("mesEmail").innerHTML = "Không hợp lệ";
      return false;
    }
  }
  
  function ktMatKhauDK(){
    let regex =/^.+$/
    let val=document.getElementById("txtmk").value;
    if(regex.test(val)){
        document.getElementById("mesMK").innerHTML = "";
        return true;
      } else {
        document.getElementById("mesMK").innerHTML = "Không hợp lệ";
        return false;
      }
  }

  function ktGioiTinh(){
    let namChecked = document.getElementById("gtnam").checked;
    let nuChecked = document.getElementById("gtnu").checked;
    return namChecked || nuChecked;
}
  
  function KTDangKi(){
    if(ktHoTenDK()&&ktDienThoaiDK()&&ktEmailDK()
       &&ktGioiTinh()&&ktNgayDK()&&ktMatKhauDK())
     {
  
          var username=document.getElementById("txtname").value;
          var password=document.getElementById("txtmk").value;
          var mail=document.getElementById('txtemail').value;
          var sdt=document.getElementById('txtsdt').value;
          var ngay=document.getElementById('txtngay').value;
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          localStorage.setItem('Email', mail);
          localStorage.setItem('SDT', sdt);
          localStorage.setItem('NgaySinh', ngay);
        alert('đăng kí thành công');
        window.location.href="../html/dangnhap.html";
     }else{
        alert('Nhập Thông Tin Sai');
        return;
     }
  }

  function KTDangNhap(){
    $('#loginForm').click(function(event) {
        var username = $('#txtnamedn').val();
        var password = $('#txtmkdn').val();

        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Đăng nhập thành công!');
              window.location.href='../html/home.html';
        } else {
            // Hiển thị thông báo đăng nhập không thành công
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
            return;
        }
    });
  }
function loadThongTinCaNhan(){
   
  var storedUsername = localStorage.getItem('username');
  var storedEmail = localStorage.getItem('Email');
  var storedSDT = localStorage.getItem('SDT');
  var storedNgaySinh= localStorage.getItem('NgaySinh');
  
  document.getElementById('tendn').innerHTML=storedUsername;
  document.getElementById('emaildn').innerHTML=storedEmail;
  document.getElementById('sdtdn').innerHTML=storedSDT;
  document.getElementById('ngaysinhdn').innerHTML=storedNgaySinh;
}

  function search(){
    var val=document.getElementById('txtsearch').value;
   
    if(val.toUpperCase()==='KHÔ BÒ'){
      window.location.href='../html/khobo.html'
    }
    else if(val.toUpperCase()==='KHÔ MỰC'){
      window.location.href='../html/khomuc.html'
    }
    else if(val.toUpperCase()==='KHÔ GÀ'){
      window.location.href='../html/khoga.html'
    }
    else if(val.toUpperCase()==='KHÔ CÁ'){
      window.location.href='../html/khoca.html'
    }
    else{
      alert('Không tìm thấy sản phẩm');
      return;
    }
  }