import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { LocaLEvento } from './LocaLEvento';
import { Organizador } from './Organizador';

@Entity('eventos')
class Evento {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  id_local: string;

  @ManyToOne(() => LocaLEvento)
  @JoinColumn({ name: 'id_local' })
  locaLEvento: LocaLEvento;

  @ManyToMany(() => Organizador)
  @JoinTable({
    name: 'organizadores',
    joinColumns: [{ name: 'id_organizador' }],
    inverseJoinColumns: [{ name: 'id_evento' }],
  })
  organizadores: Organizador[];

  @Column()
  data_hora_evento: boolean;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Evento };
