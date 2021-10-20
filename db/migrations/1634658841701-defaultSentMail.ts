import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultSentMail1634658841701 implements MigrationInterface {
    name = 'defaultSentMail1634658841701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "sentMail" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "sentMail" SET DEFAULT false`);
    }

}
