## mongodb知识储备
这两天总算清闲下来了，这里只介绍mongodb的一些基本增删改查，从大到小，从数据库到下面的集合表等，这里推荐一个mongodb的可视化工具Robo3T,在上面操作增删改查使用起来也简单
## 数据库相关的基本操作
#### 查看当前用的数据库
show dbs
#### 新增使用数据库
user XXX (没有此数据库会新建一个)
#### 删除数据库
db.dropDatabase()
#### 查看当前有的数据库（多个或者单个）
db

## 集合的基本操作
#### 查看集合
show collections
#### 创建集合
create collection 
#### 删除集合
drop collection
#### 给集合改名字
rename collection
## 数据的基本操作
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