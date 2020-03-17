import { driftApi } from '../../src';

describe('driftApi', () => {
  it('should throw on missing the drift object', () => {
    let error: Error | undefined;

    try {
      driftApi().method();
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  window.drift = {};
  window.drift.existingMethod = jest.fn();

  it('should throw on missing a method', () => {
    let error: Error | undefined;

    try {
      driftApi().nonExistingMethod();
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

  it('should call a drift method', () => {
    driftApi().existingMethod();

    expect(window.drift.existingMethod).toBeCalledTimes(1);
  });
});
