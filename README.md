# AntD Comment 

The comment UI component build on ant.design

## version

0.1.0

![img|400](https://gw.alipayobjects.com/zos/rmsportal/rnUQgvYWUJDxhKrRqrdp.png)

## feature

- support markdown
- base on ant.design
- professional interaction

## How to use

#### import

`npm install antd-comment`

####

```javascript

import AntDComment from 'antd-comment';

// the data is from your service
// please look at the data format

// what the view look like is up to the data.

const data = {

  currentUser: {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/MPYlfjPImtaHFPOvpBVo.png",
    name: 'messi',
    link: 'http://taobao.com',
  },
  
  // comments data
  comments: [
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/oFfmyzshSidtkzZZSgea.jpg",
        name: 'kobe',
        link: 'http://taobao.com',
      },
      body: '## hello world',
      like: [],
      top: 0,
      replyAuthor: undefined,
      createdAt: new Date(),
    },
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/SJMVsfeiXXnvxvEwgHjy.gif",
        name: '罗纳尔多',
        link: 'http://taobao.com',
      },
      body: 'i want to play a game',
      like: [],
      top: 0,
      replyAuthor: undefined,
      createdAt: new Date(),
    },
    {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/NCRZHCzKeqkcBaKXDPZb.jpg",
        name: 'jordan',
        link: 'http://taobao.com',
      },
      body: '今天晚上去打篮球不',
      like: [],
      top: 0,
      replyAuthor: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/SJMVsfeiXXnvxvEwgHjy.gif",
        name: '罗纳尔多',
        link: 'http://taobao.com',
      },
      createdAt: new Date('2017-06-23'),
    }
  ],
  
  // pagination data
  pagination: {
    total: 276,
    current: 1,
    pageSize: 20,
  },
  
  // show the more btn
  more: true,
}

const App = ()=> <div>
    <AntDComment 
      data={data}
      onComment={()=>{}}
      onDeleteComment={()=>{}}
      onTop={()=>{}}
      onLike={()=>{}}
      onGetMore={()=>{}}
    />
</div>

```

## DEMO

[demo](/demo/index.html)

## Todo

#### 0.2.0 

- [ ] support like
- [ ] support to top
- [ ] support @
- [ ] support nested comment format


