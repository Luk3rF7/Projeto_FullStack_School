CREATE DATABASE  IF NOT EXISTS `escola` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `escola`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: escola
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `fotos`
--

DROP TABLE IF EXISTS `fotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fotos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `originalname` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `aluno_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `aluno_id` (`aluno_id`),
  CONSTRAINT `fotos_ibfk_1` FOREIGN KEY (`aluno_id`) REFERENCES `alunos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fotos`
--

LOCK TABLES `fotos` WRITE;
/*!40000 ALTER TABLE `fotos` DISABLE KEYS */;
INSERT INTO `fotos` VALUES (20,'teste.png','1687112613106_11008.png',NULL,'2023-06-18 18:23:33','2023-06-18 18:23:33'),(21,'teste.png','1687112645457_11008.png',NULL,'2023-06-18 18:24:05','2023-06-18 18:24:05'),(22,'teste.png','1687112651427_11008.png',NULL,'2023-06-18 18:24:11','2023-06-18 18:24:11'),(23,'teste.png','1687112652204_11008.png',NULL,'2023-06-18 18:24:12','2023-06-18 18:24:12'),(24,'download.jpg','1687112658974_11008.jpg',NULL,'2023-06-18 18:24:18','2023-06-18 18:24:18'),(25,'download.jpg','1687112659746_11008.jpg',NULL,'2023-06-18 18:24:19','2023-06-18 18:24:19'),(26,'download.jpg','1687114374309_11008.jpg',NULL,'2023-06-18 18:52:54','2023-06-18 18:52:54'),(27,'353676135_262673419678918_7460712453006381020_n.jpg','1687291560222_10528.jpg',NULL,'2023-06-20 20:06:00','2023-06-20 20:06:00'),(28,'foto.jpg','1687291587265_10528.jpg',NULL,'2023-06-20 20:06:27','2023-06-20 20:06:27'),(29,'FnJ2Cq4XwAAKobk.jpg','1687291594754_10528.jpg',NULL,'2023-06-20 20:06:34','2023-06-20 20:06:34'),(30,'foto.jpg','1687292628472_10528.jpg',NULL,'2023-06-20 20:23:48','2023-06-20 20:23:48'),(31,'images.png','1687292639175_10528.png',NULL,'2023-06-20 20:23:59','2023-06-20 20:23:59'),(32,'images.jpg','1687292645777_10528.jpg',NULL,'2023-06-20 20:24:05','2023-06-20 20:24:05'),(33,'images (1).jpg','1687294667637_10528.jpg',78,'2023-06-20 20:57:47','2023-06-20 20:57:47'),(34,'images.jpg','1687298561007_10528.jpg',79,'2023-06-20 22:02:41','2023-06-20 22:02:41'),(35,'images.png','1687298567925_10528.png',79,'2023-06-20 22:02:47','2023-06-20 22:02:47'),(36,'images.jpg','1687298783500_10528.jpg',82,'2023-06-20 22:06:23','2023-06-20 22:06:23');
/*!40000 ALTER TABLE `fotos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-20 19:11:08