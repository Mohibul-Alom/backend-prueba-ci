import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    genere: string;

    @Column({nullable: false})
    education: string;

    @Column({nullable: false})
    birhyear: string;

    @Column({nullable: true}) 
    country: string;

}
