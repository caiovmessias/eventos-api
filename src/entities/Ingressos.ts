import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Eventos } from './Eventos';

@Entity('ingressos')
class Ingressos {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  id_evento: string;

  @ManyToOne(() => Eventos)
  @JoinColumn({ name: 'id_evento' })
  eventos: Eventos;

  @Column()
  quantidade: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Ingressos };
