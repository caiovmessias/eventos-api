import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locais_eventos')
class LocaisEventos {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  endereco: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { LocaisEventos };
