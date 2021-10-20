import {MigrationInterface, QueryRunner} from "typeorm";

export class plan1634726371078 implements MigrationInterface {
    name = 'plan1634726371078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "plan" integer`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "mailRequired" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "mailRequired" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "plan"`);
    }

}
