/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `post`;

-- CreateTable
CREATE TABLE `Db_lotacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `codigo` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Db_lotacao_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Db_pessoas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nome` VARCHAR(191) NOT NULL,
    `pisPasep` INTEGER NOT NULL,

    UNIQUE INDEX `Db_pessoas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Db_servico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `competencia` VARCHAR(191) NOT NULL,
    `empenho` INTEGER NOT NULL,
    `fonte` INTEGER NULL,
    `inss_retido` DECIMAL(65, 30) NOT NULL,
    `inss_patronal` DECIMAL(65, 30) NOT NULL,
    `salario_base` DECIMAL(65, 30) NULL,
    `db_lotacaoId` INTEGER NOT NULL,
    `db_pessoasId` INTEGER NOT NULL,

    UNIQUE INDEX `Db_servico_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Db_tributo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `competencia` VARCHAR(191) NOT NULL,
    `max_recolhimento` DECIMAL(65, 30) NULL,
    `base_patronal` DECIMAL(65, 30) NULL,
    `base_segurado` DECIMAL(65, 30) NULL,

    UNIQUE INDEX `Db_tributo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Db_servico` ADD CONSTRAINT `Db_servico_db_lotacaoId_fkey` FOREIGN KEY (`db_lotacaoId`) REFERENCES `Db_lotacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Db_servico` ADD CONSTRAINT `Db_servico_db_pessoasId_fkey` FOREIGN KEY (`db_pessoasId`) REFERENCES `Db_pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
