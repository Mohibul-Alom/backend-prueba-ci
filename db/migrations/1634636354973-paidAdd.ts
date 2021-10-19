import {MigrationInterface, QueryRunner} from "typeorm";

export class paidAdd1634636354973 implements MigrationInterface {
    name = 'paidAdd1634636354973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "paid" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "paid"`);
    }

}
