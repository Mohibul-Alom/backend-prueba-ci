import {MigrationInterface, QueryRunner} from "typeorm";

export class sentMail1634657765196 implements MigrationInterface {
    name = 'sentMail1634657765196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "sentMail" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "sentMail"`);
    }

}
