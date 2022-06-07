import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { priorityEnum } from "../enums"

@Entity('todos')
export class Todo {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'activity_group_id'})
    activityGroupId: number 

    @Column()
    title: string

    @Column({ name: 'is_active' })
    isActive: boolean
    
    @Column({
        type: "enum",
        enum: priorityEnum,
        default: priorityEnum.VERY_HIGH,
    })
    priority: priorityEnum

    @CreateDateColumn({ name: "created_at"})
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at',  nullable: true, default: null })
    deletedAt: Date
}
