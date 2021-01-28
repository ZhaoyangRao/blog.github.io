(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,n,d){e.exports=d.p+"assets/img/diff01.810efedd.png"},139:function(e,n,d){e.exports=d.p+"assets/img/diff02.b0e0ec3d.png"},160:function(e,n,d){"use strict";d.r(n);var t=d(0),l=Object(t.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[e._v("#")]),e._v(" diff算法")]),e._v(" "),t("p",[e._v("diff算法是用来干什么事情的？顾名思义就是来比较不同的算法，diff不就是different的缩写嘛。")]),e._v(" "),t("p",[e._v("对于前端来讲，大部分diff算法作用主要还是用来比较两颗DOM树的不同，尤其现在的前端框架例如vue react，也就是虚拟树(Virtual DOM)和真实树(Actual DOM)的不同")]),e._v(" "),t("h3",{attrs:{id:"传统的diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统的diff算法"}},[e._v("#")]),e._v(" 传统的diff算法")]),e._v(" "),t("p",[e._v("传统的diff算法比较两个树形结构，通过循环递归对所有的节点进行比较操作，算法的复杂度为O(n3)，n为树节点的总算。"),t("br"),e._v("\n为什么是n3呢？"),t("br"),e._v("\n同一级比较O(n1)，跨级比较O(n2)，最后还要根据前面比较出来的差异计算出最小的转换方式O(n3)，简单的1000个节点，都需要达到10亿次的比较，传统的diff无法直接用在前端框架中，所以react vue等对diff算法进行了优化，使其复杂度降低到O(n1)")]),e._v(" "),t("h3",{attrs:{id:"vue中的diff算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue中的diff算法"}},[e._v("#")]),e._v(" vue中的diff算法")]),e._v(" "),t("p",[e._v("传统的diff算法消耗这么大，vue到底是如何降低复杂度的呢？"),t("br"),e._v("\n最重要的就是vue只进行同级比较，忽略跨级操作，自然而然的没有传统diff里面的跨级比较以及根据同级跨级差异计算最小转换方式的计算了。"),t("br")]),e._v(" "),t("p",[e._v("那么同级操作是如何实现diff的呢？"),t("br")]),e._v(" "),t("h4",{attrs:{id:"虚拟节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点"}},[e._v("#")]),e._v(" 虚拟节点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<div id=\"v\" class=\"classA\"><div> 对应的 Vnode 就是\n\n{\n  el:  div  //对真实的节点的引用，本例中就是document.querySelector('#id.classA')\n  tagName: 'DIV',   //节点的标签\n  sel: 'div#v.classA'  //节点的选择器\n  data: null,       // 一个存储节点属性的对象，对应节点的el[prop]属性，例如onclick , style\n  children: [], //存储子节点的数组，每个子节点也是vnode结构\n  text: null,    //如果是文本节点，对应文本节点的textContent，否则为null\n}\n")])])]),t("h4",{attrs:{id:"patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[e._v("#")]),e._v(" patch")]),e._v(" "),t("p",[e._v("diff回调用patch函数，patch接收两个参数vnode，oldVnode")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function patch (oldVnode, vnode) {\n    //用来判断是不是同样类型的节点\n    if (sameVnode(oldVnode, vnode)) {\n        patchVnode(oldVnode, vnode)\n    } else {\n    //不同类型的节点，直接走else，走插入，删除节点的操作\n        const oEl = oldVnode.el\n        let parentEle = api.parentNode(oEl)\n        createEle(vnode)\n        if (parentEle !== null) {\n            api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl))\n            api.removeChild(parentEle, oldVnode.el)\n            oldVnode = null\n        }\n    }\n    return vnode\n}\n\nfunction sameVnode(oldVnode, vnode){\n   //两节点key值相同，并且sel属性值相同，即认为两节点属同一类型，可进行下一步比较\n    return vnode.key === oldVnode.key && vnode.sel === oldVnode.sel\n}\n")])])]),t("p",[e._v("从上面的代码可以看出，patch函数内第一个if判断sameVnode(oldVnode, vnode)用来判断是不是同样类型的节点，只要节点的key和sel属性值不同，sameVnode就返回false，就认为是不同类型的节点，直接走else，走插入删除节点的操作。"),t("br")]),e._v(" "),t("p",[e._v("sel属性我们可以看到 'sel': 'div#v.classA' 其实就是描述这个节点的dom类型，包括class等，很好理解不同的话肯定就是不同的节点。"),t("br")]),e._v(" "),t("p",[e._v("key对于vue的特殊之处就可以明显的感觉到了，这也是为什么vue的key如此重要，它是会影响到算法来判断sameVnode是不是相同节点的一个重要标志。"),t("br")]),e._v(" "),t("h4",{attrs:{id:"patchvnode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patchvnode"}},[e._v("#")]),e._v(" patchVnode")]),e._v(" "),t("p",[e._v("从patch函数中可以看到，如果被vue的sameVnode判断为相同节点的会走patchVnode(oldVnode, vnode)函数。")]),e._v(" "),t("p",[e._v("其实这个代码块主要是来判断新旧节点的子节点的情况的，根据新旧节点子节点的各种异同情况走不同的处理。尤其都有子节点，且子节点都不相同的情况会走另外一个重要的函数updateChildren。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("patchVnode (oldVnode, vnode) {\n    const el = vnode.el = oldVnode.el  //很重要的一步让vnode.el引用到现在的真实dom，当el修改时，vnode.el会同步变化。\n    let i, oldCh = oldVnode.children, ch = vnode.children\n    if (oldVnode === vnode) return  //新旧节点的引用一致，认为没有变化，就不做任何操作\n   \n    if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {\n     //新旧节点文本节点的比较，如果不同就set新节点的文本\n        api.setTextContent(el, vnode.text)\n    }else {\n        updateEle(el, vnode, oldVnode)     \n        if (oldCh && ch && oldCh !== ch) {\n            //新旧节点都有子节点，并且比较了一下还不相同就调用updateChildren\n            updateChildren(el, oldCh, ch)\n        }else if (ch){  \n            //只有新节点有子节点，添加新的子节点\n            createEle(vnode) \n        }else if (oldCh){  \n            //只有旧节点内存在子节点，执行删除old子节点操作\n            api.removeChildren(el)\n        }\n    }\n}\n")])])]),t("h4",{attrs:{id:"updatechildren"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updatechildren"}},[e._v("#")]),e._v(" updateChildren")]),e._v(" "),t("p",[e._v("当新旧节点都有子节点，并且还都不相同就会进入updateChildren这个函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("updateChildren (parentElm, oldCh, newCh) {\n    let oldStartIdx = 0, newStartIdx = 0\n    let oldEndIdx = oldCh.length - 1\n    let oldStartVnode = oldCh[0]\n    let oldEndVnode = oldCh[oldEndIdx]\n    let newEndIdx = newCh.length - 1\n    let newStartVnode = newCh[0]\n    let newEndVnode = newCh[newEndIdx]\n    let oldKeyToIdx\n    let idxInOld\n    let elmToMove\n    let before\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n            if (oldStartVnode == null) {   //对于vnode.key的比较，会把oldVnode = null\n                oldStartVnode = oldCh[++oldStartIdx] \n            }else if (oldEndVnode == null) {\n                oldEndVnode = oldCh[--oldEndIdx]\n            }else if (newStartVnode == null) {\n                newStartVnode = newCh[++newStartIdx]\n            }else if (newEndVnode == null) {\n                newEndVnode = newCh[--newEndIdx]\n            }else if (sameVnode(oldStartVnode, newStartVnode)) {\n                patchVnode(oldStartVnode, newStartVnode)\n                oldStartVnode = oldCh[++oldStartIdx]\n                newStartVnode = newCh[++newStartIdx]\n            }else if (sameVnode(oldEndVnode, newEndVnode)) {\n                patchVnode(oldEndVnode, newEndVnode)\n                oldEndVnode = oldCh[--oldEndIdx]\n                newEndVnode = newCh[--newEndIdx]\n            }else if (sameVnode(oldStartVnode, newEndVnode)) {\n                patchVnode(oldStartVnode, newEndVnode)\n                api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))\n                oldStartVnode = oldCh[++oldStartIdx]\n                newEndVnode = newCh[--newEndIdx]\n            }else if (sameVnode(oldEndVnode, newStartVnode)) {\n                patchVnode(oldEndVnode, newStartVnode)\n                api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)\n                oldEndVnode = oldCh[--oldEndIdx]\n                newStartVnode = newCh[++newStartIdx]\n            }else {\n               // 使用key时的比较\n                if (oldKeyToIdx === undefined) {\n                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) // 有key生成index表\n                }\n                idxInOld = oldKeyToIdx[newStartVnode.key]\n                if (!idxInOld) {\n                    api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)\n                    newStartVnode = newCh[++newStartIdx]\n                }\n                else {\n                    elmToMove = oldCh[idxInOld]\n                    if (elmToMove.sel !== newStartVnode.sel) {\n                        api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)\n                    }else {\n                        patchVnode(elmToMove, newStartVnode)\n                        oldCh[idxInOld] = null\n                        api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)\n                    }\n                    newStartVnode = newCh[++newStartIdx]\n                }\n            }\n        }\n        if (oldStartIdx > oldEndIdx) {\n            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el\n            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)\n        }else if (newStartIdx > newEndIdx) {\n            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\n        }\n}\n")])])]),t("p",[e._v("上面的代码粗略看一眼，你会看到很多熟悉的关键函数patchVnode，sameVnode，addVnodes，removeVnodes，insertBefore还有一些关键的变量oldStartIdx，oldEndIdx，oldEndVnode，oldStartVnode。"),t("br"),e._v("\n其实具体的行为就是由两端至中间的对比，移动，删除，插入。具体的节点还分为有key和无key的情况"),t("br")]),e._v(" "),t("p",[e._v("无key的时候，b即使旧节点有相同的也不会复用，而是直接创建新的，删除旧的"),t("br")]),e._v(" "),t("p",[t("img",{attrs:{src:d(138),alt:"avatar"}})]),e._v(" "),t("p",[e._v("有key的时候，b会得到复用")]),e._v(" "),t("p",[t("img",{attrs:{src:d(139),alt:"avatar"}})])])}),[],!1,null,null,null);n.default=l.exports}}]);