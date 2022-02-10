import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuariosIngressos1644464285835 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'usuarios_ingressos',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true
            },
            {
              name: 'id_usuario',
              type: 'int',
              isNullable: true
            },
            {
              name: 'id_ingresso',
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
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'FKUsuario',
              referencedTableName: 'usuarios',
              referencedColumnNames: ['id'],
              columnNames: ['id_usuario'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
            {
              name: 'FKIngresso',
              referencedTableName: 'ingressos',
              referencedColumnNames: ['id'],
              columnNames: ['id_ingresso'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
          ],
        })
      )
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('usuarios_ingressos');
    }
  
  }
  