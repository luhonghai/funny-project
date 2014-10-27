-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Mar 20, 2012 at 06:44 PM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `b9gcs`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `administrators`
-- 

CREATE TABLE `administrators` (
  `ADMINID` bigint(20) NOT NULL auto_increment,
  `email` varchar(80) NOT NULL default '',
  `username` varchar(80) NOT NULL default '',
  `password` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`ADMINID`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `administrators`
-- 

INSERT INTO `administrators` VALUES (1, 'luhonghai@gmail.com', 'Admin', 'c5285abd05d46a954151ddf9b8128114');

-- --------------------------------------------------------

-- 
-- Table structure for table `advertisements`
-- 

CREATE TABLE `advertisements` (
  `AID` bigint(30) NOT NULL auto_increment,
  `description` varchar(200) NOT NULL default '',
  `code` text NOT NULL,
  `active` enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (`AID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

-- 
-- Dumping data for table `advertisements`
-- 

INSERT INTO `advertisements` VALUES (1, '300 x 250 pixels', '<div style="width:300px; height:250px; border:1px solid #DFDFDF;" align="center"><br/><br/><br/><br/><br/><br/>Insert Your Advertisement Here</div>', '1');
INSERT INTO `advertisements` VALUES (2, '300 x 300 pixels', '<div style="width:300px; height:300px; border:1px solid #DFDFDF;" align="center"><br/><br/><br/><br/><br/><br/><br/>Insert Your Advertisement Here</div>', '1');
INSERT INTO `advertisements` VALUES (3, '728 x 90 pixels', '<div style="width:728px; height:90px; border:1px solid #DFDFDF;" align="center"><br/><br/>Insert Your Advertisement Here</div>', '1');
INSERT INTO `advertisements` VALUES (4, 'NSFW - 300 x 250 pixels', '<div style=\\''width:300px; height:250px; border:1px solid #DFDFDF;\\'' align=\\''center\\''>\r\nAd No.1\r\n</div>', '1');
INSERT INTO `advertisements` VALUES (5, 'NSFW - 300 x 300 pixels', '<div style="width:300px; height:300px; border:1px solid #DFDFDF;" align="center"><br/><br/><br/><br/><br/><br/><br/>Insert Your Advertisement Here</div>', '1');
INSERT INTO `advertisements` VALUES (6, 'NSFW - 728 x 90 pixels', '<div style="width:728px; height:90px; border:1px solid #DFDFDF;" align="center"><br/><br/>Insert Your Advertisement Here</div>', '1');

-- --------------------------------------------------------

-- 
-- Table structure for table `bans_ips`
-- 

CREATE TABLE `bans_ips` (
  `ip` varchar(20) NOT NULL,
  UNIQUE KEY `ip` (`ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- Dumping data for table `bans_ips`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `config`
-- 

CREATE TABLE `config` (
  `setting` varchar(60) NOT NULL default '',
  `value` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- Dumping data for table `config`
-- 

INSERT INTO `config` VALUES ('site_email', 'support@best9gagclonescript.com');
INSERT INTO `config` VALUES ('site_name', '9Gag Clone Script');
INSERT INTO `config` VALUES ('max_syndicate_results', '25');
INSERT INTO `config` VALUES ('maximum_results', '1000000');
INSERT INTO `config` VALUES ('emailsender', 'Admin');
INSERT INTO `config` VALUES ('max_img_size', '200');
INSERT INTO `config` VALUES ('items_per_page', '10');
INSERT INTO `config` VALUES ('approve_stories', '0');
INSERT INTO `config` VALUES ('metadescription', '9GAG Clone Script is the best clone of 9GAG');
INSERT INTO `config` VALUES ('metakeywords', '9gag clone, 9gag script, 9gag clone script, clone, script');
INSERT INTO `config` VALUES ('pub_mod', '1');
INSERT INTO `config` VALUES ('ver', '3.5.1');
INSERT INTO `config` VALUES ('FACEBOOK_PROFILE', 'YOUR_FACEBOOK_WEBSITE_USERNAME');
INSERT INTO `config` VALUES ('myes', '5');
INSERT INTO `config` VALUES ('mno', '5');
INSERT INTO `config` VALUES ('twitter', 'YOUR_TWITTER_USERNAME');
INSERT INTO `config` VALUES ('FACEBOOK_APP_ID', '');
INSERT INTO `config` VALUES ('FACEBOOK_SECRET', '');
INSERT INTO `config` VALUES ('enable_fc', '1');
INSERT INTO `config` VALUES ('mtrend', '10');
INSERT INTO `config` VALUES ('quota', '15');
INSERT INTO `config` VALUES ('contact_email', 'contact@yourdomain.com');
INSERT INTO `config` VALUES ('short_urls', '1');
INSERT INTO `config` VALUES ('TWITTER_APP_ID', 'Twitter Application ID');
INSERT INTO `config` VALUES ('TWITTER_APP_SECRET', 'Twitter Application Secret');
INSERT INTO `config` VALUES ('FACEBOOK_ADMIN', 'Facebook Admin ID');
INSERT INTO `config` VALUES ('lwm', '1');
INSERT INTO `config` VALUES ('twm', '1');
INSERT INTO `config` VALUES ('AUTOSCROLL', '1');
INSERT INTO `config` VALUES ('thumbs', '1');
INSERT INTO `config` VALUES ('displaywm', '1');
INSERT INTO `config` VALUES ('TC', '1');
INSERT INTO `config` VALUES ('safemode', '1');
INSERT INTO `config` VALUES ('ganalytics', '');
INSERT INTO `config` VALUES ('vupload', '1');
INSERT INTO `config` VALUES ('fixenabled', '1');
INSERT INTO `config` VALUES ('RSS', '1');
INSERT INTO `config` VALUES ('topgags', '1');
INSERT INTO `config` VALUES ('trendingenabled', '1');
INSERT INTO `config` VALUES ('voteforvisitor', '0');
INSERT INTO `config` VALUES ('SEO', '1');
INSERT INTO `config` VALUES ('sitemap', '1');
INSERT INTO `config` VALUES ('truncate', '1');
INSERT INTO `config` VALUES ('autoFBpost', '1');
INSERT INTO `config` VALUES ('recommended', '2');
INSERT INTO `config` VALUES ('wmfont', 'BERNHC.TTF');
INSERT INTO `config` VALUES ('fsize', '24');
INSERT INTO `config` VALUES ('channels', '1');
INSERT INTO `config` VALUES ('rhome', '1');
INSERT INTO `config` VALUES ('wmhieght', '50');
INSERT INTO `config` VALUES ('blackr', '0');
INSERT INTO `config` VALUES ('blackb', '0');
INSERT INTO `config` VALUES ('blackg', '0');
INSERT INTO `config` VALUES ('whiter', '244');
INSERT INTO `config` VALUES ('whiteb', '244');
INSERT INTO `config` VALUES ('whiteg', '244');
INSERT INTO `config` VALUES ('regredirect', '0');
INSERT INTO `config` VALUES ('index', '0');
INSERT INTO `config` VALUES ('postfolder', '/gag/');
INSERT INTO `config` VALUES ('up_points', '10');
INSERT INTO `config` VALUES ('view_points', '1');
INSERT INTO `config` VALUES ('share1', '1');
INSERT INTO `config` VALUES ('share2', '2');
INSERT INTO `config` VALUES ('NSFWADS', '0');
INSERT INTO `config` VALUES ('website_name', 'Best 9Gag Clone Script');
INSERT INTO `config` VALUES ('populargags', '3');
INSERT INTO `config` VALUES ('topposts', '1');

-- --------------------------------------------------------

-- 
-- Table structure for table `channels`
-- 

CREATE TABLE `channels` (
`CID` BIGINT( 20 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`cname` VARCHAR( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE = MYISAM ;
INSERT INTO `channels` VALUES (1,'Memes');
INSERT INTO `channels` VALUES (2,'Videos');
INSERT INTO `channels` VALUES (3,'Family');
INSERT INTO `channels` VALUES (4,'Collage');
INSERT INTO `channels` VALUES (5,'NSFW');
INSERT INTO `channels` VALUES (6,'Photogenic');

-- --------------------------------------------------------

-- 
-- Table structure for table `members`
-- 

CREATE TABLE `members` (
  `USERID` bigint(20) NOT NULL auto_increment,
  `email` varchar(80) NOT NULL default '',
  `username` varchar(80) NOT NULL default '',
  `password` varchar(50) NOT NULL default '',
  `pwd` varchar(50) NOT NULL,
  `fullname` varchar(200) NOT NULL default '',
  `gender` varchar(6) NOT NULL default '',
  `description` text NOT NULL,
  `country` varchar(100) NOT NULL default '',
  `posts` INT( 20 ) NOT NULL DEFAULT '0',
  `yourviewed` int(20) NOT NULL default '0',
  `profileviews` int(20) NOT NULL default '0',
  `youviewed` bigint(20) NOT NULL default '0',
  `addtime` varchar(20) NOT NULL default '',
  `lastlogin` varchar(20) NOT NULL default '',
  `verified` char(1) NOT NULL default '1',
  `status` enum('1','0') NOT NULL default '1',
  `profilepicture` varchar(100) NOT NULL default '',
  `remember_me_key` varchar(32) default NULL,
  `remember_me_time` datetime default NULL,
  `ip` varchar(20) NOT NULL,
  `lip` varchar(20) NOT NULL,
  `website` varchar(200) NOT NULL,
  `news` int(1) NOT NULL default '0',
  `mylang` varchar(20) NOT NULL,
  `color1` varchar(6) NOT NULL default '000000',
  `color2` varchar(6) NOT NULL default 'FFFFFF',
  `filter` bigint(1) NOT NULL default '1',
  `points` BIGINT( 20 ) NOT NULL ,

  PRIMARY KEY  (`USERID`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `members`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `members_passcode`
-- 

CREATE TABLE `members_passcode` (
  `USERID` bigint(20) NOT NULL default '0',
  `code` varchar(30) NOT NULL default '',
  PRIMARY KEY  (`USERID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- Dumping data for table `members_passcode`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `members_verifycode`
-- 

CREATE TABLE `members_verifycode` (
  `USERID` bigint(20) NOT NULL default '0',
  `code` varchar(30) NOT NULL default '',
  PRIMARY KEY  (`USERID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- Dumping data for table `members_verifycode`
-- 

INSERT INTO `members_verifycode` VALUES (0, 'h394Y1328501678');

-- --------------------------------------------------------

-- 
-- Table structure for table `posts`
-- 

CREATE TABLE `posts` (
  `PID` bigint(20) NOT NULL auto_increment,
  `USERID` bigint(20) NOT NULL default '0',
  `story` text NOT NULL,
  `tags` varchar(200) NOT NULL,
  `source` varchar(200) NOT NULL,
  `CID` bigint( 20 ) NOT NULL,
  `nsfw` int(1) NOT NULL default '0',
  `pic` varchar(20) NOT NULL,
  `youtube_key` varchar(20) NOT NULL,
  `fod_key` varchar(20) NOT NULL,
  `vfy_key` VARCHAR(50) NOT NULL,
  `vmo_key` VARCHAR(50) NOT NULL,
  `url` text NOT NULL,
  `time_added` varchar(20) default NULL,
  `date_added` date NOT NULL default '0000-00-00',
  `active` char(1) NOT NULL default '',
  `phase` bigint(1) NOT NULL default '0',
  `favclicks` bigint(50) NOT NULL default '0',
  `last_viewed` varchar(20) NOT NULL default '',
  `mod_yes` bigint(20) NOT NULL default '0',
  `mod_no` bigint(20) NOT NULL default '0',
  `pip` varchar(20) NOT NULL,
  `pip2` varchar(20) NOT NULL,
  `unfavclicks` bigint(50) NOT NULL default '0',
  `fix` bigint(20) NOT NULL default '0',
  `short` varchar(20) NOT NULL,
  PRIMARY KEY  (`PID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `posts`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `posts_favorited`
-- 

CREATE TABLE `posts_favorited` (
  `FID` bigint(20) NOT NULL auto_increment,
  `USERID` bigint(25) NOT NULL default '0',
  `PID` bigint(25) NOT NULL default '0',
  PRIMARY KEY  (`FID`),
  UNIQUE KEY `USERID` (`USERID`,`PID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `posts_favorited`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `posts_reports`
-- 

CREATE TABLE `posts_reports` (
  `RID` bigint(20) NOT NULL auto_increment,
  `PID` bigint(20) NOT NULL default '0',
  `time` varchar(20) default NULL,
  `ip` varchar(20) NOT NULL,
  `reason` bigint(1) NOT NULL,
  PRIMARY KEY  (`RID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `posts_reports`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `posts_unfavorited`
-- 

CREATE TABLE `posts_unfavorited` (
  `FID` bigint(20) NOT NULL auto_increment,
  `USERID` bigint(25) NOT NULL default '0',
  `PID` bigint(25) NOT NULL default '0',
  PRIMARY KEY  (`FID`),
  UNIQUE KEY `USERID` (`USERID`,`PID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `posts_unfavorited`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `static`
-- 

CREATE TABLE `static` (
  `ID` bigint(30) NOT NULL auto_increment,
  `title` varchar(255) NOT NULL default '',
  `value` text NOT NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

-- 
-- Dumping data for table `static`
-- 

INSERT INTO `static` VALUES (1, 'Terms Of Use', 'Insert your terms of use information here.<br><br>\r\n\r\nHTML is accepted.');
INSERT INTO `static` VALUES (2, 'Privacy Policy', 'Insert your privacy policy information here.<br><br>\r\n\r\nHTML is accepted.');
INSERT INTO `static` VALUES (3, 'About', 'Insert your about us information here.<br><br>\r\n\r\nHTML is accepted.');
INSERT INTO `static` VALUES (4, '9 Rules', 'Insert your 9 rules here.<br><br>\r\n\r\nHTML is accepted.');
INSERT INTO `static` VALUES (5, 'FAQ', 'Insert your frequently asked questions here.<br><br>\r\n\r\nHTML is accepted.');
