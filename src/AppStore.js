import {ReduceStore} from 'flux/utils';
import dispatcher from './AppDispatcher';
import {Map} from "immutable";

class AppStore extends ReduceStore {

  getInitialState() {
    return Map({
      counter: 0,
      activeMenuItem: "Home",
      something: "its value",
      counterNumber: 0,
      paragraphs: [
        {
          title: "Severe weather in Cambodia",
          text: "A severe thunderstorm hit the capital of Cambodia on Tuesday night ....",
          link: "http://cnn.com/alert/7"
        },{
          title: "Rainbows seen in Kuwait",
          text: "Unexpectedly, people wake up in Kuwait City seeing a unicorn flying over the towers",
          link: "http://kuna.org.kw/1238"
        },{
          title: "No title",
          text: "some text",
          link: "htt[://example.com/blog"
        }]
    });
  }

  reduce(state, action) {
    if(action.type ==='increment'){
      return state.set('counterNumber', state.get('counterNumber')+1);
    }else if(action.type === "changeActiveMenuItem"){
      return state.set('activeMenuItem', action.menuItem);
    }else{
      return state;
    }
  }
}

export default new AppStore(dispatcher);
