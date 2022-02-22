import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { UsersData } from '../mocks/users.mocks';
import { User } from '../models/user';

export class AppDataService implements InMemoryDbService {
  createDb(): { users: User[] } {
    const users = UsersData.user;
    return { users };
  }
}
