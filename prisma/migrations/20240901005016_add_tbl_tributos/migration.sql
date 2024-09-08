-- AddForeignKey
ALTER TABLE `tbl_servicos` ADD CONSTRAINT `tbl_servicos_pisPasep_fkey` FOREIGN KEY (`pisPasep`) REFERENCES `tb_pessoas`(`pis_pasep`) ON DELETE RESTRICT ON UPDATE CASCADE;
