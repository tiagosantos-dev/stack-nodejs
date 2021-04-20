import {Entity, Column, UpdateDateColumn, PrimaryColumn, CreateDateColumn} from 'typeorm';
import { v4  as uuid} from 'uuid';

@Entity("settings")
class Setting{

    @PrimaryColumn()
    id: string;

    @Column()
    user: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;

    construct(){
        if(!this.id){
            this.id = uuid();
        }

    }
}

export { Setting } 