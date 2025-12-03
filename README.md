# battle
battle


# battle
battle


### 20251201
1.else if 只能跟在 if 后面，不能跟在普通语句后面
2.作用域的作用与应用场景
3.创建对象（实例）
  const a = new 类名(...)
4.super的使用方法
  super() → 调用父类构造函数
  super.xxx → 调用父类的方法或属性
  没有 super，子类无法正确继承父类的内容
5.暴击逻辑：攻击*2-防御=伤害  生命值（hp）-伤害=现hp

### 20251202
function:function 语句是 JavaScript 中用于 声明一个函数 的语句，用来封装一段可以重复执行的代码
    function 函数名(参数1, 参数2, ...) {
  // 函数体：执行的代码
  return 返回值;  // 可选
}

sort：数组遍历
三元表达式（条件运算符）：条件 ? 表达式1 : 表达式2
意思是：
如果条件为 true → 用表达式1
否则 → 用表达式2

indexOf() 用来找某个元素在数组中的下标。

splice(start, deleteCount) 的意思是：
从 start 下标开始
删除 deleteCount 个元素


###20251203
战斗回放
在原有代码上里面加入每个人物攻击都有一个时间间断的概念，后续还要有一个技能的模块（先不管）