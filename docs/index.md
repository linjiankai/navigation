---
title: 首页
order: 0
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
---

```jsx
/**
 * inline: true
 */
import React from 'react';
import '../components/search/index.less';

export default () => {
  const historys = ['前端开发', '后端开发']; //存localstorage
  return (
    <div className="home">
      <div className="home-content">
        <input className="search-input"></input>
        <div className="search-history">
          <p>快捷搜索</p>
          <ul className="history-box">
            {historys.map((history) => (
              <li>{history}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
```
