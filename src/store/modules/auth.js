import myFun from '../../utils/myFun'
const auth = {
  state: {
    avatar: '',
    uid: 0,
    nickName: '',
    accessToken: ''
  },
  getters: {},
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken, ttl) {
      state.accessToken = accessToken
      myFun.setAccessToken(accessToken, ttl)
    }
  },
  actions: {}
}
export default auth
