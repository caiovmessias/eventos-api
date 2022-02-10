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
            name: 'id_local',
            type: 'int',
            isNullable: true
          },
          {
            name: 'data_hora_evento',
            type: 'timestamp',
          },
          {
            name: 'status',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
        foreignKeys: [
          {
            name: 'FKLocalEvento',
            referencedTableName: 'locais_eventos',
            referencedColumnNames: ['id'],
            columnNames: ['id_local'],
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