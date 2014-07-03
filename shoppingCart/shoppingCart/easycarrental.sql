-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2013 at 12:21 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `easycarrental`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `quantity`) VALUES
(1, 'Mercedes Benz m lx', 'Manual Transmission, Air Conditioning, \r\n\r\n10 km per liter', 469.49, 5),
(2, 'Toyota Fortuner', 'Manual Transmission, Air Conditioning, \r\n\r\n14 km per liter', 459, 10),
(3, 'Nissan X Trail', 'Auto Transmission, Air Conditioning,\r\n\r\n12 km per liter', 399, 10),
(4, 'Toyota Sequoia', 'Auto Transmission, Air Conditioning,\r\n\r\n12 km per liter', 269, 10),
(5, 'Nissan X Trail', 'Auto Transmission, Air Conditioning,\r\n\r\n12 km per liter', 399, 10),
(6, 'Toyota Sequoia', 'Auto Transmission, Air Conditioning,\r\n\r\n12 km per liter', 269, 10),
(7, 'Mercedes Benz GLK', 'Auto Transmission, Air Conditioning, \r\n\r\n5 km per liter', 569, 10),
(8, 'Mercedes Benz GLK', 'Auto Transmission, Air Conditioning, \r\n\r\n5 km per liter', 569, 10);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
