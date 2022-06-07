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
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at',  nullable: true, default: null })
    deletedAt: Date
}
