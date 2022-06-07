import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity('activities')
export class Activity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    title: string

    @CreateDateColumn({ name: "created_at"})
    created_at: Date

    @UpdateDateColumn({ name: "updated_at" })
    updated_at: Date

    @DeleteDateColumn({ name: 'deleted_at',  nullable: true, default: null })
    deleted_at: Date
}
