import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    counter:10
  },
  getters: {
    getCounter(state){
      return state.counter>0? state.counter : 'counter 数据异常'
    }
  },
  mutations: {
    addCounter(state,num){
      state.counter+=num
    }
  },
  //专门做异步操作
  actions: {
    asyncAdd({ commit }){
      axios.get('/api/generator/list.php')
      .then(res=>{
        //commit 使用
        commit('addCounter',res.data[0])
      })
    }
  },
  modules: {
  }
})
