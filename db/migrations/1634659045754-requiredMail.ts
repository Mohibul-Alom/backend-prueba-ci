import {MigrationInterface, QueryRunner} from "typeorm";

export class requiredMail1634659045754 implements MigrationInterface {
    name = 'requiredMail1634659045754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "sentMail" TO "mailRequired"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "mailRequired" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "mailRequired" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "mailRequired" TO "sentMail"`);
    }

}
