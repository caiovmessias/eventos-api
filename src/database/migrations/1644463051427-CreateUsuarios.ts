import {MigrationInterface, QueryRunner, Table} from "typeorm";

  export class CreateUsuarios1644463051427 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'usuarios',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true
            },
            {
              name: 'nome',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'senha',
              type: 'varchar',
            },
            {
              name: 'data_nascimento',
              type: 'timestamp',
            },
            {
              name: 'sexo',
              type: 'varchar',
              length: "1",
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        })
      )
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('usuarios');
    }
}
  