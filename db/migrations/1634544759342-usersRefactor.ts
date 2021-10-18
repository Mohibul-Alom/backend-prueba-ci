import {MigrationInterface, QueryRunner} from "typeorm";

export class usersRefactor1634544759342 implements MigrationInterface {
    name = 'usersRefactor1634544759342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "genere"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "education"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birhyear"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "surname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "rangeAge" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "total" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "blockAB" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "blockCDE" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "blockCDE"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "blockAB"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "total"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "rangeAge"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "surname"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "points" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birhyear" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "education" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "genere" character varying NOT NULL`);
    }

}
