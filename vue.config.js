module.exports = {
    baseUrl: '/',
    devServer: {
        proxy: {
            '/move/api/v1': {
                target: 'http://103.202.110.58',
            },
            '/resource': {
                target: 'http://103.202.110.58',
            }
        }
    },
}