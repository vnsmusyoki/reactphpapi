-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 15, 2023 at 04:39 PM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guacuco_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int NOT NULL,
  `activity` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `starts_from` time NOT NULL,
  `subscribers` int NOT NULL DEFAULT '0',
  `ends_at` time NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `activity`, `starts_from`, `subscribers`, `ends_at`, `date_created`) VALUES
(1, 'FootBalls', '13:11:00', 2, '14:01:00', '2023-04-10 07:31:13'),
(3, 'BadMinton', '12:45:00', 1, '05:05:00', '2023-04-10 07:31:13'),
(7, 'Activity Name', '14:21:00', 0, '17:21:00', '2023-04-10 08:21:45');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int NOT NULL,
  `sender_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  `sender_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiver_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `sender_id`, `receiver_id`, `sender_name`, `receiver_name`, `message`, `date_created`) VALUES
(1, 10, 1, 'test account', 'evans kimeu edited lmmm', 'rewredede', '2023-04-09 01:35:28'),
(2, 10, 1, 'test account', 'evans kimeu edited lmmm', 'ijuhgf', '2023-04-09 01:37:24'),
(3, 10, 1, 'test account', 'evans kimeu edited lmmm', 'this is the third message', '2023-04-09 01:46:09'),
(4, 10, 1, 'test account', 'evans kimeu edited lmmm', 'this is the third message', '2023-04-09 01:46:11'),
(5, 10, 1, 'test account', 'evans kimeu edited lmmm', 'this is the third message and changed', '2023-04-09 01:48:23'),
(6, 10, 1, 'test account', 'evans kimeu edited lmmm', 'deleting message ', '2023-04-09 01:50:08'),
(7, 10, 1, 'test account', 'evans kimeu edited lmmm', 'test clearing input', '2023-04-09 01:54:13'),
(8, 10, 1, 'test account', 'evans kimeu edited lmmm', 'test clearing input', '2023-04-09 01:54:16'),
(9, 10, 1, 'test account', 'evans kimeu edited lmmm', 'test clearing input', '2023-04-09 01:54:17'),
(10, 10, 2, 'test account', 'evans kimeu dkmekde', 'no chats for this conversation', '2023-04-09 01:54:35'),
(11, 10, 11, 'test account', 'kim tesiden', 'checking messages if they are being sent', '2023-04-09 01:55:15'),
(12, 16, 1, 'Gardener One', 'evans kimeu edited lmmm', 'mfkfmkrf', '2023-04-09 13:00:34'),
(13, 9, 15, 'Joseph Joseph', 'pool Manager', 'sent message to pool manager', '2023-04-09 13:46:34'),
(14, 11, 18, 'kim tesiden', 'Gardener Three', 'testing if meesgaes are working', '2023-04-09 13:58:58'),
(15, 2, 18, 'evans kimeu dkmekde', 'Gardener Three', 'testing the messages being sent', '2023-04-10 06:33:42');

-- --------------------------------------------------------

--
-- Table structure for table `garden_activities`
--

