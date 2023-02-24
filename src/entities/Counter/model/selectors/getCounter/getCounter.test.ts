import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

describe('getCounter', () => {
  test('returned counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
