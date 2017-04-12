import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
{userId : 'nidhi', password : 'nidhis'},
{userId : 'sakshi', password : 'sakshid'},
{userId : 'shweta', password : 'shwetan'},
{userId : 'richa', password : 'richat'}
    ];
    return {users};
  }
}
