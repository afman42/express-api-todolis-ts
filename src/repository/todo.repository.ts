import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Todo } from '../entity/Todo';

export class TodoRepository {
  private repository: Repository<Todo>;

  constructor() {
    this.repository = AppDataSource.getRepository(Todo)
  }

  async add(data): Promise<Todo> {
    return await this.repository.save(data);
  }

  async findOne(id: number): Promise<Todo> {
    return await this.repository.findOne({
      where: { id }
    });
  }

  async find(): Promise<Todo[]> {
    return await this.repository.find({
      order: {
        id: "ASC"
      }
    })
  }

  async findActivity(activity_group_Id: any): Promise<Todo[]> {
    return await this.repository.find({
      where: { activity_group_id: activity_group_Id }
    })
  }
  async delete(id: number){
    return await this.repository.delete(id)
  }
}