CREATE TABLE `garden_activities` (
  `id` int NOT NULL,
  `activity` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `operating_hours`
--

CREATE TABLE `operating_hours` (
  `id` int NOT NULL,
  `day` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `opening_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `closing_time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `name`, `phone_number`, `amount`, `status`, `code`, `date_created`) VALUES
(2, 20, 'kmdekmde kdmekde', '88884453', 500, 'Rejected', 'kmjnhdsd', '2023-04-10 07:25:54'),
(3, 20, 'kmdekmde kdmekde', '88884453', 500, 'Pending', 'ikjhgbnm', '2023-04-10 19:22:35');

-- --------------------------------------------------------

--
-- Table structure for table `pools`
--

CREATE TABLE `pools` (
  `id` int NOT NULL,
  `pool_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `opening_time` time DEFAULT NULL,
  `closing_time` time DEFAULT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pools`
--

INSERT INTO `pools` (`id`, `pool_name`, `capacity`, `status`, `opening_time`, `closing_time`, `date_created`) VALUES
(3, 'Edited pool Accounts', '18:35', 'Opened', '00:04:00', '14:31:00', '2023-04-15 11:31:32');

-- --------------------------------------------------------

--
-- Table structure for table `rentals`
--

CREATE TABLE `rentals` (
  `id` int NOT NULL,
  `rental_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `room_no` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `full_names` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shift` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area_assigned` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_names`, `email`, `category`, `password`, `gender`, `id_number`, `phone_number`, `shift`, `area_assigned`, `token`) VALUES
(8, 'testing register', 'refisyef@gmail.com', '/r-membership', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Joseph Joseph', 'josephtest@gmail.com', 'security', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'kim tesiden', 'kims@gmail.com', 'resident', '5f4dcc3b5aa765d61d8327deb882cf99', 'Male', '87653209', '9876543908', NULL, NULL, 'f22921c7f53be49e4bea58a2ac2afd6baff7766158341047e60c4af3e6e0773c'),
(14, 'demc d mcd', 'smwks@gmail.com', 'resident', '5f4dcc3b5aa765d61d8327deb882cf99', 'Male', '34532345', '1112223212', NULL, NULL, NULL),
(15, 'pool Managers', 'poolmanager@gmail.com', 'pool', '48cccca3bab2ad18832233ee8dff1b0b', 'Male', '98374834', '3749384858', NULL, NULL, '5d0609698a18f138a63a748fbea092226be0919e8bffb325f88ec5af9e3700ba'),
(16, 'Gardener One', 'gardener@gmail.com', 'gardener', '5f4dcc3b5aa765d61d8327deb882cf99', 'Male', '98733000', '4720882594', NULL, 'Business', 'b87d526b74173da9151b0bec08ebebb52656b6dfb9e2bef49fc4d8e67e6ab806'),
(18, 'Gardener Three', 'vndsmusyoki@gmail.com', 'gardener', '5f4dcc3b5aa765d61d8327deb882cf99', 'Male', '98733232', '2705176438', NULL, 'Business', NULL),
(20, 'kmdekmde kdmekde', 'kd@gmail.com', 'resident', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, '4398733230', '88884453', NULL, NULL, 'e8692bedd1b59ae8693ff79c4a229ecd8e3758f44463339f9126e2fbf35da3ca'),
(21, 'visitor account', 'visitor@gmail.com', 'visitor', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, NULL, '9875438974', NULL, NULL, '027b96fa59d772ce7260dbf73318c80b7c89879ad1c725c09bae0c579b12a83c'),
(23, 'Joesphat Name', 'kipchumbadennis10@gmail.com', 'visitor', 'bee50a7f83d5119426eb6a8a81e29042', NULL, NULL, '7776666478', NULL, NULL, NULL),
(25, 'test', 'testresident@gmail.com', 'resident', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, '43434343', '2221118921', NULL, NULL, '87e26377cfe5d1c71bbe62193e04dd3330a04b0970c270f8f7c77e7ecace566f'),
(26, 'garden check', 'visitored@gmail.com', 'visitor', '5f4dcc3b5aa765d61d8327deb882cf99', NULL, '99955545', '4443332323', NULL, NULL, '634939ebd2d60edf5bc314efb6b8fdd697ec3cb18495f09544df9320d6ec460c');

-- --------------------------------------------------------

--
-- Table structure for table `user_enrolled_activities`
--

CREATE TABLE `user_enrolled_activities` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `activity_id` int NOT NULL,
  `date_joined` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `activity_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_enrolled_activities`
--

INSERT INTO `user_enrolled_activities` (`id`, `user_id`, `activity_id`, `date_joined`, `activity_name`) VALUES
(21, 20, 1, '2023-04-10 09:19:50', 'FootBalls'),
(22, 20, 3, '2023-04-10 09:19:52', 'BadMinton'),
(27, 26, 1, '2023-04-15 09:59:30', 'FootBalls');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `car_model` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `user_id`, `car_model`, `reg_number`, `date_created`) VALUES
(3, 21, 'Vehicle AM', '76hdgftr', '2023-04-12 09:34:47');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `id` int NOT NULL,
  `full_names` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `visiting_area` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `check_in` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_out` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`id`, `full_names`, `phone_number`, `visiting_area`, `check_in`, `check_out`, `gender`) VALUES
(1, 'visitor one', '4333234590', 'Swimming Pool', 'Apr, 09 2023, 11:11:48 AM', 'Apr, 09 2023, 11:37:35 AM', 'Male'),
(3, 'new visitors', '4333234590', 'Gym', 'Apr, 09 2023, 01:28:35 PM', 'Apr, 09 2023, 01:35:16 PM', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `garden_activities`
--
ALTER TABLE `garden_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operating_hours`
--
ALTER TABLE `operating_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pools`
--
ALTER TABLE `pools`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_enrolled_activities`
--
ALTER TABLE `user_enrolled_activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_id` (`activity_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `garden_activities`
--
ALTER TABLE `garden_activities`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `operating_hours`
--
ALTER TABLE `operating_hours`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pools`
--
ALTER TABLE `pools`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rentals`
--
ALTER TABLE `rentals`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user_enrolled_activities`
--
ALTER TABLE `user_enrolled_activities`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_enrolled_activities`
--
ALTER TABLE `user_enrolled_activities`
  ADD CONSTRAINT `user_enrolled_activities_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_enrolled_activities_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
