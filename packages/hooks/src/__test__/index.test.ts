import * as hooks from '../index';

describe('hooks--->mount', () => {
  test('hooks should not be undefined', () => {
    Object.keys(hooks).forEach((hook) => {
      expect(hooks[hook]).not.toBeUndefined();
    });
  });
});
