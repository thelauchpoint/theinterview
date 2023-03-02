import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { TRANSACTION_TEST_DATA } from './data/transactions';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to core-backend-user!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to core-backend-user!',
      });
    });
  });
  /**
   * Modify this test to be useful once you complete the method
   */
  describe('createList', () => {
    it('should return a list', () => {
      const result = service.createList(TRANSACTION_TEST_DATA, ['_id', 'owner.account_id']);
      expect(result[0]).toEqual({ label: 'Policy Pol Eff Date Day', key: 'policy.pol_eff_date.day' }); // Delete me and replace with your test.
    });
  });
});
