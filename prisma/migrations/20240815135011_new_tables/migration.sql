/*
  Warnings:

  - You are about to drop the `db_lotacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `db_pessoas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `db_servico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `db_tributo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `db_servico` DROP FOREIGN KEY `Db_servico_db_lotacaoId_fkey`;

-- DropForeignKey
ALTER TABLE `db_servico` DROP FOREIGN KEY `Db_servico_db_pessoasId_fkey`;

-- DropTable
DROP TABLE `db_lotacao`;

-- DropTable
DROP TABLE `db_pessoas`;

-- DropTable
DROP TABLE `db_servico`;

-- DropTable
DROP TABLE `db_tributo`;

-- CreateTable
CREATE TABLE `tb_pessoas` (
    `nome` VARCHAR(200) NOT NULL,
    `pis_pasep` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`pis_pasep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_lotacao` (
    `codigo_dotacao` INTEGER NOT NULL,
    `descricao` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`codigo_dotacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_servicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `competencia` VARCHAR(10) NOT NULL,
    `empenho` INTEGER NOT NULL,
    `fonte` INTEGER NOT NULL,
    `pisPasep` VARCHAR(20) NOT NULL,
    `inss_retido` DECIMAL(10, 2) NULL,
    `inss_patronal` DECIMAL(10, 2) NULL,
    `salario_base` DECIMAL(10, 2) NULL,
    `cod_dotacao` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
