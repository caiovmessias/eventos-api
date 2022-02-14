import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEventos1644462668095 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'eventos',
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
            isUnique: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'id_organizador',
            type: 'int',
            isNullable: true
          },
          {
            name: 'data_hora_evento',
            type: 'timestamp',
            isNullable: true
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
        foreignKeys: [
          {
            name: 'FKOrganizador',
            referencedTableName: 'organizadores',
            referencedColumnNames: ['id'],
            columnNames: ['id_organizador'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('eventos');
  }

}
