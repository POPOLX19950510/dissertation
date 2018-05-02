/**
 * Created by liux on 18/4/23.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    login: 'SELECT user_pass FROM userInfo WHERE user_name = ?;',
    login_tel: 'SELECT user_pass FROM userInfo WHERE user_tel = ?;',
    add: 'insert into userInfo(user_id, user_name, user_pass, user_root, user_tel, user_regTime) values (?, ?, ?, ?, ?, ?);'
  }
}

module.exports = sqlMap;
