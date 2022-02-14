import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { LocalEvento } from './LocalEvento';
import { Organizador } from './Organizador';

@Entity('eventos')
class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  id_local: number;

  @ManyToOne(() => LocalEvento)
  @JoinColumn({ name: 'id_local' })
  localEvento: LocalEvento;

  @Column()
  id_organizador: number;

  @ManyToOne(() => Organizador)
  @JoinColumn({ name: 'id_organizador' })
  organizador: Organizador;

  @Column()
  data_hora_evento: Date;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Evento };
