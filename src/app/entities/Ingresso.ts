import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from './Evento';
import { Usuario } from './Usuario';

@Entity('ingressos')
class Ingresso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  id_evento: number;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  evento: Evento;

  @Column()
  preco: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Ingresso };
