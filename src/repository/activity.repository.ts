import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Activity } from '../entity/Activity';

export class ActivityRepository {
  private repository: Repository<Activity>;

  constructor() {
    this.repository = AppDataSource.getRepository(Activity)
  }

  async add(data): Promise<Activity> {
    return await this.repository.save(data);
  }

  async findOne(id: number): Promise<Activity> {
    return await this.repository.findOne({
      where: { id }
    });
  }

  async find(): Promise<Activity[]> {
    return await this.repository.find({
      order: {
        id: "ASC"
      }
    })
  }
  
  async delete(id: number){
    return await this.repository.delete(id)
  }
}