import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { priorityEnum } from "../enums"

@Entity('todos')
export class Todo {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'activity_group_id'})
    activity_group_id: number 

    @Column()
    title: string

    @Column({ name: 'is_active', default: true })
    is_active: boolean
    
    @Column({
        type: "enum",
        enum: priorityEnum,
        default: priorityEnum.VERY_HIGH,
    })
    priority: priorityEnum

    @CreateDateColumn({ name: "created_at"})
    created_at: Date

    @UpdateDateColumn({ name: "updated_at" })
    updated_at: Date

    @DeleteDateColumn({ name: 'deleted_at',  nullable: true, default: null })
    deleted_at: Date
}
