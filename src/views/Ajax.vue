<template>
    <div>
        <van-button type="primary" @click="getData">获取数据</van-button>
        <van-button type="danger" @click="clearData">清空数据</van-button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{index+1}}:{{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list: []
            }
        },
        methods: {
            clearData(){
                this.list = [];
            },
            ajax(){
                //ajax原理
                let movieUrl = 'https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250';
                //1. 创建XMLHttpRequest对象
                let xmlhttp;
                //对于这样一个对象存在兼容性问题 首先判断window下面有没有XMLHttpRequest对象
                if(window.XMLHttpRequest){
                    xmlhttp = new XMLHttpRequest();//如果有 new一个对象
                }else{
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");//如果没有 则写这样一行代码
                }
                //2. 发送请求
                xmlhttp.open('GET', movieUrl, true);//第二个参数是请求的url地址 第三个参数指的是异步的 一般都是true
                xmlhttp.send();
                //3. 服务器响应
                xmlhttp.addEventListener('readystatechange',()=>{
                    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        let obj = JSON.parse(xmlhttp.responseText);//返回的是一个字符串 我们需要把它转化为对象
                        console.log(obj);
                        this.list = obj.subjects;
                    }
                })
            },
            getData(){
                this.ajax();
            }
        }
    }
</script>

<style scoped>

</style>