import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locais_eventos')
class LocalEvento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  endereco: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { LocalEvento };
