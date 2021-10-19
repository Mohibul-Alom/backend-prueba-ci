import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    surname: string;

    @Column({nullable: false})
    email: string;

    @Column ({nullable: false})
    rangeAge: string;

    @Column({nullable: true}) 
    country: string;

    @Column({nullable: false})
    total: number;

    @Column({nullable: false})
    blockAB: number;

    @Column({nullable: false})
    blockCDE: number;

    @Column({nullable: false})
    paid: boolean;

    @Column({nullable: false})
    timeStamp: Date;


}
