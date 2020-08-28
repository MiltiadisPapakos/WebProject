-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 29, 2020 at 01:11 AM
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
  `hour` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`uid`, `key_timestamp`, `latitude`, `longitude`, `activity`, `heading`, `confidence`, `loc_timestamp`, `act_timestamp`, `vertical_accuracy`, `velocity`, `accuracy`, `altitude`, `year`, `month`, `day`, `hour`) VALUES
('9ce72867c342d0e4a021b4572e6c92ec', 1510083140876, 382446957, 217421968, 'WALKING', -1, -1, 1510083175000, 1510083140876, -1, 16, 5, 51, 2017, 11, 7, 21),
('9ce72867c342d0e4a021b4572e6c92ec', 1510083155000, 382446957, 217421968, 'UNKNOWN', -1, -1, 1510083155000, -1, -1, 16, 5, 51, 2017, 11, 7, 21),
('9ce72867c342d0e4a021b4572e6c92ec', 1510083220896, 382446957, 217421968, 'IN_VEHICLE', -1, -1, 1510083156000, 1510083220896, -1, 16, 5, 51, 2017, 11, 7, 21);

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
('2ec1260d246d4f2dde6e9d67914391bf', 'admin', 'admin', 'admin', 'admin@admin.com', 'a43c27c2babefd68df8a694900f30a1c', 1),
('9ce72867c342d0e4a021b4572e6c92ec', 'kon', 'Konstantinos', 'Syrokostas', 'ksyro98@protonmail.com', '6a2392f900889b77fe891e4cc7b1c4c0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`uid`,`key_timestamp`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`,`email`);

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
