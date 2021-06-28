import { createStore } from 'vuex';
import { state } from './state';
import { mutations } from './mutation';
import { actions } from './actions';
import { getters } from './getters';

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {},
  getters: getters
});
