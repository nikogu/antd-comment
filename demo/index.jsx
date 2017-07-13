import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'moment/locale/zh-cn';

import AntdComment from '../src';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 满足以下数据格式
      // 扁平化评论
      data: {
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
            auth: true,
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
      }
    }
  }

  handleOnComment = (val, reply, callback)=> {
    const newComment = {
      author: {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/MPYlfjPImtaHFPOvpBVo.png",
        name: '梅西',
        link: 'http://say.alipay.net/',
      },
      body: val,
      like: [],
      top: 0,
      replyAuthor: reply,
      createdAt: new Date(),
    };

    const data = this.state.data;
    data.comments.unshift(newComment);

    this.setState({
      data,
    });

    callback && callback();
  }

  render() {
    return <div>
      <div style={{width: 600, margin: '40px auto'}}>
        <AntdComment
          data={this.state.data}
          onComment={this.handleOnComment}
          onDeleteComment={()=>{}}
          onTop={()=>{}}
          onLike={()=>{}}
          onGetMore={()=>{}}
        />
      </div>
    </div>;
  }
}

ReactDom.render(<App />, document.getElementById('root'));
