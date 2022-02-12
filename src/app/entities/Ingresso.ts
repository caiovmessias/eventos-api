import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from './Evento';
import { Usuario } from './Usuario';

@Entity('ingressos')
class Ingresso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_evento: string;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  evento: Evento;

  @Column()
  id_usuario: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  quantidade: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Ingresso };
