import reducer from '../reducer';

describe('Count reducer', () => {
  it('add and subtract from count', () => {
    const state = { count: 0 };

    let action = { type: 'SUB' };
    let updatedState = reducer(state, action);
    expect(updatedState).toMatchObject({ count: -1 });
    expect(+localStorage.getItem('count')).toBe(-1);

    action = { type: 'ADD' };
    updatedState = reducer(updatedState, action);
    expect(updatedState).toMatchObject({ count: 0 });
    expect(+localStorage.getItem('count')).toBe(0);

    action = { type: 'THIS_DOES_NOT_EXIST' };
    updatedState = reducer(updatedState, action);
    expect(updatedState).toMatchObject({ count: 0 });
    expect(+localStorage.getItem('count')).toBe(0);
  });
});
