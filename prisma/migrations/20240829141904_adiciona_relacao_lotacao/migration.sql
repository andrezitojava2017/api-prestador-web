-- AddForeignKey
ALTER TABLE `tbl_servicos` ADD CONSTRAINT `tbl_servicos_pisPasep_fkey` FOREIGN KEY (`pisPasep`) REFERENCES `tb_pessoas`(`pis_pasep`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_servicos` ADD CONSTRAINT `tbl_servicos_cod_dotacao_fkey` FOREIGN KEY (`cod_dotacao`) REFERENCES `tbl_lotacao`(`codigo_dotacao`) ON DELETE SET NULL ON UPDATE CASCADE;
