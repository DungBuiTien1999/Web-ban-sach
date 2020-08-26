CREATE DATABASE  IF NOT EXISTS `hethongbanhangeshopping` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hethongbanhangeshopping`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hethongbanhangeshopping
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietgiohang`
--

DROP TABLE IF EXISTS `chitietgiohang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietgiohang` (
  `magiohang` varchar(40) NOT NULL,
  `masp` varchar(40) NOT NULL,
  `soluong` int DEFAULT NULL,
  PRIMARY KEY (`magiohang`,`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietgiohang`
--

LOCK TABLES `chitietgiohang` WRITE;
/*!40000 ALTER TABLE `chitietgiohang` DISABLE KEYS */;
INSERT INTO `chitietgiohang` VALUES ('1','10001',3),('1','30001',16),('1','30002',92),('3','10',4);
/*!40000 ALTER TABLE `chitietgiohang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietsanpham`
--

DROP TABLE IF EXISTS `chitietsanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietsanpham` (
  `masp` varchar(40) NOT NULL,
  `mota` longtext,
  `ngaydang` datetime DEFAULT NULL,
  `tacgia` varchar(45) DEFAULT NULL,
  `nxb` varchar(45) DEFAULT NULL,
  `nguoidich` varchar(45) DEFAULT NULL,
  `namxb` varchar(10) DEFAULT NULL,
  `hinhthuc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietsanpham`
--

LOCK TABLES `chitietsanpham` WRITE;
/*!40000 ALTER TABLE `chitietsanpham` DISABLE KEYS */;
INSERT INTO `chitietsanpham` VALUES ('10','Vi là một cô gái thành đạt và có nhan sắc, một ngày nọ cô cảm thấy chán chường khung cảnh văn phòng nên đã nghỉ việc, một thân một mình rong ruổi trời tây để “tìm lại bản ngã”; nhưng sâu thẳm trong lòng, cô còn muốn tìm một cơ hội YÊU, khi xấp xỉ ba mươi tuổi đầu mà vẫn chưa có một mảnh tình vắt vai. Trên hành trình qua châu Âu, Vi gặp Karen, một cô gái Mỹ lớn tuổi hơn, đang lâm trọng bệnh và cũng muốn được đi du lịch để... chết trên đường. Karen đã giúp Vi học những bài vỡ lòng về tình yêu. Khi người bạn đồng hành gặp nguy kịch, Vi đã tận tụy giúp đỡ. Cũng từ đây Vi dần nhận ra được giá trị của sự chia sẻ mà trước đây, do luôn được gia đình bảo bọc nuông chiều, cô đã ích kỷ không nhận ra.','2020-08-26 00:00:00','Dương Thụy','NXB Trẻ','','2020','Bìa Mềm'),('10001','“Tôi không biết về ngày mai của tôi - người vẫn còn thời gian, nhưng tôi đã nghĩ ngày mai của cô ấy - người chẳng còn mấy thời gian đã được hẹn trước.','2020-08-18 00:00:00','Sumino Yoru','NXB Hội Nhà Văn','	Phong Tập','2018','Bìa Mềm'),('10002','Một chiến tranh mà trạng thái chết chỉ phảng phất, còn “đang chết” mới là trạng thái thường trực, là lực lượng án ngữ, chiếm ngự từ thể xác đến tâm hồn con người, cuối cùng thẳng tay nhấn chìm tất thảy.','2020-08-18 00:00:00','Nosaka Akiyuki','	NXB Hà Nội','Đào Phú Lợi','	2019','Bìa Mềm'),('30001','Trong xã hội thông tin hiện đại, sự im lặng không còn là vàng nữa, nếu không biết cách giao tiếp thì dù là vàng cũng sẽ bị chôn vùi. Trong cuộc đời một con người, từ xin việc đến thăng tiến, từ tình yêu đến hôn nhân, từ tiếp thị cho đến đàm phán, từ xã giao đến làm việc... không thể không cần đến kĩ năng và khả năng giao tiếp. Khéo ăn khéo nói thì đi đâu, làm gì cũng gặp thuận lợi. Không khéo ăn nói, bốn bề đều là trở ngại, khó khăn. Trong thời đại thông tin và liên lạc phát triển nhanh chóng, tin tức được cập nhật liên tục, các công cụ thông tin và kĩ thuật truyền thông được ứng dụng rộng rãi như ngày nay thì việc khéo ăn nói đã trở thành “cái tài số một thiên hạ”. Trong khoảng thời gian ngắn nhất, nếu ai có thể nêu bật được khả năng, thực lực của mình cho đối phương biết thì đó sẽ là người chiến thắng. Chính vì vậy mà câu nói “Khéo ăn nói sẽ có được thiên hạ” rất có ý nghĩa. Vậy, như thế nào mới gọi là biết cách ăn nói? Nói năng lưu loát, không ấp úng có được gọi là biết cách nói chuyện không? Nói ngắn gọn, nói ít nhưng ý nghĩa thâm sâu có được gọi là biết cách nói chuyện không? Hay nhất định phải nói nhiều mới là biết nói chuyện?','2020-08-18 00:00:00','Trác Nhã','NXB Văn Học','Không','2018','Bìa Mềm'),('30002','Trong cuốn sách này, Robert Greene tìm cách… biến độc giả thành một ‘quan sát viên điềm tĩnh hơn và có đầu óc chiến lược hơn’, miễn nhiễm với ‘bi kịch cảm xúc’. Đó là những hứa hẹn khá cao, nhưng ngay cả những kẻ hoài nghi cũng sẽ trở thành những người tin tưởng sau khi đọc kỹ tác phẩm chỉnh chu của ông. Việc vượt qua ‘quy luật của sự thiếu sáng suốt’, chẳng hạn, dẫn tới khả năng ‘mở rộng tâm trí bạn ra trước những gì thật sự đang diễn ra, trái hẳn với những gì bạn cảm thấy’. Điều tra thận trọng của Robert Greene về cái tôi và xã hội sẽ mang tới cho độc giả trung thành một quan điểm mới mẻ và tràn đầy sức sống.','2020-08-18 00:00:00','Robert Greene','NXB Trẻ','Tiến Dũng','2020','Bìa Mềm'),('5','Trong ngày khai giảng, nhờ sự xuất hiện vào phút chót của cậu bé thiểu năng trí tuệ Harun, trường Muhammadiyah may mắn thoát khỏi nguy cơ đóng cửa. Nhưng ước mơ dạy và học trong ngôi trường Hồi giáo ấy liệu sẽ đi về đâu, khi ngôi trường xập xệ dường như sẵn sàng sụp xuống bất cứ lúc nào, khi lời đe dọa đóng cửa từ viên thanh tra giáo dục luôn lơ lửng trên đầu, khi những cỗ máy xúc hung dữ đang chực chờ xới tung ngôi trường để dò mạch thiếc…? Và liệu niềm đam mê học tập của những Chiến binh Cầu vồng đó có đủ sức chinh phục quãng đường ngày ngày đạp xe bốn mươi cây số, rồi đầm cá sấu lúc nhúc bọn ăn thịt người, chưa kể sự mê hoặc từ những chuyến phiêu lưu chết người theo tiếng gọi của ngài pháp sư bí ẩn trên đảo Hải Tặc, cùng sức cám dỗ khôn cưỡng từ những đồng tiền còm kiếm được nhờ công việc cu li toàn thời gian ...?','2020-08-26 00:00:00','Andrea Hirata','NXB Hội Nhà Văn','Dạ Thảo','2020','Bìa Mềm'),('6','Trong Cho tôi xin một vé đi tuổi thơ, nhà văn Nguyễn Nhật Ánh mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.','2020-08-26 00:00:00','Nguyễn Nhật Ánh','NXB Trẻ','','2020','Bìa Mềm'),('7','Bất chợt lắng nghe bài hát mà nàng vẫn ưa thích nhất của Beatles, Toru Watanbe hồi tưởng lại mối tình đầu của mình với Naoko, người yêu của người bạn thân nhất là Kizuki. Ký ức ngay lập tức mang anh trở về những ngày sinh viên của 20 năm trước , ở Tokyo, những ngày chơi vơi trong một thế giới của tình bạn khó khăn, của tình dục buông thả, của đam mê mầt mát, trở về cái thời mà một cô gái mạnh mẽ tên là Modori đã bước vào cuộc đời anh, khiến anh phải chọn lựa, hoặc tương lai, hoặc quá khứ...','2020-08-26 00:00:00','Haruki Murakami','NXB Văn Học','','2018','Bìa Mềm'),('8','Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.','2020-08-26 00:00:00','Paulo Coelho','NXB Hội Nhà Văn','Lê Chu Cầu','2020','Bìa Mềm'),('9','“Một tiểu thuyết đẹp đẽ… nằm trong số những tác phẩm được viết ra tinh tế và khơi gợi nhất cho tới giờ phút này… Một câu chuyện làm cảm động trái tim về một tình bạn khác thường… Đó cũng là một tác phẩm thuyết phục kỳ lạ, về mối quan hệ mong manh giữa cha và con, giữa con người và thần thánh, giữa cá nhân và đất nước. Huyết thống cùng sự thủy chung đã là sợi dây nối buộc câu chuyện của họ vào một trong số những cuốn sách trữ tình, cảm động và bất ngờ nhất của năm.”','2020-08-26 00:00:00','Khaled Hosseini','NXB Hội Nhà Văn','','2018','Bìa Mềm');
/*!40000 ALTER TABLE `chitietsanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danhmucsp`
--

DROP TABLE IF EXISTS `danhmucsp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danhmucsp` (
  `madanhmuc` varchar(40) NOT NULL,
  `tendanhmuc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`madanhmuc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhmucsp`
--

LOCK TABLES `danhmucsp` WRITE;
/*!40000 ALTER TABLE `danhmucsp` DISABLE KEYS */;
INSERT INTO `danhmucsp` VALUES ('001','Văn học'),('002','Lịch sử'),('003','Tâm lý - Kĩ năng sống'),('004','Nuôi dạy con'),('005','Sách thiếu nhi'),('006','Tiểu sử - Hồi ký'),('007','Giáo khoa - Tham khảo'),('008','Sách học ngoại ngữ');
/*!40000 ALTER TABLE `danhmucsp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giohang`
--

DROP TABLE IF EXISTS `giohang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giohang` (
  `magiohang` varchar(40) NOT NULL,
  `makh` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`magiohang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giohang`
--

LOCK TABLES `giohang` WRITE;
/*!40000 ALTER TABLE `giohang` DISABLE KEYS */;
INSERT INTO `giohang` VALUES ('1','lan@gmail.com'),('2','nhi@gmail.com'),('3','admin@gmail.com');
/*!40000 ALTER TABLE `giohang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hinhanhsanpham`
--

DROP TABLE IF EXISTS `hinhanhsanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hinhanhsanpham` (
  `masp` varchar(40) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`masp`,`path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hinhanhsanpham`
--

LOCK TABLES `hinhanhsanpham` WRITE;
/*!40000 ALTER TABLE `hinhanhsanpham` DISABLE KEYS */;
INSERT INTO `hinhanhsanpham` VALUES ('10001','1.jpg'),('10001','2.jpg'),('10001','3.jpg'),('10001','main.jpg'),('10002','main.jpg'),('30001','1.jpg'),('30001','2.jpg'),('30001','main.jpg'),('30002','main.jpg'),('5','main.jpg'),('6','1.jpg'),('7','1.jpg'),('7','2.jpg'),('7','3.jpg'),('7','main.jpg'),('8','1.jpg'),('8','main.jpg'),('9','1.jpg'),('9','main.jpg');
/*!40000 ALTER TABLE `hinhanhsanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `mahoadon` varchar(40) NOT NULL,
  `magiohang` varchar(40) DEFAULT NULL,
  `maphieudathang` varchar(40) DEFAULT NULL,
  `ngaylap` datetime DEFAULT NULL,
  `tongtien` double DEFAULT NULL,
  PRIMARY KEY (`mahoadon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichsugia`
--

DROP TABLE IF EXISTS `lichsugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichsugia` (
  `stt` int NOT NULL AUTO_INCREMENT,
  `masp` varchar(40) DEFAULT NULL,
  `gia` double DEFAULT NULL,
  `ngaychinhsua` datetime DEFAULT NULL,
  PRIMARY KEY (`stt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichsugia`
--

LOCK TABLES `lichsugia` WRITE;
/*!40000 ALTER TABLE `lichsugia` DISABLE KEYS */;
/*!40000 ALTER TABLE `lichsugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaiuser`
--

DROP TABLE IF EXISTS `loaiuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaiuser` (
  `maloaiuser` varchar(30) NOT NULL,
  `tenloaiuser` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`maloaiuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaiuser`
--

LOCK TABLES `loaiuser` WRITE;
/*!40000 ALTER TABLE `loaiuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `loaiuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieudathang`
--

DROP TABLE IF EXISTS `phieudathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieudathang` (
  `maphieu` varchar(40) NOT NULL,
  `tenphieu` varchar(50) DEFAULT NULL,
  `tienphi` double DEFAULT NULL,
  PRIMARY KEY (`maphieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieudathang`
--

LOCK TABLES `phieudathang` WRITE;
/*!40000 ALTER TABLE `phieudathang` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieudathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `masp` varchar(40) NOT NULL,
  `tensp` varchar(50) DEFAULT NULL,
  `giatien` double DEFAULT NULL,
  `madanhmuc` varchar(40) DEFAULT NULL,
  `nhacungcap` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`masp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES ('10','Em Rắc Thính, Anh Thả Tình',79000,'001','NXB Trẻ'),('10001','Tớ Muốn Ăn Tụy Của Cậu',68000,'001','Nhã Nam'),('10002','Mộ Đom Đóm',59520,'001','IPM'),('30001','Khéo Ăn Nói Sẽ Có Được Thiên Hạ - Bản Mới',85800,'003','Minh Long'),('30002','Những Quy Luật Của Bản Chất Con Người',216000,'003','NXB Trẻ'),('5','Chiến Binh Cầu Vồng (Tái Bản 2020)',90470,'001','Nhã Nam'),('6','Cho Tôi Xin Một Vé Đi Tuổi Thơ',64000,'001','NXB Trẻ'),('7','Rừng Nauy (Tái Bản 2018)',106240,'001','Nhã Nam'),('8','Nhà Giả Kim',67150,'001','Nhã Nam'),('9','Người Đua Diều',82200,'001','Nhã Nam');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `stt` int NOT NULL AUTO_INCREMENT,
  `maseller` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`stt`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,'Nhã Nam'),(2,'IPM');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thetindung`
--

DROP TABLE IF EXISTS `thetindung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thetindung` (
  `masothe` varchar(20) NOT NULL,
  `makhachhang` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`masothe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thetindung`
--

LOCK TABLES `thetindung` WRITE;
/*!40000 ALTER TABLE `thetindung` DISABLE KEYS */;
/*!40000 ALTER TABLE `thetindung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thongtinnguoinhan`
--

DROP TABLE IF EXISTS `thongtinnguoinhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thongtinnguoinhan` (
  `stt` int NOT NULL AUTO_INCREMENT,
  `makh` varchar(40) DEFAULT NULL,
  `hoten` varchar(50) DEFAULT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  `diachi` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`stt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thongtinnguoinhan`
--

LOCK TABLES `thongtinnguoinhan` WRITE;
/*!40000 ALTER TABLE `thongtinnguoinhan` DISABLE KEYS */;
/*!40000 ALTER TABLE `thongtinnguoinhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `email` varchar(30) NOT NULL,
  `hoten` varchar(50) DEFAULT NULL,
  `cmnd` varchar(15) DEFAULT NULL,
  `diachi` varchar(50) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `matkhau` longtext,
  `gioitinh` varchar(5) DEFAULT NULL,
  `maloaiuser` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin@gmail.com',NULL,NULL,NULL,'Admin','$2b$10$RmEi0X3OVoh.n.sAb2WbVO9MgEuTSynwHgZYyfiJr5MHOz.goHSQ6',NULL,'11'),('dung@gmail.com',NULL,NULL,NULL,'dung','$2b$10$fHbIcRdtDzADpb2iXAUxjOTZZc.u/Wzk2PS6Ttn796.zQES2FX7x.',NULL,'00'),('lan@gmail.com',NULL,NULL,NULL,'Lan','$2b$10$Oq5Un1wB8rl44ThPU58aM.nEA/xKxIuyevt9dQCuIXshVQxQVMkO.',NULL,'00'),('nguyentonhi199@gmail.com',NULL,NULL,NULL,'dung1','$2b$10$Bztc8zOT2HEHuATEmwErPe1iif/DZ8rGGzEw5m2pnU7GXSjXbwWTu',NULL,'11'),('nhi@gmail.com',NULL,NULL,NULL,'Nhi','$2b$10$IMWF47T3xtNcMm0Mj4uneuC0w8LMUREckpde4oIswgpDn2HrqqwyC',NULL,'00');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'hethongbanhangeshopping'
--

--
-- Dumping routines for database 'hethongbanhangeshopping'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-26  9:52:57
