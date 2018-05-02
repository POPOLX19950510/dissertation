/**
 * Created by liux on 18/4/18.
 */
var _mysql = require('mysql')

const HOST = 'localhost'
const PORT = 3306
const MYSQL_USER = 'root'
const MYSQL_PASS = ''
const DATABASE = 'testdata'
// 登录数据库
const mysql = _mysql.createConnection({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS
})
// 使用usability数据库
mysql.query( 'use ' + DATABASE, (error, results) => {
    if (error) {
        console.log("ClientConnectionReady Error: " + error.message);
        mysql.end()
        return
    }
});
ClientReady = function (client) {
    return GetData(client)
}
GetData = function (client) {
    client.query("SELECT * FROM runoob_tbl;", function selectCb(error, results, fields) {
        if (error) {
            console.log("GetData Error: " + error.message)
            client.end()
            return
        }
        if (results.length > 0 ){
            // 处理返回数据
            console.log(results)
        }
    });
    client.end();
    console.log("Connection closed");
};
ClientReady(mysql);
