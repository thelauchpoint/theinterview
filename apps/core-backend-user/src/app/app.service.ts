import { Injectable } from '@nestjs/common';
import { TRANSACTION_TEST_DATA } from './data/transactions';
type ObjectWithAnyProperties = { [key: string]: any };
@Injectable()
export class AppService {
  data = TRANSACTION_TEST_DATA;
  /**
   *
   * Init service
   * @returns
   */
  getData(): { message: string } {
    return { message: 'Welcome to core-backend-user!' };
  }

  /**
   *
   * Traverses an object and selects its keys, converting them into a label and a key, with optional keys to skip.
   * @param {{ label: string; key: string }} input - The object to traverse.
   * @param {string[]} [skipKeys=[]] - The keys to skip.
   * @returns {{label: string, key: string}[]} - The list of selectable keys, with their label and key.
   *
   * We are asking you to write a function to complete the following tasks.
   * The goal is to create a new object per value FOR example if you look at the TRANSACTION_TEST_DATA.
   * You can see the nested value policy.pol_eff_date.day = 29
   *
   * You mission is to create a new object for that value shaped like this.
   * {label: Policy Pol Eff Date Day, key: policy.pol_eff_date.day }
   * You will do this for every value. The final example of the EXPECTED OUTCOME is in ./data/transactions-answer-data.json
   *
   * EST TIME TO COMPLETE: 15min
   * We sovled this in less than 60 lines
   * You can run the server to test on re-compile or use the test.
   * Make sure either way the test passes and is useful.
   *
   * BONUS TIPS
   * Use this test to develop your method apps/core-backend-user/src/app/app.service.spec.ts
   * Using VS extention Jest Runner or another of our choice to help will make this easy by isolating the test and you can watch it also.
   * you can also use `nx test core-backend-user` to test the entire app
   */

  createList(input: Record<string, unknown>, skipKeys: string[] = []): { label: string; key: string }[] {
    // The input object is null or undefined: the function will return an empty array.
    // The input object is an empty object: the function will return an empty array.
    // The input object contains keys that should be skipped: the function will not add these keys to the result list.
    // The input object contains circular references: the function will not get stuck in an infinite loop and will correctly handle each key only once.
    // The input object contains values that are functions or arrays: the function will not add these keys to the result list.
    // The input object contains values that are instances of Date: the function will correctly format the date value into a human-readable string for the corresponding key.
    return [{ label: 'Policy Pol Eff Date Day', key: 'policy.pol_eff_date.day' }]; // Delete me and replace with your code.
  }
}
