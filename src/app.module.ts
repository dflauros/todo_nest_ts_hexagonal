import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/infrastructure/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
