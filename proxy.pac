function FindProxyForURL(url, host) {
// Chuyển host về chữ thường để đảm bảo so sánh chính xác
host = host.toLowerCase();

// Danh sách các máy chủ của Locket và Firebase cần đi qua IP Mỹ
if (shExpMatch(host, "*locketcam.com") ||
    shExpMatch(host, "*locket.camera") ||

    shExpMatch(host, "*firebaseio.com") ||
    shExpMatch(host, "firebaseremoteconfig.googleapis.com")) {
    
    // NẾU BẠN DÙNG HTTP PROXY:
    // Thay 123.45.67.89 và 8080 bằng IP và Port bạn mua
    return "PROXY 198.23.243.226:6361"; 
    
    // NẾU BẠN DÙNG SOCKS5 PROXY (Xóa dấu // ở dòng dưới để dùng, và thêm // vào dòng trên):
    // return "SOCKS5 123.45.67.89:1080";
}

// Mọi ứng dụng khác (Zalo, Facebook, Game...) sẽ đi trực tiếp bằng mạng bình thường
return "DIRECT";



}