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
INSERT INTO `chitietsanpham` VALUES ('10001','“Tôi không biết về ngày mai của tôi - người vẫn còn thời gian, nhưng tôi đã nghĩ ngày mai của cô ấy - người chẳng còn mấy thời gian đã được hẹn trước.','2020-08-18 00:00:00','Sumino Yoru','NXB Hội Nhà Văn','	Phong Tập','2018','Bìa Mềm'),('10002','Một chiến tranh mà trạng thái chết chỉ phảng phất, còn “đang chết” mới là trạng thái thường trực, là lực lượng án ngữ, chiếm ngự từ thể xác đến tâm hồn con người, cuối cùng thẳng tay nhấn chìm tất thảy.','2020-08-18 00:00:00','Nosaka Akiyuki','	NXB Hà Nội','Đào Phú Lợi','	2019','Bìa Mềm'),('30001','Trong xã hội thông tin hiện đại, sự im lặng không còn là vàng nữa, nếu không biết cách giao tiếp thì dù là vàng cũng sẽ bị chôn vùi. Trong cuộc đời một con người, từ xin việc đến thăng tiến, từ tình yêu đến hôn nhân, từ tiếp thị cho đến đàm phán, từ xã giao đến làm việc... không thể không cần đến kĩ năng và khả năng giao tiếp. Khéo ăn khéo nói thì đi đâu, làm gì cũng gặp thuận lợi. Không khéo ăn nói, bốn bề đều là trở ngại, khó khăn. Trong thời đại thông tin và liên lạc phát triển nhanh chóng, tin tức được cập nhật liên tục, các công cụ thông tin và kĩ thuật truyền thông được ứng dụng rộng rãi như ngày nay thì việc khéo ăn nói đã trở thành “cái tài số một thiên hạ”. Trong khoảng thời gian ngắn nhất, nếu ai có thể nêu bật được khả năng, thực lực của mình cho đối phương biết thì đó sẽ là người chiến thắng. Chính vì vậy mà câu nói “Khéo ăn nói sẽ có được thiên hạ” rất có ý nghĩa. Vậy, như thế nào mới gọi là biết cách ăn nói? Nói năng lưu loát, không ấp úng có được gọi là biết cách nói chuyện không? Nói ngắn gọn, nói ít nhưng ý nghĩa thâm sâu có được gọi là biết cách nói chuyện không? Hay nhất định phải nói nhiều mới là biết nói chuyện?','2020-08-18 00:00:00','Trác Nhã','NXB Văn Học','Không','2018','Bìa Mềm'),('30002','Trong cuốn sách này, Robert Greene tìm cách… biến độc giả thành một ‘quan sát viên điềm tĩnh hơn và có đầu óc chiến lược hơn’, miễn nhiễm với ‘bi kịch cảm xúc’. Đó là những hứa hẹn khá cao, nhưng ngay cả những kẻ hoài nghi cũng sẽ trở thành những người tin tưởng sau khi đọc kỹ tác phẩm chỉnh chu của ông. Việc vượt qua ‘quy luật của sự thiếu sáng suốt’, chẳng hạn, dẫn tới khả năng ‘mở rộng tâm trí bạn ra trước những gì thật sự đang diễn ra, trái hẳn với những gì bạn cảm thấy’. Điều tra thận trọng của Robert Greene về cái tôi và xã hội sẽ mang tới cho độc giả trung thành một quan điểm mới mẻ và tràn đầy sức sống.','2020-08-18 00:00:00','Robert Greene','NXB Trẻ','Tiến Dũng','2020','Bìa Mềm');
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
INSERT INTO `sanpham` VALUES ('10001','Tớ Muốn Ăn Tụy Của Cậu',68000,'001','Nhã Nam'),('10002','Mộ Đom Đóm',59520,'001','IPM'),('30001','Khéo Ăn Nói Sẽ Có Được Thiên Hạ - Bản Mới',85800,'003','Minh Long'),('30002','Những Quy Luật Của Bản Chất Con Người',216000,'003','NXB Trẻ');
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
  `mauser` varchar(40) NOT NULL,
  `hoten` varchar(50) DEFAULT NULL,
  `cmnd` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `diachi` varchar(50) DEFAULT NULL,
  `tendangnhap` varchar(30) DEFAULT NULL,
  `matkhau` varchar(30) DEFAULT NULL,
  `gioitinh` varchar(5) DEFAULT NULL,
  `maloaiuser` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`mauser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2020-08-19 15:01:38
