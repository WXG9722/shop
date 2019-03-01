import Mock from 'mockjs'
import data from './data.json'

//第一种方式
Mock.mock('http://www.weichuang.com/getList', {data: data.list});
//第二种方式
Mock.mock('http://www.weichuang.com/getUser', {
    'name|2': 'weichuang',//2表示重复两次
    'age|18-35': 20//18-35表示18到35之间随机数字 20表示数据类型
});
//第三种方式（正则表达式）
Mock.mock('http://www.weichuang.com/regexp', {
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\d{5,10}/
});
//第四种方式（占位符）
Mock.mock('http://www.weichuang.com/list', {
    'info|10-20': [
        {
            'index|+1': 1,
            'name': '@first @last',
            'id': '@integer(10000,99999)',
            'date': '@datetime',
            'img': '@image("200*200")',
            'text': '@sentence(6, 22)'
        }
    ]
});
//第五种方式（Mock.Random）
let Random = Mock.Random;
let productData = () => {
    let productList = [];//存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('100x100', '农机' + Random.integer(1,100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.weichuang.com/getVarietyItem', productData)