## open gptapi

> chat gpt api 可以调用了：https://v1.gptapi.cn

#### curl 使用方式
```
curl --location --request POST 'https://v1.gptapi.cn' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message":"讲个笑话"
}
```



#### axios 使用方式
```
var axios = require('axios');
var data = JSON.stringify({
   "message": "讲个笑话"
});

var config = {
   method: 'post',
   url: 'https://v1.gptapi.cn',
   headers: { 
      'Content-Type': 'application/json', 
      'Content-Length': ''
   },
   data : data
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});
```