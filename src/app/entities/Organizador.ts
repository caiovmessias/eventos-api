import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organizadores')
class Organizador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Organizador };
