import noty from '../noty';

describe('noty', () => {
  let listener;

  beforeEach(() => {
    listener = jest.fn();
  });

  it("should execute a callback when the event registered is triggered", () => {
    noty.on('sample-name', listener);

    noty.emit('sample-name');

    expect(listener).toHaveBeenCalledTimes(1);

    noty.off('sample-name');
  });

  it("should not execute a callback when the event registered is not triggered", () => {
    noty.on('sample-name', listener);

    noty.emit('sample-name-not');

    expect(listener).not.toHaveBeenCalled();

    noty.off('sample-name');
  });

  it("should execute a callback on all events if a wildcard is used", () => {
    noty.on('*', listener);

    noty.emit('sample-name');
    noty.emit('sample-name-1');
    noty.emit('sample-name-2');
    noty.emit('sample-name-3');

    expect(listener).toHaveBeenCalledTimes(4);

    noty.off('sample-name');
  });
});
