(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return c}));var a=t(1),o=t(9),r=(t(0),t(349)),l={title:"Mempool"},i={id:"version-0.2.0-beta.4/advanced/core/mempool",title:"Mempool",description:"## \u529f\u80fd\u4ecb\u7ecd",source:"@site/versioned_docs/version-0.2.0-beta.4/advanced/core/mempool.md",permalink:"/docs/advanced/core/mempool",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/versioned_docs/version-0.2.0-beta.4/advanced/core/mempool.md",version:"0.2.0-beta.4",sidebar:"version-0.2.0-beta.4/docs",previous:{title:"P2P Network",permalink:"/docs/advanced/core/network"},next:{title:"Storage",permalink:"/docs/advanced/core/storage"}},b=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",children:[]},{value:"\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u68c0\u67e5",id:"\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u68c0\u67e5",children:[]},{value:"\u4e0e\u5176\u4ed6\u6a21\u5757\u7684\u8c03\u7528\u5173\u7cfb",id:"\u4e0e\u5176\u4ed6\u6a21\u5757\u7684\u8c03\u7528\u5173\u7cfb",children:[]},{value:"\u6a21\u5757\u6587\u4ef6",id:"\u6a21\u5757\u6587\u4ef6",children:[]},{value:"\u5177\u4f53\u8bbe\u8ba1",id:"\u5177\u4f53\u8bbe\u8ba1",children:[{value:"\u8bbe\u8ba1\u8981\u6c42",id:"\u8bbe\u8ba1\u8981\u6c42",children:[]},{value:"\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u548c\u5b9e\u73b0\u601d\u8def",id:"\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u548c\u5b9e\u73b0\u601d\u8def",children:[]}]}],p={rightToc:b};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),Object(r.b)("p",null,"Mempool \u7684\u4f5c\u7528\u662f\u6536\u96c6\u5408\u6cd5\u7684\u65b0\u4ea4\u6613\uff0c\u4ee5\u5411 Consensus \u6a21\u5757\u63d0\u4f9b\u7528\u4e8e\u6784\u5efa\u533a\u5757\u7684\u4ea4\u6613\u96c6\u5408\u3002"),Object(r.b)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5f53\u8282\u70b9\u6210\u4e3a\u672c\u8f6e\u5171\u8bc6\u7684 Leader \u540e\uff0c\u4f1a\u5411 Mempool \u8bf7\u6c42\u4e24\u4e2a\u4ea4\u6613\u54c8\u5e0c\u96c6\u5408\u7528\u4e8e\u6784\u5efa\u5171\u8bc6\u63d0\u6848\u3002\n\u4e00\u4e2a\u4ea4\u6613\u54c8\u5e0c\u96c6\u5408\u53eb ",Object(r.b)("inlineCode",{parentName:"p"},"ordered_tx_hashes"),"\uff0c\u7528\u4e8e\u6784\u5efa\u533a\u5757\uff0c\u53c2\u4e0e\u672c\u8f6e\u5171\u8bc6\u8fc7\u7a0b\u3002\n\u53e6\u4e00\u4e2a\u53eb ",Object(r.b)("inlineCode",{parentName:"p"},"propose_tx_hashes"),"\uff0c\u5f53 Mempool \u4e2d\u7684\u4ea4\u6613\u6570\u91cf\u8d85\u51fa\u4e00\u4e2a\u533a\u5757\u6240\u80fd\u653e\u5165\u7684\u6700\u5927\u4ea4\u6613\u6570\u65f6\uff0c\nMempool \u4f1a\u5c06\u5168\u90e8\u6216\u90e8\u5206\u6ea2\u51fa\u7684\u4ea4\u6613\u54c8\u5e0c\u653e\u5165",Object(r.b)("inlineCode",{parentName:"p"},"propose_tx_hashes")," \u4e2d\u3002"),Object(r.b)("p",null,"\u5176\u4ed6\u8282\u70b9\u6536\u5230\u5171\u8bc6\u63d0\u6848\u540e\uff0c\u4e00\u65b9\u9762\u68c0\u67e5 ",Object(r.b)("inlineCode",{parentName:"p"},"ordered_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u662f\u5426\u90fd\u5728\u672c\u5730 Mempool \u4e2d\uff0c\u5982\u6709\u7f3a\u5931\u5219\u5411\u63d0\u6848\u53d1\u8d77\u8005\u540c\u6b65\u4ea4\u6613\u3002\n\u5982\u679c\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u65e0\u6cd5\u6536\u9f50\u4ea4\u6613\uff0c\u5219\u8be5\u63d0\u6848\u89c6\u4e3a\u975e\u6cd5\u3002\u53e6\u4e00\u65b9\u9762\u68c0\u67e5 ",Object(r.b)("inlineCode",{parentName:"p"},"propose_tx_hashes"),"\uff0c\u540c\u6b65\u7f3a\u5931\u7684\u4ea4\u6613\uff0c\u4ee5\u63d0\u9ad8\u5f85\u672a\u6765\u5171\u8bc6\u7684\u4ea4\u6613\u7684\u540c\u6b65\u7387\u3002"),Object(r.b)("p",null,"\u5f53\u8282\u70b9\u6536\u96c6\u5230\u5408\u6cd5\u5171\u8bc6\u63d0\u6848\u7684 2/3+ \u7684 Prevote \u6295\u7968\u65f6\uff0c\u8be5\u63d0\u6848\u5373\u8fbe\u6210\u9501\u5b9a\u6761\u4ef6\uff0c\nConsensus \u6a21\u5757\u4f1a\u901a\u8fc7 Mempool \u62ff\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"ordered_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5168\u90e8\u5b8c\u6574\u4ea4\u6613\uff0c\u5e76\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u4ee5\u4fdd\u8bc1\u5171\u8bc6\u5b89\u5168\u3002"),Object(r.b)("p",null,"\u5f53\u63d0\u6848\u8fbe\u6210\u5171\u8bc6\u540e\uff0cMempool \u8981\u5220\u9664\u5df2\u8fbe\u6210\u5171\u8bc6\u7684\u4ea4\u6613\u3002"),Object(r.b)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u529f\u80fd\u8981\u6c42\uff0c\u5728 Mempool \u4e2d\u6709\u4ee5\u4e0b\u63a5\u53e3\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"insert"),": \u65b0\u4ea4\u6613\u901a\u8fc7\u5fc5\u8981\u7684\u68c0\u67e5\u540e\u63d2\u5165 Mempool\u3002\u8be6\u7ec6\u7684\u68c0\u67e5\u8fc7\u7a0b\u89c1",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#%E4%BA%A4%E6%98%93%E7%9A%84%E5%90%88%E6%B3%95%E6%80%A7%E6%A3%80%E6%9F%A5"}),"\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u68c0\u67e5"),"\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"package"),": \u4ece Mempool \u4e2d\u6253\u5305\u4e24\u4e2a\u4ea4\u6613\u54c8\u5e0c\u96c6\u5408\u7ed9 Consensus \u7528\u4e8e\u6784\u5efa\u5171\u8bc6\u63d0\u6848\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flush"),": \u4ece Mempool \u4e2d\u5220\u9664\u8fbe\u6210\u5171\u8bc6\u7684\u4ea4\u6613\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"get_full_txs"),": \u4ece Mempool \u4e2d\u8fd4\u56de\u6307\u5b9a\u7684\u4ea4\u6613\u54c8\u5e0c\u96c6\u5408\u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ensure_order_txs"),": \u786e\u4fdd ",Object(r.b)("inlineCode",{parentName:"li"},"ordered_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u90fd\u5728 Mempool \u4e2d\uff0c\u5bf9\u4e8e\u7f3a\u5931\u7684\u4ea4\u6613\u4f1a\u901a\u8fc7 Network \u540c\u6b65\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sync_propose_txs"),": \u68c0\u67e5 ",Object(r.b)("inlineCode",{parentName:"li"},"propose_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u662f\u5426\u90fd\u5728 Mempool \u4e2d\uff0c\u5e76\u540c\u6b65\u7f3a\u5931\u7684\u4ea4\u6613\u3002")),Object(r.b)("h2",{id:"\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u68c0\u67e5"},"\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u68c0\u67e5"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u6c60\u662f\u5426\u5df2\u6ee1"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684\u5b57\u8282\u5927\u5c0f\u662f\u5426\u8d85\u51fa\u9608\u503c"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"cycles_limit")," \u662f\u5426\u8d85\u51fa\u9608\u503c"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"chain_id")," \u662f\u5426\u6b63\u786e"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"timeout")," \u662f\u5426\u5728\u5f53\u524d\u7684\u5408\u6cd5\u7a97\u53e3\u5185"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u662f\u5426\u4e0e\u4ea4\u6613\u6c60\u5185\u5df2\u6709\u7684\u4ea4\u6613\u91cd\u590d"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u662f\u5426\u4e0e\u5df2\u4e0a\u94fe\u7684\u4ea4\u6613\u91cd\u590d"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684\u7b7e\u540d\u662f\u5426\u6b63\u786e"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684\u53d1\u8d77\u8005\u7684\u5730\u5740\u662f\u5426\u88ab\u6388\u6743"),Object(r.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684\u53d1\u8d77\u8005\u7684\u8d26\u6237\u4f59\u989d\u662f\u5426\u8db3\u591f\u652f\u4ed8\u6700\u4f4e\u4ea4\u6613\u8d39")),Object(r.b)("h2",{id:"\u4e0e\u5176\u4ed6\u6a21\u5757\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e\u5176\u4ed6\u6a21\u5757\u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs-img/txpool_module_relationship.png",alt:"image"}))),Object(r.b)("h4",{id:"\u4e0e-graphql-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Graphql \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u4f7f\u7528 Graphql \u5ba2\u6237\u7aef\u751f\u6210\u4ea4\u6613\u540e\uff0cGraphql \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"insert")," \u63a5\u53e3\uff0c\u5c06\u4ea4\u6613\u63d2\u5165 Mempool\u3002")),Object(r.b)("h4",{id:"\u4e0e-network-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Network \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5176\u4ed6\u7528\u6237\u751f\u6210\u7684\uff0c\u901a\u8fc7\u7f51\u7edc\u53d1\u6765\u7684\u4ea4\u6613\uff0cNetwork \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"insert")," \u63a5\u53e3\uff0c\u5c06\u4ea4\u6613\u63d2\u5165 Mempool\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u5411\u5176\u4ed6\u8282\u70b9\u83b7\u53d6\u6307\u5b9a\u7684\u5b8c\u6574\u4ea4\u6613\u65f6\uff0cMempool \u4f1a\u8c03\u52a8 Network \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"pull_txs")," \u63a5\u53e3\uff0c\u4ee5\u83b7\u53d6\u6307\u5b9a\u7684\u4ea4\u6613\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u5176\u4ed6\u8282\u70b9\u8bf7\u6c42\u6307\u5b9a\u7684\u5b8c\u6574\u4ea4\u6613\u65f6\uff0cNetwork \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_full_txs")," \u63a5\u53e3\uff0c\u4ee5\u83b7\u5f97\u6307\u5b9a\u7684\u4ea4\u6613\u3002")),Object(r.b)("h4",{id:"\u4e0e-executor-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Executor \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728\u5bf9\u8981 ",Object(r.b)("inlineCode",{parentName:"li"},"insert")," \u7684\u4ea4\u6613\u8fdb\u884c\u68c0\u67e5\u65f6\uff0cMempool \u4f1a\u8c03\u7528 Executor \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"read")," \u63a5\u53e3\uff0c\u67e5\u8be2\u4ea4\u6613\u53d1\u8d77\u8005\u7684\u6388\u6743\u60c5\u51b5\u4ee5\u53ca\u8d26\u6237\u4f59\u989d\uff0c\n\u4ee5\u5b8c\u6210\u76f8\u5e94\u7684\u68c0\u67e5\u3002")),Object(r.b)("h4",{id:"\u4e0e-storage-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Storage \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728\u5bf9\u8981  ",Object(r.b)("inlineCode",{parentName:"li"},"insert"),"  \u7684\u4ea4\u6613\u8fdb\u884c\u68c0\u67e5\u65f6\uff0cMempool \u4f1a\u8c03\u7528 Storage \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_transaction_by_hash")," \u63a5\u53e3\u7528\u4e8e\u67e5\u91cd\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5728\u5bf9\u8981  ",Object(r.b)("inlineCode",{parentName:"li"},"insert"),"  \u7684\u4ea4\u6613\u8fdb\u884c\u68c0\u67e5\u65f6\uff0cMempool \u4f1a\u8c03\u7528 Storage \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_latest_block")," \u63a5\u53e3\u7528\u4e8e\u83b7\u53d6\u6700\u65b0\u7684\u533a\u5757\uff0c\n\u8fdb\u800c\u83b7\u5f97\u5fc5\u8981\u7684\u72b6\u6001\uff0c\u7528\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"chain_id")," \u7684\u68c0\u67e5\u4ee5\u53ca\u7528\u4e8e\u521b\u5efa Executor \u4ee5\u5b8c\u6210\u76f8\u5e94\u7684\u68c0\u67e5\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"package")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"flush")," \u65f6\uff0cMempool \u9700\u8981\u8c03\u7528 Storage \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_latest_block")," \u63a5\u53e3\u4ee5\u83b7\u53d6\u6700\u65b0\u7684\u533a\u5757\uff0c\n\u8fdb\u800c\u5f97\u5230\u6700\u65b0\u9ad8\u5ea6\u4f5c\u4e3a\u5fc5\u8981\u7684\u72b6\u6001\u4ee5\u5b8c\u6210\u76f8\u5e94\u7684\u4efb\u52a1\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"get_full_txs")," \u65f6\uff0cMempool \u5fc5\u8981\u65f6\u4f1a\u8c03\u7528 Storage \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_transactions")," \u63a5\u53e3\u4ee5\u83b7\u5f97\u6307\u5b9a\u7684\u5b8c\u6574\u4ea4\u6613\u3002")),Object(r.b)("h4",{id:"\u4e0e-consensus-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Consensus \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5f53\u8282\u70b9\u662f\u5f53\u524d\u5171\u8bc6\u8f6e\u6b21\u7684 Leader \u65f6\uff0cConsensus \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"package")," \u63a5\u53e3\uff0c\u4ee5\u83b7\u5f97\u7528\u4e8e\u6784\u9020\u5171\u8bc6\u63d0\u6848\u7684\u4e24\u4e2a\u4ea4\u6613\u54c8\u5e0c\u96c6\u5408\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u8282\u70b9\u6536\u5230\u5171\u8bc6\u63d0\u6848\u65f6\uff0cConsensus \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"ensure_order_txs")," \u63a5\u53e3\uff0c\n\u68c0\u67e5\u63d0\u6848\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"ordered_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u662f\u5426\u90fd\u5728 Mempool \u4e2d\uff0c\n\u5bf9\u4e8e\u7f3a\u5931\u7684\u4ea4\u6613\uff0cMempool \u4f1a\u8c03\u7528 Network \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"pull_txs")," \u63a5\u53e3\u83b7\u53d6\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u8282\u70b9\u6536\u5230\u5171\u8bc6\u63d0\u6848\u65f6\uff0cConsensus \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"sync_propose_txs")," \u63a5\u53e3\uff0c\n\u68c0\u67e5\u63d0\u6848\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"propose_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u662f\u5426\u90fd\u5728 Mempool \u4e2d\uff0c\n\u5bf9\u4e8e\u7f3a\u5931\u7684\u4ea4\u6613\uff0cMempool \u4f1a\u8c03\u7528 Network \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"pull_txs")," \u63a5\u53e3\u83b7\u53d6\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u67d0\u4e2a\u63d0\u6848\u8fbe\u6210\u9501\u5b9a\u6761\u4ef6\u65f6\uff0cConsensus \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"get_full_txs")," \u63a5\u53e3\uff0c\n\u4ee5\u83b7\u5f97\u8be5\u63d0\u6848\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"ordered_tx_hashes")," \u6240\u5bf9\u5e94\u7684\u5b8c\u6574\u4ea4\u6613\uff0c\u5e76\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u786e\u4fdd\u88ab\u9501\u4f4f\u7684\u63d0\u6848\u7684\u5b8c\u6574\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"ordered_tx")," \u4e0d\u4f1a\u4e22\u5931\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u67d0\u4e2a\u63d0\u6848\u8fbe\u6210\u5171\u8bc6\u540e\uff0cConsensus \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"flush")," \u63a5\u53e3\uff0c\u4ee5\u4ece Mempool \u4e2d\u5220\u9664\u8fbe\u6210\u5171\u8bc6\u7684\u4ea4\u6613\u3002")),Object(r.b)("h4",{id:"\u4e0e-synchronization-\u7684\u8c03\u7528\u5173\u7cfb"},"\u4e0e Synchronization \u7684\u8c03\u7528\u5173\u7cfb"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5f53\u6536\u5230\u6bd4\u6700\u65b0\u9ad8\u5ea6\u9ad8\u4e00\u4e2a\u5757\u7684\u5b8c\u6574\u7684\u5408\u6cd5\u533a\u5757\u540e\uff0cSynchronization \u4f1a\u8c03\u7528 Mempool \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"flush")," \u63a5\u53e3\uff0c\u4ece Mempool \u4e2d\u5220\u9664\u8fbe\u6210\u5171\u8bc6\u7684\u4ea4\u6613\u3002")),Object(r.b)("h2",{id:"\u6a21\u5757\u6587\u4ef6"},"\u6a21\u5757\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mempool\n\u2502   Cargo.toml    \n\u2502\n\u2514\u2500\u2500\u2500src\n    \u2502   context.rs      // \u83b7\u53d6\u4ea4\u6613\u7684\u4e0a\u4e0b\u6587\uff0c\u7528\u4e8e\u5224\u65ad\u4ea4\u6613\u662f\u672c\u5730 Graphql \u53d1\u8d77\u8fd8\u662f\u6765\u81ea\u7f51\u7edc\n    \u2502   lib.rs          // \u5b9e\u73b0 Mempool \u7684\u6240\u6709\u5bf9\u5916\u63a5\u53e3\n    \u2502   map.rs          // \u5b9e\u73b0\u5e76\u53d1 map\n    \u2502   tx_cache.rs     // \u5b9e\u73b0 Mempool \u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\n    \u2502\n    \u2514\u2500\u2500\u2500adapter\n    \u2502   \u2502   mod.rs      // \u5b9e\u73b0 mempool \u9002\u914d\u5668\uff0c\u5305\u542b Mempool \u6240\u9700\u7684\u6240\u6709\u5916\u90e8\u8d44\u6e90\n    \u2502   \u2502   message.rs  // \u5b9a\u4e49 Mempool \u7684\u7f51\u7edc\u901a\u4fe1\u6d88\u606f\n    \u2502   \u2502  \n    \u2514\u2500\u2500\u2500test \n")),Object(r.b)("h2",{id:"\u5177\u4f53\u8bbe\u8ba1"},"\u5177\u4f53\u8bbe\u8ba1"),Object(r.b)("h3",{id:"\u8bbe\u8ba1\u8981\u6c42"},"\u8bbe\u8ba1\u8981\u6c42"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"\u6309\u63d2\u5165\u987a\u5e8f\u6253\u5305"),"\u3002\n\u4e3a\u907f\u514d\u7528\u6237\u7684\u5408\u6cd5\u65b0\u4ea4\u6613\u5728\u4ea4\u6613\u6c60\u4e2d\u59cb\u7ec8\u65e0\u6cd5\u88ab\u6253\u5305\uff0c\u5e76\u517c\u987e\u4e00\u5b9a\u7684\u516c\u5e73\u6027\uff0c\u4ea4\u6613\u6c60\u5728\u6253\u5305\u65f6\uff0c\n\u603b\u4f53\u4e0a\u662f\u6309\u7167\u4ea4\u6613\u63d2\u5165\u4ea4\u6613\u6c60\u7684\u987a\u5e8f\u6253\u5305\u3002"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"\u652f\u6301\u9ad8\u5e76\u53d1"),"\u3002\n\u4ea4\u6613\u7684\u63d2\u5165\u9700\u8981\u6ee1\u8db3\u9ad8\u5e76\u53d1\u7684\u8981\u6c42\uff0c\u63d2\u5165\u4e0e\u6253\u5305\u53ef\u5e76\u884c\u8fdb\u884c\u3002")),Object(r.b)("h3",{id:"\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u548c\u5b9e\u73b0\u601d\u8def"},"\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u548c\u5b9e\u73b0\u601d\u8def"),Object(r.b)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u4ee5\u4e0a\u8981\u6c42\uff0c\u6211\u4eec\u7528\u652f\u6301\u5e76\u53d1\u7684 map \u548c queue \u7ed3\u6784\u5171\u4eab\u5b58\u50a8\u4ea4\u6613\u6570\u636e\uff0cmap \u53ef\u5feb\u901f\u67e5\u8be2\u548c\u5220\u9664\uff0c\u800c queue \u6ee1\u8db3\u5148\u5165\u5148\u51fa\u7684\u6253\u5305\u8981\u6c42\u3002\nMempool \u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"struct TxCache {\n    /// \u7528 queue \u5b9e\u73b0\u5148\u5165\u5148\u51fa\u7684\u6253\u5305\u529f\u80fd. \n    /// \u7528\u4e24\u4e2a queue \u8f6e\u6d41\u5b58\u50a8\u4ea4\u6613. \u4e00\u4e2a queue \u5f53\u524d\u8f6e\u503c, \u53e6\u4e00\u4e2a\u5219\u4f5c\u4e3a\u66ff\u8865. \n    /// \u6253\u5305\u65f6\u4ece\u5f53\u524d\u8f6e\u503c\u7684 queue \u4e2d\u987a\u5e8f\u6253\u5305.\n    queue_0: Queue<SharedTx>,\n    queue_1: Queue<SharedTx>,\n    /// \u7528 map \u5b8c\u6210\u9ad8\u6548\u7684\u968f\u673a\u67e5\u8be2\u548c\u5220\u9664\u4ea4\u6613.\n    map: Map<Hash, SharedTx>,\n    /// \u6307\u793a\u5f53\u524d\u8f6e\u503c\u7684 queue, true \u4e3a queue_0, false \u4e3a queue_1.\n    is_zero: AtomicBool,\n    /// \u7528\u4e8e\u539f\u5b50\u64cd\u4f5c\uff0c\u4ee5\u59a5\u5584\u5904\u7406\u6253\u5305\u4e0e\u63d2\u5165\u7684\u5e76\u53d1\u95ee\u9898. \n    concurrent_count: AtomicUsize,\n}\n\n/// \u7528\u4e8e map \u548c queue \u4e2d\u5171\u4eab\u7684\u4ea4\u6613\u7ed3\u6784\ntype SharedTx = Arc<TxWrapper>;\n\nstruct TxWrapper {\n    tx: SignedTransaction,\n    /// \u8be5\u4ea4\u6613\u662f\u5426\u88ab map \u5220\u9664\uff0c\u6709\u8be5\u6807\u8bc6\u7684\u4ea4\u6613\u5728\u6253\u5305\u4ea4\u6613\u65f6\u4f1a\u88ab\u8df3\u8fc7\uff0c\u5e76\u4e14\u4ece queue \u4e2d\u5220\u9664\n    removed: AtomicBool,\n    /// \u907f\u514d\u91cd\u590d\u540c\u6b65\u7684\u6807\u8bc6\uff0c\u6709\u8be5\u6807\u8bc6\u7684\u4ea4\u6613\u5728\u6253\u5305 propose \u4ea4\u6613\u65f6\u4f1a\u88ab\u8df3\u8fc7\n    proposed: AtomicBool,\n}\n\n/// \u7528\u4e8e\u5b58\u50a8\u5171\u8bc6\u540c\u6b65\u8fd4\u56de\u7684\u4ea4\u6613\ntype CallbackCache = Map<Hash, SignedTransaction>;\n\n/// Mempool \u6253\u5305\u8fd4\u56de\u7ed9\u5171\u8bc6\u6a21\u5757\u7684\u6570\u636e\u7ed3\u6784\nstruct MixedTxHashes {\n    order_tx_hashes: Vec<Hash>,\n    propose_tx_hashes: Vec<Hash>,\n}\n")),Object(r.b)("p",null,"\u901a\u8fc7\u6240\u6709\u68c0\u67e5\u7684\u5408\u6cd5\u65b0\u4ea4\u6613\u5728\u63d2\u5165 Mempool \u65f6\uff0c\u9996\u5148\u5305\u88c5\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"TxWrapper"),"\uff08",Object(r.b)("inlineCode",{parentName:"p"},"removed")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"proposed")," \u5747\u8bbe\u7f6e\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\uff09\u3002\n\u8fdb\u800c\u5305\u88c5\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx")," \u63d2\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"TxCache")," \u4e2d\uff08\u63d2\u5165\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u5c3e\u90e8\uff0c\u4ee5\u53ca ",Object(r.b)("inlineCode",{parentName:"p"},"map")," \u4e2d\uff09\u3002 "),Object(r.b)("p",null,"Mempool \u6536\u5230\u5171\u8bc6\u7684\u6253\u5305\u8bf7\u6c42\u65f6\uff0c\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"p"},"MixedTxHashes"),"\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u5171\u8bc6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"order_tx_hashes"),"\n\u548c\u7528\u4e8e\u63d0\u524d\u540c\u6b65\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"propose_tx_hashes"),"\u3002"),Object(r.b)("p",null,"\u6253\u5305\u7b97\u6cd5\u5927\u81f4\u5982\u4e0b:\n1. \u4ece\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u5934\u90e8\u5f00\u59cb\u4f9d\u6b21\u5f39\u51fa ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx"),"\uff0c\n\u76f4\u5230\u5168\u90e8\u5f39\u51fa\u6216\u8005\u8fbe\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"cycles_limit "),"\u9608\u503c\u4e3a\u6b62\uff0c\u5c06\u8fd9\u4e9b\u4ea4\u6613\u54c8\u5e0c\u63d2\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"order_tx_hashes")," \u4e2d\u3002\n2. \u5982\u679c\u7b2c\u4e00\u6b65\u7ed3\u675f\u540e\uff0c\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u4e2d\u8fd8\u6709\u4ea4\u6613\uff0c\u5219\u7ee7\u7eed\u5f39\u51fa ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx"),"\uff0c\n\u76f4\u5230\u5168\u90e8\u5f39\u51fa\u6216\u8fbe\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"cycles_limit")," \u9608\u503c\u4e3a\u6b62\uff0c\u5c06\u8fd9\u4e9b\u4ea4\u6613\u54c8\u5e0c\u63d2\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"propose_tx_hashes")," \u4e2d\u3002\n3. \u5982\u679c\u7b2c\u4e8c\u6b65\u7ed3\u675f\u540e\uff0c\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u4f9d\u7136\u4e0d\u4e3a\u7a7a\uff0c\u5219\u7ee7\u7eed\u5f39\u51fa ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx"),"\u3002\n\uff08\u4ee5\u4e0a\u4e09\u6b65\u5f39\u51fa\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx")," \uff0c\u6309\u5f39\u51fa\u987a\u5e8f\u4f9d\u6b21\u63d2\u5165\u5230\u66ff\u8865 ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u4e2d\uff0c\u4ee5\u7ef4\u6301 ",Object(r.b)("inlineCode",{parentName:"p"},"SharedTx")," \u63d2\u5165 Mempool \u7684\u987a\u5e8f\u3002\uff09\n4. \u5f53\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u5168\u90e8\u5f39\u51fa\u540e\uff0c\u4ea4\u6362\u4e24\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u89d2\u8272\uff0c\u5373\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u6210\u4e3a\u66ff\u8865 ",Object(r.b)("inlineCode",{parentName:"p"},"queue"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),Object(r.b)("p",null,"\u5728\u6253\u5305\u8fc7\u7a0b\u4e2d\u5e76\u53d1\u63d2\u5165\u7684\u5408\u6cd5\u65b0\u4ea4\u6613\u90fd\u4f1a\u63d2\u5165\u5230\u8f6e\u503c ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u4e2d\uff0c\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u89d2\u8272\u5207\u6362\u4e4b\u65f6\uff0c\n\u6709\u5f88\u5c0f\u7684\u6982\u7387\u51fa\u73b0\u5c11\u91cf\u65b0\u63d2\u5165\u7684\u4ea4\u6613\u6392\u5728\u8001\u4ea4\u6613\u4e4b\u524d\uff0c\u4f7f\u6253\u5305\u987a\u5e8f\u4e0d\u80fd\u5b8c\u5168\u4e0e\u4ea4\u6613\u63d2\u5165 Mempool \u7684\u987a\u5e8f\u4e00\u81f4\uff0c\n\u4f46\u662f\u7531\u4e8e\u6570\u91cf\u6781\u5c11\u4e14\u5f88\u96be\u88ab\u5229\u7528\uff0c\u56e0\u800c\u5f71\u54cd\u4e0d\u5927\u3002"),Object(r.b)("p",null,"Mempool \u7684\u63d2\u5165\u548c\u6253\u5305\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs-img/mempool_process.png",alt:"image"}))))}c.isMDXComponent=!0},349:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},m=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=c(t),s=a,d=m["".concat(l,".").concat(s)]||m[s]||u[s]||r;return t?o.a.createElement(d,i({ref:n},p,{components:t})):o.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=s;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);