import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { LocaisEventos } from './LocaisEventos';
import { Organizadores } from './Organizadores';

@Entity('eventos')
class Eventos {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  id_local: string;

  @ManyToOne(() => LocaisEventos)
  @JoinColumn({ name: 'id_local' })
  locaisEventos: LocaisEventos;

  @ManyToMany(() => Organizadores)
  @JoinTable({
    name: 'organizadores',
    joinColumns: [{ name: 'id_organizador' }],
    inverseJoinColumns: [{ name: 'id_evento' }],
  })
  organizadores: Organizadores[];

  @Column()
  data_hora_evento: boolean;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Eventos };
