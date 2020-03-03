async function test(){
    const Redis = require('ioredis')

    const redis = new Redis({
        port: 6379,
        host: "127.0.0.1"
    })
    // 连接数据库是异步操作
    await redis.set('c',123)
    const keys = await redis.keys('*')
    
    console.log(keys)
    console.log(await redis.get('b'))
}
test()