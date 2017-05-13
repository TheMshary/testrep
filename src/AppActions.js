import dispatcher from './AppDispatcher';

const actions = {
  doIncrement: () => dispatcher.dispatch({
    type: "increment"
  }),
  changeActiveMenuItem: (menuItem) => dispatcher.dispatch({
    type: "changeActiveMenuItem",
    menuItem: menuItem
  }),
};


export default actions
