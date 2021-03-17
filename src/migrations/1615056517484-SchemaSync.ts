import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1615056517484 implements MigrationInterface {
    name = 'SchemaSync1615056517484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "date" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "date"`);
    }

}
