
export const todo = (num) => ({
  type: 'aaa',
  num,
})

export const asHandle = (num) => async (dispatch) => {
  dispatch(({ type: 'c', num: num + '1' }));
  await new Promise(resolve => setTimeout(resolve, 200));
  dispatch(({ type: 'c', num: num + '2' }));
} 