/**ESM (ECMA Script Module) - import export
 * node.js에서는 ESM을 지원하지 않고
 * 기본적으로 CommonJS방식을 지원한다
 * import 대신 require()
 * export 대신 module.exports
 */

//const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}