import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Organizador } from './Organizador';

@Entity('eventos')
class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  id_organizador: number;

  @ManyToOne(() => Organizador)
  @JoinColumn({ name: 'id_organizador' })
  organizador: Organizador;

  @Column()
  data_hora_evento: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Evento };
