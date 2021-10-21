import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class Payment {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    amount: number;

    @Column()
    plan:number;
    
    @Column()
    recipt: string;
    

}
