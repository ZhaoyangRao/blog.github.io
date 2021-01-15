(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"mxgraph上手实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mxgraph上手实践"}},[e._v("#")]),e._v(" mxgraph上手实践")]),e._v(" "),t("h3",{attrs:{id:"由来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[e._v("#")]),e._v(" 由来")]),e._v(" "),t("p",[e._v("由于这次项目合作过程中，在流程图绘制的技术选型中，前端选择了mxgraph，所以在边写边学的过程中，对mxgraph的使用作一些简单的记录\nmxgraph的api是全英文的，而且官网有许多的例子，在开发项目的过程没有时间去安安心心的全部阅读，以后慢慢再去消化一遍吧\n我们的需求，前端可以编辑流程图，保存编辑好流程图xml格式到后端，在只显示流程图（不可编辑界面）的界面里读取xml，点击每一个cell触发事件\n去官网下一个mxgraph里面有大量的例子什么的，基本的引入之类的就不说了，主要聊聊基本用法吧")]),e._v(" "),t("h3",{attrs:{id:"判断兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断兼容"}},[e._v("#")]),e._v(" 判断兼容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if (!mxClient.isBrowserSupported()) {\n                // Displays an error message if the browser is not supported.\n                mxUtils.error('Browser is not supported!', 200, false);\n                return\n            }\n")])])]),t("h3",{attrs:{id:"新建画板，画板相关操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建画板，画板相关操作"}},[e._v("#")]),e._v(" 新建画板，画板相关操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('            // 构造一个graph，新建画板\n            var container = document.getElementById("main");\n            var graph = new mxGraph(container);\n            // i 在图形中创建默认组件 //获取顶层，可以认为是父节点\n            var parent = graph.getDefaultParent();\n')])])]),t("h3",{attrs:{id:"添加节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[e._v("#")]),e._v(" 添加节点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("            var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 60);\n            var v2 = graph.insertVertex(parent, null, 'World!', 200, 20, 80, 60);\n            var v3 = graph.insertVertex(parent, null, 'World!', 400, 20, 80, 60);\n")])])]),t("h3",{attrs:{id:"添加连线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加连线"}},[e._v("#")]),e._v(" 添加连线")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("             var e1 = graph.insertEdge(parent, null, '', v2, v3);\n             \n            //线条拐点\n            e1.geometry.points = [new mxPoint(270, 150)];\n")])])]),t("h3",{attrs:{id:"其他功能api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他功能api"}},[e._v("#")]),e._v(" 其他功能api")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("            // 鼠标框选 \n            new mxRubberband(graph);\n            // 开启可以拖拽建立关系,可以连线\n            graph.setConnectable(true);\n            // 开启方块上的文字编辑功能\n            graph.setCellsEditable(true);\n            // 启用对齐线帮助定位\n            mxGraphHandler.prototype.guidesEnabled = true;\n            // 选择基本元素开启\n            graph.setEnabled(true);\n            // 禁用浏览器默认的右键菜单栏\n            mxEvent.disableContextMenu(container);\n            // 只可预览不可选中拖动连接\n            graph.setEnabled(true);\n            // 禁止改变元素大小 \n            graph.setCellsResizable(false);\n            // 容器大小自适应 \n            graph.setResizeContainer(false);\n            // 可否重复连接 \n            graph.setMultigraph(false);\n            // 放大\n            graph.zoomIn();\n            //缩小\n            graph.zoomOut();\n            //还原\n            graph.zoomActual();\n            //居中缩放\n            graph.centerZoom = true;\n")])])]),t("h3",{attrs:{id:"常用图形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用图形"}},[e._v("#")]),e._v(" 常用图形")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        // 画方块 默认情况下\n        graph.insertVertex(parent, null, '矩形', 50, 50, 150, 150);\n        // 画方块 圆角矩形\n        // shape=rounded 定义圆角  arcSize=10 定义圆角弧度\n        graph.insertVertex(parent, null, '圆角矩形', 300, 50, 150, 150, \"rounded=true;perimeter=ellipsePerimeter;arcSize=20;\");\n        // 画椭圆\n        // shape=elipse 定义椭圆  perimeter=ellipsePerimeter 让连线的箭头或起点触到边缘\n        graph.insertVertex(parent, null, '椭圆', 550, 50, 150, 150, \"shape=ellipse;perimeter=ellipsePerimeter;\");\n        // 画三角形\n        // shape=triangl 定义三角形  perimeter=ellipsePerimeter 让连线的箭头或起点触到边缘 direction=south 让三角形倒立\n        graph.insertVertex(parent, null, '三角形', 800, 50, 150, 150, \"shape=triangle;perimeter=ellipsePerimeter;direction=south;\");\n        // 画菱形\n        // shape=rhombus 定义菱形\n        graph.insertVertex(parent, null, '三角形', 1050, 50, 150, 150, \"shape=rhombus;perimeter=ellipsePerimeter;\");\n        // 画柱形\n        // shape=cylinder 定义柱形\n        graph.insertVertex(parent, null, '柱形', 1300, 50, 150, 150, \"shape=cylinder;perimeter=ellipsePerimeter;\");\n        // 画人\n        // shape=actor 定义演员\n        graph.insertVertex(parent, null, '演员', 50, 300, 150, 150, \"shape=actor;perimeter=ellipsePerimeter;\");\n        // 画云\n        graph.insertVertex(parent, null, '云', 300, 300, 150, 150, \"shape=cloud;perimeter=ellipsePerimeter;\");\n　　　　　//矩形默认情况下\n        graph.insertVertex(parent, null, '矩形', 550, 300, 150, 150, \"shape=rectangle;perimeter=ellipsePerimeter;\");\n　　　　 //泳道\n        graph.insertVertex(parent, null, '泳道', 800, 300, 150, 150, \"shape=swimlane;perimeter=ellipsePerimeter;\");\n　　　　  //双圆\n        graph.insertVertex(parent, null, '双圆', 1050, 300, 150, 150, \"shape=doubleEllipse;perimeter=ellipsePerimeter;\");\n　　　　 //六边形\n        graph.insertVertex(parent, null, '六边形', 1300, 300, 150, 150, \"shape=hexagon;perimeter=ellipsePerimeter;\");\n")])])]),t("h3",{attrs:{id:"查看视图中图形的xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看视图中图形的xml"}},[e._v("#")]),e._v(" 查看视图中图形的xml")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("                var encoder = new mxCodec();\n                var node = encoder.encode(graph.getModel());\n                console.log(node)\n")])])]),t("h3",{attrs:{id:"读取xml显示在图形中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取xml显示在图形中"}},[e._v("#")]),e._v(" 读取xml显示在图形中")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("            var xml =''\n            var doc = mxUtils.parseXml(xml);\n            var codec = new mxCodec(doc);  \n            codec.decode(doc.documentElement, graph.getModel());\n")])])]),t("h3",{attrs:{id:"style样式的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style样式的定义"}},[e._v("#")]),e._v(" style样式的定义")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        // 声明一个object\n        var style = {};\n        // 克隆一个object\n        style = mxUtils.clone(style);\n        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LABEL;  // 不设置这个属性 背景图片不出来\n        // 边框颜色\n        style[mxConstants.STYLE_STROKECOLOR] = '#999999';\n        // 边框大小\n        style[mxConstants.STYLE_STROKEWIDTH] = 10;\n        // 字体颜色\n        style[mxConstants.STYLE_FONTCOLOR] = '#FFFF00';\n        // 文字水平方式\n        style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;\n        // 文字垂直对齐\n        style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_BOTTOM;\n        // 字体大小\n        style[mxConstants.STYLE_FONTSIZE] = 30;\n        // 底图水平对齐\n        style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_CENTER;\n        // 底图垂直对齐\n        style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_CENTER;\n        // 图片路径\n        //style[mxConstants.STYLE_IMAGE] = 'images/icons48/gear.png';\n        style[mxConstants.STYLE_IMAGE] = 'http://imgstatic.baidu.com/img/image/shouye/qizhi0822.jpg';\n        // 背景图片宽 \n        style[mxConstants.STYLE_IMAGE_WIDTH] = 150;\n        // 背景图片高\n        style[mxConstants.STYLE_IMAGE_HEIGHT] = 200;\n        // 上间距设置\n        // 即使下边定义了全局设置，但这里单独设置上边间距仍单独有效\n        style[mxConstants.STYLE_SPACING_TOP] = 30;\n        // 四边间距设置\n        style[mxConstants.STYLE_SPACING] = 10;\n        // 把定义好的样式object push到stylesheet\n        graph.getStylesheet().putCellStyle(\"style1\", style);\n        //样式使用\n　　     var v1 = graph.insertVertex(parent, null, \"text1\", 50, 50, 200, 200, \"style1\"); \n")])])]),t("h3",{attrs:{id:"给图中添加事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给图中添加事件"}},[e._v("#")]),e._v(" 给图中添加事件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   graph.addListener(mxEvent.DOUBLE_CLICK, function (sender, evt) {\n        var cell = evt.getProperty('cell');\n      });\n")])])]),t("h3",{attrs:{id:"工具栏的常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具栏的常用操作"}},[e._v("#")]),e._v(" 工具栏的常用操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('buttons = [\n            {\n                label : "选择所有",\n                fun : function(graph){\n                    return function(evt){    \n                        graph.selectAll();    \n                    };\n                }\n            },\n            {\n                label : "选择一个",\n                fun : function(graph){\n                    return function(evt){    \n                        graph.selectCell();    \n                    };\n                }\n            },\n            {\n                label : "取消选择",    \n                fun : function(graph){\n                    return function(evt){\n                        var cells = graph.getSelectionCells();    \n                        graph.removeSelectionCells(cells);                            \n                    };\n                }\n            },\n            {\n                label : "随机添加",    \n                fun : function(graph){\n                    return function(evt){\n                        var randColor = function(){\n                            return "rgb("+randint(0,255)+","+randint(0,255)+","+randint(0,255)+")";    \n                        };\n                        \n                        var style = "fillColor=" + randColor() + "; fontColor=" + randColor();\n                        var width = randint(50, 300);\n                        var height = randint(50, 300);\n                        var x = randint(0, 1200 - width);\n                        var y = randint(0, 600 - height);\n\n                        graph.insertVertex(graph.getDefaultParent(), null, "随机添加", x, y, width, height, style);\n                    };    \n                }\n            },\n            {\n                label : "分组所选",\n                fun : function(graph){\n                    return function(evt){\n                        var cells = graph.getSelectionCells();\n                        graph.groupCells(null, 1, cells);\n                    };\n                }\n            },\n            {\n                label : "取消分组",\n                fun : function(graph){\n                    return function(evt){\n                        var cells = graph.getSelectionCells();\n                        graph.ungroupCells(cells);\n                    };\n                }\n            },\n            {\n                label : "删除所选",\n                fun : function(graph){\n                    return function(evt){\n                        var cells = graph.getSelectionCells();\n                        graph.removeCells(cells);\n                    };\n                }\n            },\n            {\n                label : "缩小",\n                fun : function(graph){\n                    return function(evt){\n                        graph.zoomOut();\n                    };\n                }\n            },\n            {\n                label : "放大",\n                fun : function(graph){\n                    return function(evt){\n                        graph.zoomIn();\n                    };\n                }\n            },\n            {\n                label : "还原",\n                fun : function(graph){\n                    return function(evt){\n                        graph.zoomActual();\n                    };\n                }\n            },\n            {\n                label : "随机所选元素的位置",\n                fun : function(graph){\n                    return function(evt){\n                        var cells = graph.getSelectionCells();\n                        for(var i=0; i<cells.length; i++){\n                            var x = randint(0, 1200 - cells[i].geometry.width);        \n                            var y = randint(0, 600 - cells[i].geometry.height);        \n                        }\n                        graph.moveCells([cells[i]], x , y);                        \n                    };\n                }\n            }\n\n        ]; \n')])])]),t("h3",{attrs:{id:"添加button"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加button"}},[e._v("#")]),e._v(" 添加button")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" document.body.appendChild(mxUtils.button('图中显示转化的xml信息', function(evt) {\n                var encoder = new mxCodec();\n                var node = encoder.encode(graph.getModel());\n                console.log(node)\n            }));\n")])])]),t("h3",{attrs:{id:"小栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小栗子"}},[e._v("#")]),e._v(" 小栗子")]),e._v(" "),t("h4",{attrs:{id:"下面是简单的html小例子，官网还有许多功能，这里只是简单的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下面是简单的html小例子，官网还有许多功能，这里只是简单的基本操作"}},[e._v("#")]),e._v(" 下面是简单的html小例子，官网还有许多功能，这里只是简单的基本操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!--\n  Copyright (c) 2006-2018, JGraph Ltd\n  \n  Hello, World! example for mxGraph. This example demonstrates using\n  a DOM node to create a graph and adding vertices and edges.\n--\x3e\n<html>\n\n<head>\n    <title>Hello, World! example for mxGraph</title>\n\n    \x3c!-- Sets the basepath for the library if not in same directory --\x3e\n    <script type=\"text/javascript\">\n        mxBasePath = '../src';\n    <\/script>\n\n    \x3c!-- Loads and initializes the library --\x3e\n    <script type=\"text/javascript\" src=\"../src/js/mxClient.js\"><\/script>\n\n    \x3c!-- Example code --\x3e\n    <script type=\"text/javascript\">\n        // Program starts here. Creates a sample graph in the\n        // DOM node with the specified ID. This function is invoked\n        // from the onLoad event handler of the document (see below).\n        function main(container) {\n            // Checks if the browser is supported\n            if (!mxClient.isBrowserSupported()) {\n                // Displays an error message if the browser is not supported.\n                mxUtils.error('Browser is not supported!', 200, false);\n                return\n            }\n\n            // 构造一个graph\n            var graph = new mxGraph(container);\n\n            // 鼠标框选 \n            new mxRubberband(graph);\n            // i 在图形中创建默认组件\n            var parent = graph.getDefaultParent();\n\n            // 添加节点\n            var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 60);\n            var v2 = graph.insertVertex(parent, null, 'World!', 200, 20, 80, 60);\n            var v3 = graph.insertVertex(parent, null, 'World!', 400, 20, 80, 60);\n\n            //连线\n            var e1 = graph.insertEdge(parent, null, '', v2, v3);\n            e1.geometry.points = [new mxPoint(270, 150)];\n            // 开启可以拖拽建立关系,可以连线\n            graph.setConnectable(true);\n            // 开启方块上的文字编辑功能\n            graph.setCellsEditable(true);\n            // 启用对齐线帮助定位\n            mxGraphHandler.prototype.guidesEnabled = true;\n            // 选择基本元素开启\n            graph.setEnabled(true);\n            // 禁用浏览器默认的右键菜单栏\n            mxEvent.disableContextMenu(container);\n            // 只可预览不可选中拖动连接\n            graph.setEnabled(true);\n            // 禁止改变元素大小 \n            graph.setCellsResizable(false);\n            // 容器大小自适应 \n            graph.setResizeContainer(false);\n            // 可否重复连接 \n            graph.setMultigraph(false);\n            // 放大\n            graph.zoomIn();\n            //缩小\n            graph.zoomOut();\n            //还原\n            graph.zoomActual();\n            //居中缩放\n            graph.centerZoom = true;\n            document.body.appendChild(mxUtils.button('图中显示转化的xml信息', function(evt) {\n                var encoder = new mxCodec();\n                var node = encoder.encode(graph.getModel());\n                console.log(node)\n            }));\n            //将图形的xml进行回显\n            //            var xml =''\n            // var doc = mxUtils.parseXml(xml);\n            // var codec = new mxCodec(doc);  \n            // codec.decode(doc.documentElement, graph.getModel());\n        };\n    <\/script>\n</head>\n\n\x3c!-- Page passes the container for the graph to the program --\x3e\n\n<body onload=\"main(document.getElementById('graphContainer'))\">\n\n    \x3c!-- Creates a container for the graph with a grid wallpaper --\x3e\n    <div id=\"graphContainer\" style=\"position:relative;overflow:hidden;width:100%;height:100%;background:url('editors/images/grid.gif');cursor:default;\">\n    </div>\n</body></html>\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);