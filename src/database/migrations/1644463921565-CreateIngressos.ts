import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateIngressos1644463921565 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ingressos',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'id_evento',
            type: 'int',
            isNullable: true
          },
          {
            name: 'id_usuario',
            type: 'int',
            isNullable: true
          },
          {
            name: 'quantidade',
            type: 'int',
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
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEvento',
            referencedTableName: 'eventos',
            referencedColumnNames: ['id'],
            columnNames: ['id_evento'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKUsuario',
            referencedTableName: 'usuarios',
            referencedColumnNames: ['id'],
            columnNames: ['id_usuario'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ingressos');
  }

}
