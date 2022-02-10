import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ingressos } from './Ingressos';

@Entity('usuarios')
class Usuarios {
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

  @ManyToMany(() => Ingressos)
  @JoinTable({
    name: 'ingressos',
    joinColumns: [{ name: 'id_ingresso' }],
    inverseJoinColumns: [{ name: 'id_usuario' }],
  })
  ingressos: Ingressos[];

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Usuarios };
