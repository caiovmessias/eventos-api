import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from './Evento';

@Entity('ingressos')
class Ingresso {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  id_evento: string;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'id_evento' })
  eventos: Evento;

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
