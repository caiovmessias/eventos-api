import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompra1644798581075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'compras',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true
            },
            {
              name: 'id_ingresso',
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
              name: 'total_compra',
              type: 'decimal',
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
              name: 'FKIngresso',
              referencedTableName: 'ingressos',
              referencedColumnNames: ['id'],
              columnNames: ['id_ingresso'],
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
      await queryRunner.dropTable('compras');
    }
}
