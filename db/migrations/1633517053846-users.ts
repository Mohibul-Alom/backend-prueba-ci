import {MigrationInterface, QueryRunner} from "typeorm";

export class users1633517053846 implements MigrationInterface {
    name = 'users1633517053846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "genere" character varying NOT NULL, "education" character varying NOT NULL, "birhyear" character varying NOT NULL, "country" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
