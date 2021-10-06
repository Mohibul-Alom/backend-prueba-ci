import {MigrationInterface, QueryRunner} from "typeorm";

export class users1633519568702 implements MigrationInterface {
    name = 'users1633519568702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "points" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "points"`);
    }

}
