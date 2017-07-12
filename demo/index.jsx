import React from 'react';
import ReactDom from 'react-dom';
import AntSay from '../src';

import 'moment/locale/zh-cn';

// 满足以下数据格式
// 扁平化评论
const data = {
  currentUser: {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/MPYlfjPImtaHFPOvpBVo.png",
    name: '梅西',
    link: 'http://say.alipay.net/',
  },
  comments: [
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/oFfmyzshSidtkzZZSgea.jpg",
        name: '科比',
        url: 'http://say.alipay.net/',
      },
      body: '## 谁抢了我的球',
      like: [],
      top: 0,
      replyAuthor: undefined,
      createdAt: new Date(),
    },
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/SJMVsfeiXXnvxvEwgHjy.gif",
        name: '罗纳尔多',
        url: 'http://say.alipay.net/',
      },
      body: '要去打比赛了',
      like: [],
      top: 0,
      replyAuthor: undefined,
      createdAt: new Date(),
    },
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/NCRZHCzKeqkcBaKXDPZb.jpg",
        name: '乔丹',
        url: 'http://say.alipay.net/',
      },
      body: '今天晚上去打篮球不',
      like: [],
      top: 0,
      replyAuthor: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/SJMVsfeiXXnvxvEwgHjy.gif",
        name: '罗纳尔多',
        url: 'http://say.alipay.net/',
      },
      createdAt: new Date('2017-06-23'),
    }
  ],
  pagination: {
    total: 276,
    current: 1,
    pageSize: 20,
  },
  more: true,
};

const App = () => <div>
  <div style={{width: 600, margin: '40px auto'}}>
    <AntSay
      data={data}
      onComment={()=>{}}
      onDeleteComment={()=>{}}
      onTop={()=>{}}
      onLike={()=>{}}
      onGetMore={()=>{}}
    />
  </div>
</div>;

/* eslint no-undef:0 */
ReactDom.render(<App />, document.getElementById('root'));
