/*
  Warnings:

  - You are about to alter the column `inss_retido` on the `db_servico` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `inss_patronal` on the `db_servico` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `salario_base` on the `db_servico` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `max_recolhimento` on the `db_tributo` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `base_patronal` on the `db_tributo` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `base_segurado` on the `db_tributo` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `db_servico` MODIFY `inss_retido` DECIMAL(10, 2) NOT NULL,
    MODIFY `inss_patronal` DECIMAL(10, 2) NOT NULL,
    MODIFY `salario_base` DECIMAL(10, 2) NULL;

-- AlterTable
ALTER TABLE `db_tributo` MODIFY `max_recolhimento` DECIMAL(10, 2) NULL,
    MODIFY `base_patronal` DECIMAL(10, 2) NULL,
    MODIFY `base_segurado` DECIMAL(10, 2) NULL;
