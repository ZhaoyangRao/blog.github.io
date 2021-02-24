## mxgraph上手实践
### 由来
 由于这次项目合作过程中，在流程图绘制的技术选型中，前端选择了mxgraph，所以在边写边学的过程中，对mxgraph的使用作一些简单的记录
 mxgraph的api是全英文的，而且官网有许多的例子，在开发项目的过程没有时间去安安心心的全部阅读，以后慢慢再去消化一遍吧
 我们的需求，前端可以编辑流程图，保存编辑好流程图xml格式到后端，在只显示流程图（不可编辑界面）的界面里读取xml，点击每一个cell触发事件
 去官网下一个mxgraph里面有大量的例子什么的，基本的引入之类的就不说了，主要聊聊基本用法吧

### 判断兼容
```
if (!mxClient.isBrowserSupported()) {
                // Displays an error message if the browser is not supported.
                mxUtils.error('Browser is not supported!', 200, false);
                return
            }
```
### 新建画板，画板相关操作
```
            // 构造一个graph，新建画板
            var container = document.getElementById("main");
            var graph = new mxGraph(container);
            // i 在图形中创建默认组件 //获取顶层，可以认为是父节点
            var parent = graph.getDefaultParent();
```
### 添加节点
```
            var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 60);
            var v2 = graph.insertVertex(parent, null, 'World!', 200, 20, 80, 60);
            var v3 = graph.insertVertex(parent, null, 'World!', 400, 20, 80, 60);
```
### 添加连线
```
             var e1 = graph.insertEdge(parent, null, '', v2, v3);
             
            //线条拐点
            e1.geometry.points = [new mxPoint(270, 150)];
```
### 其他功能api
```
            // 鼠标框选 
            new mxRubberband(graph);
            // 开启可以拖拽建立关系,可以连线
            graph.setConnectable(true);
            // 开启方块上的文字编辑功能
            graph.setCellsEditable(true);
            // 启用对齐线帮助定位
            mxGraphHandler.prototype.guidesEnabled = true;
            // 选择基本元素开启
            graph.setEnabled(true);
            // 禁用浏览器默认的右键菜单栏
            mxEvent.disableContextMenu(container);
            // 只可预览不可选中拖动连接
            graph.setEnabled(true);
            // 禁止改变元素大小 
            graph.setCellsResizable(false);
            // 容器大小自适应 
            graph.setResizeContainer(false);
            // 可否重复连接 
            graph.setMultigraph(false);
            // 放大
            graph.zoomIn();
            //缩小
            graph.zoomOut();
            //还原
            graph.zoomActual();
            //居中缩放
            graph.centerZoom = true;
```
### 常用图形
```
        // 画方块 默认情况下
        graph.insertVertex(parent, null, '矩形', 50, 50, 150, 150);
        // 画方块 圆角矩形
        // shape=rounded 定义圆角  arcSize=10 定义圆角弧度
        graph.insertVertex(parent, null, '圆角矩形', 300, 50, 150, 150, "rounded=true;perimeter=ellipsePerimeter;arcSize=20;");
        // 画椭圆
        // shape=elipse 定义椭圆  perimeter=ellipsePerimeter 让连线的箭头或起点触到边缘
        graph.insertVertex(parent, null, '椭圆', 550, 50, 150, 150, "shape=ellipse;perimeter=ellipsePerimeter;");
        // 画三角形
        // shape=triangl 定义三角形  perimeter=ellipsePerimeter 让连线的箭头或起点触到边缘 direction=south 让三角形倒立
        graph.insertVertex(parent, null, '三角形', 800, 50, 150, 150, "shape=triangle;perimeter=ellipsePerimeter;direction=south;");
        // 画菱形
        // shape=rhombus 定义菱形
        graph.insertVertex(parent, null, '三角形', 1050, 50, 150, 150, "shape=rhombus;perimeter=ellipsePerimeter;");
        // 画柱形
        // shape=cylinder 定义柱形
        graph.insertVertex(parent, null, '柱形', 1300, 50, 150, 150, "shape=cylinder;perimeter=ellipsePerimeter;");
        // 画人
        // shape=actor 定义演员
        graph.insertVertex(parent, null, '演员', 50, 300, 150, 150, "shape=actor;perimeter=ellipsePerimeter;");
        // 画云
        graph.insertVertex(parent, null, '云', 300, 300, 150, 150, "shape=cloud;perimeter=ellipsePerimeter;");
　　　　　//矩形默认情况下
        graph.insertVertex(parent, null, '矩形', 550, 300, 150, 150, "shape=rectangle;perimeter=ellipsePerimeter;");
　　　　 //泳道
        graph.insertVertex(parent, null, '泳道', 800, 300, 150, 150, "shape=swimlane;perimeter=ellipsePerimeter;");
　　　　  //双圆
        graph.insertVertex(parent, null, '双圆', 1050, 300, 150, 150, "shape=doubleEllipse;perimeter=ellipsePerimeter;");
　　　　 //六边形
        graph.insertVertex(parent, null, '六边形', 1300, 300, 150, 150, "shape=hexagon;perimeter=ellipsePerimeter;");
```
### 查看视图中图形的xml
```
                var encoder = new mxCodec();
                var node = encoder.encode(graph.getModel());
                console.log(node)
```
### 读取xml显示在图形中
```
            var xml =''
            var doc = mxUtils.parseXml(xml);
            var codec = new mxCodec(doc);  
            codec.decode(doc.documentElement, graph.getModel());
```
### style样式的定义
```
        // 声明一个object
        var style = {};
        // 克隆一个object
        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LABEL;  // 不设置这个属性 背景图片不出来
        // 边框颜色
        style[mxConstants.STYLE_STROKECOLOR] = '#999999';
        // 边框大小
        style[mxConstants.STYLE_STROKEWIDTH] = 10;
        // 字体颜色
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFF00';
        // 文字水平方式
        style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
        // 文字垂直对齐
        style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_BOTTOM;
        // 字体大小
        style[mxConstants.STYLE_FONTSIZE] = 30;
        // 底图水平对齐
        style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_CENTER;
        // 底图垂直对齐
        style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_CENTER;
        // 图片路径
        //style[mxConstants.STYLE_IMAGE] = 'images/icons48/gear.png';
        style[mxConstants.STYLE_IMAGE] = 'http://imgstatic.baidu.com/img/image/shouye/qizhi0822.jpg';
        // 背景图片宽 
        style[mxConstants.STYLE_IMAGE_WIDTH] = 150;
        // 背景图片高
        style[mxConstants.STYLE_IMAGE_HEIGHT] = 200;
        // 上间距设置
        // 即使下边定义了全局设置，但这里单独设置上边间距仍单独有效
        style[mxConstants.STYLE_SPACING_TOP] = 30;
        // 四边间距设置
        style[mxConstants.STYLE_SPACING] = 10;
        // 把定义好的样式object push到stylesheet
        graph.getStylesheet().putCellStyle("style1", style);
        //样式使用
　　     var v1 = graph.insertVertex(parent, null, "text1", 50, 50, 200, 200, "style1"); 
```
### 给图中添加事件
```
   graph.addListener(mxEvent.DOUBLE_CLICK, function (sender, evt) {
        var cell = evt.getProperty('cell');
      });
```
### 工具栏的常用操作
```
buttons = [
            {
                label : "选择所有",
                fun : function(graph){
                    return function(evt){    
                        graph.selectAll();    
                    };
                }
            },
            {
                label : "选择一个",
                fun : function(graph){
                    return function(evt){    
                        graph.selectCell();    
                    };
                }
            },
            {
                label : "取消选择",    
                fun : function(graph){
                    return function(evt){
                        var cells = graph.getSelectionCells();    
                        graph.removeSelectionCells(cells);                            
                    };
                }
            },
            {
                label : "随机添加",    
                fun : function(graph){
                    return function(evt){
                        var randColor = function(){
                            return "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";    
                        };
                        
                        var style = "fillColor=" + randColor() + "; fontColor=" + randColor();
                        var width = randint(50, 300);
                        var height = randint(50, 300);
                        var x = randint(0, 1200 - width);
                        var y = randint(0, 600 - height);

                        graph.insertVertex(graph.getDefaultParent(), null, "随机添加", x, y, width, height, style);
                    };    
                }
            },
            {
                label : "分组所选",
                fun : function(graph){
                    return function(evt){
                        var cells = graph.getSelectionCells();
                        graph.groupCells(null, 1, cells);
                    };
                }
            },
            {
                label : "取消分组",
                fun : function(graph){
                    return function(evt){
                        var cells = graph.getSelectionCells();
                        graph.ungroupCells(cells);
                    };
                }
            },
            {
                label : "删除所选",
                fun : function(graph){
                    return function(evt){
                        var cells = graph.getSelectionCells();
                        graph.removeCells(cells);
                    };
                }
            },
            {
                label : "缩小",
                fun : function(graph){
                    return function(evt){
                        graph.zoomOut();
                    };
                }
            },
            {
                label : "放大",
                fun : function(graph){
                    return function(evt){
                        graph.zoomIn();
                    };
                }
            },
            {
                label : "还原",
                fun : function(graph){
                    return function(evt){
                        graph.zoomActual();
                    };
                }
            },
            {
                label : "随机所选元素的位置",
                fun : function(graph){
                    return function(evt){
                        var cells = graph.getSelectionCells();
                        for(var i=0; i<cells.length; i++){
                            var x = randint(0, 1200 - cells[i].geometry.width);        
                            var y = randint(0, 600 - cells[i].geometry.height);        
                        }
                        graph.moveCells([cells[i]], x , y);                        
                    };
                }
            }

        ]; 
```
### 添加button
```
 document.body.appendChild(mxUtils.button('图中显示转化的xml信息', function(evt) {
                var encoder = new mxCodec();
                var node = encoder.encode(graph.getModel());
                console.log(node)
            }));
```
### 小栗子
#### 下面是简单的html小例子，官网还有许多功能，这里只是简单的基本操作
```
<!--
  Copyright (c) 2006-2018, JGraph Ltd
  
  Hello, World! example for mxGraph. This example demonstrates using
  a DOM node to create a graph and adding vertices and edges.
-->
<html>

<head>
    <title>Hello, World! example for mxGraph</title>

    <!-- Sets the basepath for the library if not in same directory -->
    <script type="text/javascript">
        mxBasePath = '../src';
    </script>

    <!-- Loads and initializes the library -->
    <script type="text/javascript" src="../src/js/mxClient.js"></script>

    <!-- Example code -->
    <script type="text/javascript">
        // Program starts here. Creates a sample graph in the
        // DOM node with the specified ID. This function is invoked
        // from the onLoad event handler of the document (see below).
        function main(container) {
            // Checks if the browser is supported
            if (!mxClient.isBrowserSupported()) {
                // Displays an error message if the browser is not supported.
                mxUtils.error('Browser is not supported!', 200, false);
                return
            }

            // 构造一个graph
            var graph = new mxGraph(container);

            // 鼠标框选 
            new mxRubberband(graph);
            // i 在图形中创建默认组件
            var parent = graph.getDefaultParent();

            // 添加节点
            var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 60);
            var v2 = graph.insertVertex(parent, null, 'World!', 200, 20, 80, 60);
            var v3 = graph.insertVertex(parent, null, 'World!', 400, 20, 80, 60);

            //连线
            var e1 = graph.insertEdge(parent, null, '', v2, v3);
            e1.geometry.points = [new mxPoint(270, 150)];
            // 开启可以拖拽建立关系,可以连线
            graph.setConnectable(true);
            // 开启方块上的文字编辑功能
            graph.setCellsEditable(true);
            // 启用对齐线帮助定位
            mxGraphHandler.prototype.guidesEnabled = true;
            // 选择基本元素开启
            graph.setEnabled(true);
            // 禁用浏览器默认的右键菜单栏
            mxEvent.disableContextMenu(container);
            // 只可预览不可选中拖动连接
            graph.setEnabled(true);
            // 禁止改变元素大小 
            graph.setCellsResizable(false);
            // 容器大小自适应 
            graph.setResizeContainer(false);
            // 可否重复连接 
            graph.setMultigraph(false);
            // 放大
            graph.zoomIn();
            //缩小
            graph.zoomOut();
            //还原
            graph.zoomActual();
            //居中缩放
            graph.centerZoom = true;
            document.body.appendChild(mxUtils.button('图中显示转化的xml信息', function(evt) {
                var encoder = new mxCodec();
                var node = encoder.encode(graph.getModel());
                console.log(node)
            }));
            //将图形的xml进行回显
            //            var xml =''
            // var doc = mxUtils.parseXml(xml);
            // var codec = new mxCodec(doc);  
            // codec.decode(doc.documentElement, graph.getModel());
        };
    </script>
</head>

<!-- Page passes the container for the graph to the program -->

<body onload="main(document.getElementById('graphContainer'))">

    <!-- Creates a container for the graph with a grid wallpaper -->
    <div id="graphContainer" style="position:relative;overflow:hidden;width:100%;height:100%;background:url('editors/images/grid.gif');cursor:default;">
    </div>
</body></html>

```