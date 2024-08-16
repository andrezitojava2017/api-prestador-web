-- CreateTable
CREATE TABLE `tbl_tributo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `competencia` VARCHAR(10) NOT NULL,
    `max_recolhimento` DECIMAL(10, 2) NOT NULL,
    `base_patronal` DECIMAL(10, 2) NOT NULL,
    `base_segurado` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
