-- MySQL Script generated by MySQL Workbench
-- Sun Jun  4 00:50:12 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema pro_habits
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pro_habits
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pro_habits` DEFAULT CHARACTER SET utf8 ;
USE `pro_habits` ;

-- -----------------------------------------------------
-- Table `pro_habits`.`commit_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`commit_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`commits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`commits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `commit_type_id` INT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `day` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_commits_to_commit_types_idx` (`commit_type_id` ASC),
  CONSTRAINT `fk_commits_to_commit_types`
    FOREIGN KEY (`commit_type_id`)
    REFERENCES `pro_habits`.`commit_types` (`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sub` VARCHAR(245) NOT NULL,
  `name` VARCHAR(245) NULL,
  `nickname` VARCHAR(245) NULL,
  `picture` VARCHAR(245) NULL,
  `gender` VARCHAR(45) NULL,
  `day` INT NULL DEFAULT 1,
  `next_available` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sub_UNIQUE` (`sub` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`users_commits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`users_commits` (
  `user_id` INT NOT NULL,
  `commit_id` INT NOT NULL,
  `done` TINYINT(1) NULL DEFAULT 0,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `fk_uc_to_u_idx` (`user_id` ASC),
  INDEX `fk_uc_to_c_idx` (`commit_id` ASC),
  PRIMARY KEY (`user_id`, `commit_id`),
  CONSTRAINT `fk_uc_to_u`
    FOREIGN KEY (`user_id`)
    REFERENCES `pro_habits`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_uc_to_c`
    FOREIGN KEY (`commit_id`)
    REFERENCES `pro_habits`.`commits` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`quotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`quotes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `header` VARCHAR(245) NULL,
  `body` TEXT NULL,
  `author` VARCHAR(245) NULL,
  `picture` VARCHAR(245) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`journals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`journals` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `body` TEXT NULL,
  `date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `published` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_j_to_u_idx` (`user_id` ASC),
  CONSTRAINT `fk_j_to_u`
    FOREIGN KEY (`user_id`)
    REFERENCES `pro_habits`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pro_habits`.`activities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pro_habits`.`activities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `message` VARCHAR(145) NULL,
  `datetime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_a_to_u_idx` (`user_id` ASC),
  CONSTRAINT `fk_a_to_u`
    FOREIGN KEY (`user_id`)
    REFERENCES `pro_habits`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
