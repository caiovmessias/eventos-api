import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ingresso } from './Ingresso';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn()
  id: string;

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

  @ManyToMany(() => Ingresso)
  @JoinTable({
    name: 'ingressos',
    joinColumns: [{ name: 'id_ingresso' }],
    inverseJoinColumns: [{ name: 'id_usuario' }],
  })
  ingressos: Ingresso[];

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Usuario };
