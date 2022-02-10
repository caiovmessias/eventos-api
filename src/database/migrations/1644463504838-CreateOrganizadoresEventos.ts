import {MigrationInterface, QueryRunner, Table} from "typeorm";

  export class CreateOrganizadoresEventos1644463504838 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'organizadores_eventos',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true
            },
            {
              name: 'id_organizador',
              type: 'int',
              isNullable: true
            },
            {
              name: 'id_evento',
              type: 'int',
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
            {
              name: 'FKEventos',
              referencedTableName: 'eventos',
              referencedColumnNames: ['id'],
              columnNames: ['id_evento'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
          ],
        })
      )
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('organizadores_eventos');
    }
  
  }
  