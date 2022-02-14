import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  email: string;
  
  @Column()
  senha: string;
  
  @Column()
  data_nascimento: Date;
  
  @Column()
  sexo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Usuario };
