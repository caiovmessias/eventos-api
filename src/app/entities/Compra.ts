import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Ingresso } from './Ingresso';
import { Usuario } from './Usuario';


@Entity('compras')
class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_ingresso: number;

  @ManyToOne(() => Ingresso)
  @JoinColumn({ name: 'id_ingresso' })
  ingresso: Ingresso;

  @Column()
  id_usuario: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  quantidade: number;

  @Column()
  total_compra: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Compra };
