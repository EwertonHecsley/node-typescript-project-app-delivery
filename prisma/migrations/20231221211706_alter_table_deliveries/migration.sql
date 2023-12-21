-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_deliveryman_id_fkey`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `deliveryman_id` INTEGER NULL,
    MODIFY `end_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryman_id_fkey` FOREIGN KEY (`deliveryman_id`) REFERENCES `deliverymans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
