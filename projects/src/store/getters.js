const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  ids: state => state.user.ids,
  tel: state => state.user.tel,
  setting: state => state.user.setting,
  power: state => state.user.power
};
export default getters;
