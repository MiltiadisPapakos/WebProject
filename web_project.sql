-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 28, 2020 at 02:15 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `uid` varchar(35) NOT NULL,
  `key_timestamp` bigint(20) NOT NULL,
  `upload_timestamp` bigint(20) NOT NULL,
  `latitude` bigint(20) NOT NULL,
  `longitude` bigint(20) NOT NULL,
  `activity` varchar(25) NOT NULL DEFAULT 'UNKNOWN',
  `heading` int(11) DEFAULT NULL,
  `confidence` int(11) DEFAULT NULL,
  `loc_timestamp` bigint(20) NOT NULL,
  `act_timestamp` bigint(20) DEFAULT NULL,
  `vertical_accuracy` int(11) DEFAULT NULL,
  `velocity` int(11) DEFAULT NULL,
  `accuracy` int(11) DEFAULT NULL,
  `altitude` int(11) DEFAULT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `hour` int(11) NOT NULL,
  `day_of_week` int(2) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`uid`, `key_timestamp`, `upload_timestamp`, `latitude`, `longitude`, `activity`, `heading`, `confidence`, `loc_timestamp`, `act_timestamp`, `vertical_accuracy`, `velocity`, `accuracy`, `altitude`, `year`, `month`, `day`, `hour`, `day_of_week`, `id`) VALUES
('7a406d391c663660f52362a4cc6590bd', 1571311979000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1571311979000, 1571311979000, -1, 16, 5, 51, 2019, 10, 17, 13, 4, 56746),
('7a406d391c663660f52362a4cc6590bd', 1576323179000, 1601294939, 382446957, 217421968, 'UNKNOWN', -1, -1, 1576323179000, -1, -1, 16, 5, 51, 2019, 12, 14, 13, 6, 56747),
('7a406d391c663660f52362a4cc6590bd', 1577878379000, 1601294939, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1577878379000, 1577878379000, -1, 16, 5, 51, 2020, 1, 1, 13, 3, 56748),
('7a406d391c663660f52362a4cc6590bd', 1577878379000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1577878379000, 1577878379000, -1, 16, 5, 51, 2020, 1, 1, 13, 3, 56749),
('7a406d391c663660f52362a4cc6590bd', 1581507179000, 1601294939, 382446957, 217421968, 'UNKNOWN', -1, -1, 1581507179000, -1, -1, 16, 5, 51, 2020, 2, 12, 13, 3, 56750),
('7a406d391c663660f52362a4cc6590bd', 1581507179000, 1601294939, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1581507179000, 1581507179000, -1, 16, 5, 51, 2020, 2, 12, 13, 3, 56751),
('7a406d391c663660f52362a4cc6590bd', 1581507179000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1581507179000, 1581507179000, -1, 16, 5, 51, 2020, 2, 12, 13, 3, 56752),
('7a406d391c663660f52362a4cc6590bd', 1585827179000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1585827179000, 1585827179000, -1, 16, 5, 51, 2020, 4, 2, 13, 4, 56753),
('7a406d391c663660f52362a4cc6590bd', 1592221679000, 1601294939, 382446957, 217421968, 'UNKNOWN', -1, -1, 1592221679000, -1, -1, 16, 5, 51, 2020, 6, 15, 13, 1, 56754),
('7a406d391c663660f52362a4cc6590bd', 1592221679000, 1601294939, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1592221679000, 1592221679000, -1, 16, 5, 51, 2020, 6, 15, 13, 1, 56755),
('7a406d391c663660f52362a4cc6590bd', 1598183279000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1598183279000, 1598183279000, -1, 16, 5, 51, 2020, 8, 7, 13, 0, 56756),
('7a406d391c663660f52362a4cc6590bd', 1600861679000, 1601294939, 382446957, 217421968, 'UNKNOWN', -1, -1, 1600861679000, -1, -1, 16, 5, 51, 2020, 9, 23, 13, 3, 56757),
('7a406d391c663660f52362a4cc6590bd', 1600861679000, 1601294939, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1600861679000, 1600861679000, -1, 16, 5, 51, 2020, 9, 23, 13, 3, 56758),
('7a406d391c663660f52362a4cc6590bd', 1600861679000, 1601294939, 382446957, 217421968, 'WALKING', -1, -1, 1600861679000, 1600861679000, -1, 16, 5, 51, 2020, 9, 23, 13, 3, 56759),
('9ce72867c342d0e4a021b4572e6c92ec', 1600169579000, 1601295145, 382446957, 217421968, 'WALKING', -1, -1, 1600169579000, 1600169579000, -1, 16, 5, 51, 2020, 9, 15, 13, 2, 56760),
('b3211ad0137d64d6c1d207901d454718', 1600169579000, 1601295191, 382446957, 217421968, 'UNKNOWN', -1, -1, 1600169579000, -1, -1, 16, 5, 51, 2020, 9, 15, 13, 2, 56761),
('b3211ad0137d64d6c1d207901d454718', 1600169579000, 1601295191, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1600169579000, 1600169579000, -1, 16, 5, 51, 2020, 9, 15, 13, 2, 56762),
('b3211ad0137d64d6c1d207901d454718', 1600169579000, 1601295191, 382446957, 217421968, 'WALKING', -1, -1, 1600169579000, 1600169579000, -1, 16, 5, 51, 2020, 9, 15, 13, 2, 56763);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` varchar(35) NOT NULL,
  `username` varchar(25) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(35) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `first_name`, `last_name`, `email`, `password`, `is_admin`) VALUES
('4e3fea0d5cf004e73e8e305d4e002c40', 'ted', 'Ted', 'Mosby', 'tm@gmail.com', 'a158d34bb442ef2aa47a332a2299751a', 0),
('6d49d8a756ae4453d9e22943a77d9e46', 'marshal', 'Marshal', 'Erikson', 'me@gmail.com', '773f829efa25e883380e7cd2e1566d53', 0),
('7a406d391c663660f52362a4cc6590bd', 'milt', 'Miltos', 'Papakos', 'miltos.papakos@gmail.com', '58848ab872e1dd84490958684fa7a483', 0),
('9ce72867c342d0e4a021b4572e6c92ec', 'kon', 'Konstantinos', 'Syrokostas', 'ksyro98@protonmail.com', '932a1ca7dc83805d2b216785daf8a438', 0),
('a2819472fe98268c703c1c9f706b7537', 'admin', 'admin', 'admin', 'admin@admin.com', 'cef2c4e0231e14dbe5078f7fda4c4a44', 1),
('b3211ad0137d64d6c1d207901d454718', 'barney', 'Barney', 'Stinson', 'bs@gmail.com', '3e55aa0cef2aa29d60df70c5ade8306b', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UID_CONSTRAINT` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56764;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `UID_CONSTRAINT` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
