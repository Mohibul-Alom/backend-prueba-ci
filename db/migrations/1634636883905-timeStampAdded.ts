import {MigrationInterface, QueryRunner} from "typeorm";

export class timeStampAdded1634636883905 implements MigrationInterface {
    name = 'timeStampAdded1634636883905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "timeStamp" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "timeStamp"`);
    }

}
