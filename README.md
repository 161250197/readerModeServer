# reader-mode-server

> 以阅读小说为例的移动端浏览器阅读模式服务端mock项目

用于支持 [前端项目](https://github.com/161250197/readerMode)

## 启动

使用npm设置和启动

``` bash
# install dependencies
npm install

# serve at certain host:port
npm run start
```

或使用yarn

```bash
# install dependencies
yarn

# serve at certain host:port
yarn start
```

## 说明

此项目为最基本的mock项目，仅为保证前端项目在无正式服务端支持的情况下能够正常运行

如果要修改项目启动的host和port，请修改文件 [setting.json](./src/data/setting.json)

## 接口

### 获取阅读模式支持域名列表

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getSupportDomains                                            |
| 描述     | 获取阅读模式支持的域名列表，用于提供给客户端以判断当前域名是否支持使用阅读模式 |
| 请求方法 | GET                                                          |
| 请求参数 | 无                                                           |
| 返回数据 | supportDomains: String[] // 域名列表                         |

### 获取网络小说参数

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getNovelData                                                 |
| 描述     | 以阅读网络小说为例，用于提供给前端以获取网络小说参数。       |
| 请求方法 | POST                                                         |
| 请求参数 | {<br />&nbsp;&nbsp;url: String // 网络小说页面网址<br />}    |
| 返回数据 | {<br />&nbsp;&nbsp;bookId: String, // 小说id：唯一标识符字符串<br/>&nbsp;&nbsp;novelName: String, // 小说名：字符串<br />&nbsp;&nbsp;authorName: String, // 作者名：字符串<br />&nbsp;&nbsp;chapterIndex: Number, // 章节索引：从0开始的数字<br />} |
### 获取网络小说正文数据

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getMainBodyText                                              |
| 描述     | 以阅读网络小说为例，用于提供给前端以获取网络小说正文数据     |
| 请求方法 | POST                                                         |
| 请求参数 | {<br />&nbsp;&nbsp;domain: String, // 域名：字符串<br />&nbsp;&nbsp;novelName: String, // 小说名：字符串<br />&nbsp;&nbsp;authorName: String, // 作者名：字符串<br />&nbsp;&nbsp;chapterIndex: Number, // 章节索引：从0开始的数字<br />} |
| 返回数据 | {<br />&nbsp;&nbsp;text: String, // 正文：HTML格式字符串<br />&nbsp;&nbsp;title: String, // 小说章节名：字符串<br />&nbsp;&nbsp;chapterIndex: Number, // 章节索引：从0开始的数字<br />&nbsp;&nbsp;hasNext: Boolean, // 还有下一章：布尔值<br />} |

### 获取网络小说章节数据

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getNovelChapterData                                          |
| 描述     | 以阅读网络小说为例，用于提供给前端以获取网络小说章节数据     |
| 请求方法 | POST                                                         |
| 请求参数 | {<br />&nbsp;&nbsp;domain: String, // 域名：字符串<br />&nbsp;&nbsp;novelName: String, // 小说名：字符串<br />&nbsp;&nbsp;authorName: String, // 作者名：字符串<br />} |
| 返回数据 | chapterTitles: String[] // 小说章节名目录：字符串数组        |

### 获取广告数据

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getAdData                                                    |
| 描述     | 用于提供给前端和客户端以获取广告数据                         |
| 请求方法 | POST                                                         |
| 请求参数 | adId: String // 可选参数 广告id：唯一标识符字符串            |
| 返回数据 | {<br />&nbsp;&nbsp;adId: String, // 广告id：唯一标识符字符串<br />&nbsp;&nbsp;picture: String, // 图片：图片url字符串<br />&nbsp;&nbsp;title: String, // 标题：字符串<br />&nbsp;&nbsp;info: String, // 描述：字符串<br />} |

### 获取小说来源列表

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getNovelSources                                              |
| 描述     | 以阅读网络小说为例，用于提供给前端以获取小说来源列表         |
| 请求方法 | POST                                                         |
| 请求参数 | {<br />&nbsp;&nbsp;novelName: String, // 小说名：字符串<br />&nbsp;&nbsp;authorName: String, // 作者名：字符串<br />} |
| 返回数据 | [<br />&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;domain: String, // 域名：字符串<br />&nbsp;&nbsp;&nbsp;&nbsp;siteName: String, // 站点名称：字符串<br />&nbsp;&nbsp;},<br />&nbsp;&nbsp;...<br />] |

### 获取推荐小说列表

| 项目     | 内容                                                         |
| -------- | ------------------------------------------------------------ |
| 接口名   | getRecommendBooks                                            |
| 描述     | 以阅读网络小说为例，用于提供给前端以获取推荐小说列表         |
| 请求方法 | POST                                                         |
| 请求参数 | bookId: String // 小说id：唯一标识符字符串                   |
| 返回数据 | [<br />&nbsp;&nbsp;{<br />&nbsp;&nbsp;&nbsp;&nbsp;bookId: String, // 小说id：唯一标识符字符串<br />&nbsp;&nbsp;&nbsp;&nbsp;cover: String, // 封面：图片url字符串<br />&nbsp;&nbsp;&nbsp;&nbsp;novelName: String, // 小说名：字符串<br />&nbsp;&nbsp;},<br />&nbsp;&nbsp;...<br />] |

