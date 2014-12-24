-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 12, 2014 at 09:30 PM
-- Server version: 5.6.16
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chirper`
--

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE IF NOT EXISTS `Category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`category_id`, `title`, `description`) VALUES
(1, 'Rock', ''),
(2, 'Pop', ''),
(3, 'Jazz', ''),
(4, 'Alternative', ''),
(5, 'Rap', '');

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE IF NOT EXISTS `Comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_date` text NOT NULL,
  `content` text NOT NULL,
  `user_id` text NOT NULL,
  `post_id` text NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`comment_id`, `comment_date`, `content`, `user_id`, `post_id`) VALUES
(1, '2014-12-07 @ 14:31', 'This song is great! I love it :)', '09bd9eba-9168-4736-aab9-489571544fc8', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a'),
(2, '2014-12-07 @ 15:26', 'That''s awesome. Please upload some more songs of Michael Buble :)', '52228d04-a16a-b67b-6e9c-5ffda8b4f2f7', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a'),
(3, '2014-12-07 @ 21:21', 'I''m feeling so good. lol', '52228d04-a16a-b67b-6e9c-5ffda8b4f2f7', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a'),
(6, '2014-12-07 @ 21:30', 'Hell yeah!!!', '564d386e-fbbe-24b9-7f4a-cb47da64b491', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a'),
(7, '2014-12-07 @ 21:33', 'Upload "Home" plz....', '09bd9eba-9168-4736-aab9-489571544fc8', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a'),
(8, '2014-12-07 @ 21:37', 'What a good song!!!', '09bd9eba-9168-4736-aab9-489571544fc8', '2670cf7b-c552-bbeb-980f-fb14d8f98b5a');

-- --------------------------------------------------------

--
-- Table structure for table `Post`
--

CREATE TABLE IF NOT EXISTS `Post` (
  `post_id` text NOT NULL,
  `title` text NOT NULL,
  `post_date` text NOT NULL,
  `content` text NOT NULL,
  `image_url` text NOT NULL,
  `music_url` text NOT NULL,
  `song_name` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `user_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Post`
--

INSERT INTO `Post` (`post_id`, `title`, `post_date`, `content`, `image_url`, `music_url`, `song_name`, `category_id`, `user_id`) VALUES
('99fcabd6-f0ff-4d0c-80f7-913d7ba1bf4e', 'One Republic', '2014-12-04 @ 11:54', 'OneRepublic is an American, self-proclaimed "genreless", band formed in Colorado Springs in 2002 by Ryan Tedder and Zach Filkins.', 'uploads/onerepublic.jpg', 'uploads/counting_stars.mp3', 'Counting Stars', 4, '09bd9eba-9168-4736-aab9-489571544fc8'),
('4cf621eb-838f-49cf-a21c-4c646c3343ee', 'Evanescence', '2014-12-04 @ 14:00', 'Evanescence is a grammy-winning band founded in Little Rock, Arkansas, United States in 1995 by singer/pianist Amy Lee and guitarist Ben Moody (who left in 2003). ', 'uploads/evanescence.png', 'uploads/bringmetolife.mp3', 'Bring Me To Life', 1, '09bd9eba-9168-4736-aab9-489571544fc8'),
('e78b8751-fd40-dafa-9556-aca40fc75b8a', 'Linkin Park', '2014-12-05 @ 1:54', '"Numb" is the thirteenth and final song on the 2003 albumÂ MeteoraÂ by the American nu metal bandÂ Linkin Park. It was released as albumâ€™s third single.', 'uploads/numb.png', 'uploads/numb.mp3', 'Numb - Meteora', 1, '09bd9eba-9168-4736-aab9-489571544fc8'),
('d896d7f5-0338-fc6f-6ff4-5dd6074d3957', 'Rihanna', '2014-12-05 @ 16:59', 'Stay is a song by Barbadian recording artist Rihanna from her seventh studio album Unapologetic (2012).', 'uploads/rihanna.png', 'uploads/stay.mp3', 'Stay - Ft Mikky Ekko', 2, '09bd9eba-9168-4736-aab9-489571544fc8'),
('5a2ad779-4cfc-4b90-a707-4fb86b4a4344', 'Miley Cyrus', '2014-12-05 @ 20:00', 'Miley Ray Cyrus (born Destiny Hope Cyrus; November 23, 1992 in Nashville, Tennessee, United States) is an American actress and pop singer.', 'uploads/miley_cyrus.png', 'uploads/wrecking ball.mp3', 'Wrecking Ball', 2, '09bd9eba-9168-4736-aab9-489571544fc8'),
('cf7d8f96-3bb0-95b9-1abd-b65ca450a528', 'Adele', '2014-12-05 @ 14:00', 'Adele Laurie Blue Adkins, (born 5 May 1988), is a Grammy Award-Winning English singer-songwriter from Enfield, North London. Her debut album, 19, was released in January 2008 and entered the UK album chart at #1.', 'uploads/adele.png', 'uploads/set fire to the rain.mp3', 'Set fire to the rain', 2, '09bd9eba-9168-4736-aab9-489571544fc8'),
('a49d0383-d789-aae3-f11b-07e05f1a410c', 'Fort Minor', '2014-12-07 @ 10:44', 'Fort Minor is theÂ hip hopÂ side-project ofÂ Mike Shinoda, the vocalist, guitarist and songwriter of theÂ alternative rockÂ bandÂ Linkin Park.', 'uploads/fort_minor.png', 'uploads/remember the name.mp3', 'Remember The Name', 5, '564d386e-fbbe-24b9-7f4a-cb47da64b491'),
('2670cf7b-c552-bbeb-980f-fb14d8f98b5a', 'Michael BublÃ©', '2014-12-07 @ 10:54', 'Michael Steven BublÃ© (born 9 September 1975 in Burnaby, British Columbia) is a Canadian singer and actor. He has won several awards, including three Grammy Awards and multiple Juno Awards.Â ', 'uploads/michael_bubl.png', 'uploads/feeling good.mp3', 'Feeling Good', 3, '564d386e-fbbe-24b9-7f4a-cb47da64b491'),
('867dd42e-4ced-1bf6-e7a9-add4e9ebff82', 'The Script', '2014-12-07 @ 20:01', 'The Script are aÂ pop rockÂ band which formed in 2001 in Dublin, Ireland. The band consists ofDanny Oâ€™DonoghueÂ (vocals),Â Mark SheehanÂ (guitar) andÂ Glen PowerÂ (drums).', 'uploads/the_script.png', 'uploads/hall of fame.mp3', 'Hall Of Fame', 1, '52228d04-a16a-b67b-6e9c-5ffda8b4f2f7'),
('c713c83b-72dc-c130-a336-0753f8f549df', 'Eminem', '2014-12-07 @ 20:39', 'Marshall Bruce Mathers III (born October 17, 1972), better known by his stage name Eminem/Slim Shady is an American rapper and record producer.', 'uploads/eminem_post.png', 'uploads/when im gone.mp3', 'When i.m Gone', 5, '52228d04-a16a-b67b-6e9c-5ffda8b4f2f7'),
('75247bba-9823-7cc2-3ded-5496b81a0f6f', 'Maroon 5', '2014-12-10 @ 20:01', 'Capturing their first of three Grammy Awards as â€˜Best New Artist of 2005â€™ and then going on to sell more than 17 million albums worldwide, the AmericanÂ popÂ andÂ rockÂ bandÂ Maroon 5â€™s releases that have gone gold and platinum in over 35 countries.', 'uploads/maroon_5.png', 'uploads/Moves Like Jagger.mp3', 'Moves Like Jagger', 2, '52228d04-a16a-b67b-6e9c-5ffda8b4f2f7');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `username`, `password`, `email`, `image`) VALUES
('09bd9eba-9168-4736-aab9-489571544fc8', 'long.nguyen', '123456', 'long.nd144@gmail.com', 'uploads/long.nguyen.jpg'),
('52228d04-a16a-b67b-6e9c-5ffda8b4f2f7', 'david.craig', '123456', 'david.craig@hotmail.com', 'uploads/craig_david.jpg'),
('564d386e-fbbe-24b9-7f4a-cb47da64b491', 'eminem', '123456', 'eminem@hotmail.com', 'uploads/eminem.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
