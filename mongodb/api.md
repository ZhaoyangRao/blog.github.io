# mongodb
## mongodb安装
关于什么是mongoDB啊？之类的这里就不扯了，百度啊很多人的博客都有讲，我这里就直接开始安装使用吧
### 1.下载
```
去官网下载适合自己的稳定版本,官网百度哈
```
### 2.安装
```
安装，我这里选择的是自定义安装路径，c:\mongodb，然后点击Next直到安装结束
```
### 3.配置，创建数据目录
MongoDB将数据目录存储在 data\db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。

![](https://user-gold-cdn.xitu.io/2019/4/28/16a62e3aac7a03c5?w=833&h=212&f=png&s=19324)
### 4.命令行下运行 MongoDB 服务器
```
运行MongoDB服务器,就是进入你的安装bin目录输入mongod.exe了
```
![](https://user-gold-cdn.xitu.io/2019/4/28/16a62e61a54c2898?w=673&h=166&f=png&s=13446)

```
在 mongod.exe 设置 dbpath 路径来指定 \data\db 的替换路径。如下图
```
成功接下来就会看到会输出如下信息
![](https://user-gold-cdn.xitu.io/2019/4/28/16a62e7bcd8a064b?w=673&h=420&f=png&s=43435)
到这里通过命令行的方式启动 MongoDB 已经完成了，具体请看下面关于MongoDB后台管理 Shell的使用方式
### 5.通过windows服务配置mongoDB服务
当然你觉得命令行不舒服，也可以通过配置windows服务配置mongoDB服务

#### 第一步都是在根目录下创建data\db   data\log
mkdir c:\data\db
mkdir c:\data\log
#### 第二部，创建一个配置文件
创建一个配置文件位于你安装的mongodb C:\mongodb\mongod.cfg 其中指定 systemLog.path 
和 storage.dbPath
内容mongod.cfg的内容如下
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
####  第三步，配置环境变量
电脑高级系统设置，系统变量PATH(或者path)新增→加入c:\MongoDB\bin。
#### 第四步安装 MongoDB服务
通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件
进入安装文件bin目录执行 mongod --config c:\MongoDB\mongod.cfg" --install --serviceName "MongoDB"
net start MongoDB开启 
net stop MongoDB停止 
C:\mongodb\bin\mongod.exe --remove移除

![](https://user-gold-cdn.xitu.io/2019/4/28/16a6319c492f6919?w=808&h=546&f=png&s=34728)
#### 到这里通过windows服务配置mongoDB服务已经基本完成了，接下来你使用mongodb只需要打开cmd输入mongo就行了

![](https://user-gold-cdn.xitu.io/2019/4/28/16a632332feabd35?w=1051&h=598&f=png&s=95744)

### MongoDB后台管理 Shell
这里是通过命令行的方式启动的 MongoDB ，打开mongodb安装目录下的bin目录，然后执行mongo.exe文件，MongoDB Shell是MongoDB自带的交互式Javascript shell，用来对MongoDB进行操作和管理的交互式环境。
由于它是一个JavaScript shell，您可以运行一些简单的算术运算:

![](https://user-gold-cdn.xitu.io/2019/4/28/16a62eda1f767951?w=665&h=315&f=png&s=25658)
db 命令用于查看当前操作的文档（数据库）：




![](https://user-gold-cdn.xitu.io/2019/4/28/16a62eded5e4fc88?w=681&h=323&f=png&s=26861)

安装大致就这些了，接下来就是一些数据库增删改查的那些基本操作了
## mongodb基本操作
这两天总算清闲下来了，这里只介绍mongodb的一些基本增删改查，从大到小，从数据库到下面的集合表等，这里推荐一个mongodb的可视化工具Robo3T,在上面操作增删改查使用起来也简单
### 数据库相关的基本操作
#### 查看当前用的数据库
show dbs
#### 新增使用数据库
user XXX (没有此数据库会新建一个)
#### 删除数据库
db.dropDatabase()
#### 查看当前有的数据库（多个或者单个）
db

### 集合的基本操作
#### 查看集合
show collections
#### 创建集合
create collection 
#### 删除集合
drop collection
#### 给集合改名字
rename collection
### 数据的基本操作
#### 创建插入数据
```
db.student.insert({"name":"张三","age":"22","sex":"男"});#如果数据库中不存在集合，就创建并插入这些数据<br>
db.student.insert({"name":"李四","age":"22","sex":"女","phone":"18513081650","class":"计算机1班"});#里面的key-value不用保持一致<br>
db.student.insert([{"name":"王五","age":"22","sex":"男","class":"计算机2班"},{"name":"赵六","age":"22","sex":"女","phone":"18513081650","class":"计算机1班"}]);#同时插入多条数据<br>
```
#### 更新
```
db.student.update({"name":"张三"},{"name":"张三丰"});#如果有多条语句，只修改第一条，会覆盖原有数据
db.student.update({"22":"女"},{"name":"张三丰"});
db.student.update({"name":"王五"},{$set:{"name":"张无忌"}},{multi:true});#把所有的记录都改了
db.student.update({"name":"张三"},{$set:{"name":"张无忌"}});只想改某个key的value使用set 
```
#### 查询
```
db.student.find();#查询全部
db.student.find({"name":"李四"});#查询指定记录，返回这一行结果
db.student.update({"name":"张三丰"},{"name":"张无忌","age":"28","sex":"男"});
db.student.find({"name":"张无忌","age":"28"});#and操作
db.student.find({$or:[{"name":"张无忌"},{"name":"李四"}]});#or操作
db.student.find().pretty();#格式化显示
db.student.find().count();#获取结果的行数
db.student.find().sort({"age":-1});#按照sort里面key的值排序，1为正序，-1为倒序
```
#### 删除
```
db.student.remove();#删除所有数据
db.student.remove({"22":"女"});#按照条件删除
db.student.remove({"name":"张无忌"},2);#删除几条
```
## mongodb小例子
 koa（后端）+mongodb（数据库）+vue前端界面实现得增删改查小demo
 昨天闲下来翻了一下koa的api做了一个增删改查小表格demo，四个接口加前端小界面，大概加查看api用了半天时间。所以koa确实是一个简单快速开发的库
看这个你应该已经学会了操作一种数据库，我这里用的是mongodb，对mongodb不会的可以去看看我的前两篇文章，上手很简单，我这里用的是可视化工具robo3.0

![](https://user-gold-cdn.xitu.io/2019/5/15/16ab928a0aadf5b6?w=1723&h=720&f=png&s=72499)

由于前端很简单我就放在了public下面，项目地址 https://github.com/ZhaoyangRao/koa.git

::: tip 效果图
先看看实现后的效果图吧
:::
![](https://user-gold-cdn.xitu.io/2019/5/15/16ab94944c3f5117?w=860&h=356&f=png&s=27768)
很简单的一个表格的增删改查

### 后端代码的结构
```
├── app     
│   └── controllers // 控制器文件目录，用来操作数据库
│   │   └──  ...  // 对应操作的表，这里就省略了
│   ├── middleware// 自定义中间件目录
│   ├── models    // 定义的表结构
│   │   └──  ...  // 对应的表，这里就省略了
│   └── utils     // 工具模块目录
│   │   └──  ...  // 工具模块，这里就省略了
├── routes         // 路由文件
│   ├── api    // 路由配置     
├── app.js        // 项目入口文件
└── config.js     // 配置文件
```
这里说一个题外话，其实现在前端后端有一个贯穿编码整个的思想就是MVC，这里的目录和作用也体现了MVC，models就是M,controllers就是C，routes就类似于V表现层也就是抛出来的请求接口。

### 主要目录概述
#### appjs入口文件
入口文件没有业务代码，做了几件重要的事情，
```
1.require('koa')
2.连接了数据库（需要用到mongoose mongoose是nodeJS提供连接 mongodb的一个库）
3.引入调用了routes
4.require('koa2-cors');require('koa-body');
我这里还引入两个用的比较多的生态库，一个用来解决跨域，一个用来解决post请求以及文件下载等
```
#### 连接数据库相关目录
首先数据库属于M层，你可以看见models里面就是mongoose连接 mongodb的，
```
mongoose.Schema( 相当于一个数据库的模板，数据结构)
mongoose.model（简单的理解就是通过mongoose.model你就可以对数据库里面的相应的数据进行操作（））
```
#### controllers目录
也就是自己定义的那些操作调用数据层的那些方法控制器
#### utils工具
一些常用的方法，格式化时间等
#### middleware自定义中间件
你可以写一些对request response封装一下
#### routes（接口）
暴露出去的接口，以及相应接口调用的回调controllers,controllers再去操作models
::: tip 效果图
 总结，这只是我自己定义的目录，以及自己的片面理解，具体代码注释在文件里面，毕竟只看了写了半天，有不对的地方欢迎指正
:::