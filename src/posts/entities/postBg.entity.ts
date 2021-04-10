import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostBg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  createdAt: Date;
}
