// ==UserScript==
// @author       AdlerED
// @copyright    2020, adlered https://stackoverflow.wiki
// @license      MIT
// @icon         https://csdnimg.cn/public/favicon.ico
// @homepageURL  https://github.com/adlered/CSDNGreener
// @supportURL   https://github.com/adlered/CSDNGreener/issues/new?assignees=adlered&labels=help+wanted&template=ISSUE_TEMPLATE.md&title=
// @contributionURL https://doc.stackoverflow.wiki/web/#/21?page_id=138
// @name         最强的老牌脚本CSDNGreener：CSDN广告完全过滤、人性化脚本优化
// @namespace    https://github.com/adlered
// @version      3.4.8
// @description  拥有数项独家功能的最强CSDN脚本，不服比一比|无需登录CSDN，获得比会员更佳的体验|模块化卡片，显示什么你决定|分辨率自适配，分屏不用滚动|超级预优化|独家原创文章免登录展开|独家推荐内容自由开关|独家免登录复制|独家防外链重定向|独家论坛未登录自动展开文章、评论|全面净化|沉浸阅读|净化剪贴板
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery.cookie/jquery.cookie.js
// @require      https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.js
// @require      https://cdn.jsdelivr.net/gh/adlered/bolo-solo/src/main/webapp/js/lib/jquery/jquery.showtips.js
// @require      https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// @grant        GM_addStyle
// @note         21-01-15 3.4.8 保存按钮优化，修复显示创作中心按钮功能失效的问题
// @note         21-01-15 3.4.7 改进脚本细节，增加广告屏蔽能力，修复绿化按钮错位的问题
// @note         20-12-25 3.4.6 主页部分嵌入式广告删除
// @note         20-12-18 3.4.5 修复绿化设定按钮排版不正确的问题
// @note         20-12-15 3.4.4 修复了某些子页显示不正常的问题
// @note         20-10-23 3.4.3 适应新版CSDN，去除主页和登录页广告，以及登录提示，并移除底部信息
// @note         20-10-20 3.4.2 删除右侧广告
// @note         20-09-26 3.4.1 修改排版设定，修复登录框弹出的问题
// @note         20-09-24 3.4.0 紧急修复由于CSDN前端样式修改导致设定开关丢失的问题
// @note         20-08-27 3.3.9 紧急修复由于CSDN前端样式修改导致脚本失效的问题
// @note         20-08-26 3.3.8 合法脚本提示
// @note         20-07-20 3.3.7 修复菜单栏在创作中心显示异常的问题
// @note         20-07-18 3.3.6 工具箱按钮优化
// @note         20-07-05 3.3.5 评论复制功能交互优化
// @note         20-07-04 3.3.4 修复右侧栏消失的问题
// @note         20-07-03 3.3.3 新增复制评论功能！删除顶部广告
// @note         20-06-28 3.3.2 提示修改
// @note         20-06-27 3.3.1 弹窗提示逻辑修改为仅提示一次。
// @note         20-06-27 3.3.0 网站标题新消息提醒去除
// @note         20-06-24 3.2.9 控制台文字可以点击了，修改自动版式描述语义
// @note         20-06-24 3.2.8 屏幕尺寸选择，控制台版式修改，若干问题修复
// @note         20-06-23 3.2.7 右侧栏滚动条显示方式优化
// @note         20-06-23 3.2.6 文章居中模式可选
// @note         20-06-22 3.2.5 右侧没有可显示内容时，文章居中
// @note         20-06-22 3.2.4 文章居中
// @note         20-06-22 3.2.3 右侧栏加入滚动条，脚本主页URL修改，下载页和主页广告去除
// @note         20-06-22 3.2.2 Dark Reader兼容模式，自动隐藏顶栏优化，热门文章和最新评论卡片布局调整
// @note         20-06-21 3.2.1 脚本迁移版本迭代
// @note         20-06-21 3.1.9 增加自动隐藏底栏功能
// @note         20-06-21 3.1.8 增加自动隐藏顶栏功能，修复选项窗口被点赞长条挡住的Bug，选项窗口布局修改
// @note         20-06-20 3.1.7 设置窗口大小固定，增加打赏入口
// @note         20-06-19 3.1.6 显示推荐内容按钮回归，新布局紧急修复
// @note         20-06-18 3.1.5 自定义功能更新
// @note         20-06-16 3.1.4 支持大部分功能模块化显示
// @note         20-06-14 3.1.3 绿化设定优化
// @note         20-06-14 3.1.2 ISSUE模板调整Support URL
// @note         20-06-14 3.1.1 增加搜博主文章模块
// @note         20-06-13 3.1.0 修复设置过期的问题
// @note         20-06-12 3.0.9 标题回滚
// @note         20-06-12 3.0.8 主页广告删除，绿化设置仅显示在文章页面，删除页脚，顶部优化，若干细节优化
// @note         20-06-11 3.0.7 增加官方QQ交流群，增加关闭强制白色主题功能
// @note         20-06-11 3.0.6 用户名片功能优化
// @note         20-06-11 3.0.5 优化加载速度
// @note         20-06-10 3.0.4 修复设置界面遮挡的问题，显示博主头像
// @note         20-06-09 3.0.3 默认设定修改
// @note         20-06-09 3.0.2 修复推荐内容按钮刷新不生效的问题，增加工具箱提示框
// @note         20-06-08 3.0.1 设置中心推出！增加浏览效果选项 && Green Book Icon Update
// @note         20-06-08 3.0.0 设置中心推出！增加浏览效果选项
// @note         20-06-07 2.4.2 设置解耦，下个版本搞配置中心
// @note         20-06-06 2.4.1 修复文章内容消失的问题
// @note         20-06-04 2.4.0 修复推荐按钮错位的问题
// @note         20-06-04 2.3.9 窄屏适配优化
// @note         20-06-04 2.3.8 黑夜模式出现问题，紧急回档到 2.3.6
// @note         20-06-03 2.3.7 感谢 @AlexLWT 增加黑暗模式
// @note         20-06-02 2.3.6 AdsByGoogle 删除
// @note         20-05-25 2.3.5 感谢 @RyanIPO 修复 Cannot read property 'replace' of undefined 报错的问题
// @note         20-05-24 2.3.4 修复免登录复制功能
// @note         20-05-22 2.3.3 Logo与背景同步
// @note         20-05-22 2.3.2 深度删除背景
// @note         20-05-20 2.3.1 通过require使用NProgress
// @note         20-05-20 2.3.0 显示推荐内容按钮样式内置，剔除CDN
// @note         20-05-17 2.2.9 进度条样式更新，时间延时优化
// @note         20-05-17 2.2.8 更新脚本描述，展开评论的所有回复，删除创作中心按钮，加载进度条
// @note         20-05-17 2.2.7 更新脚本描述
// @note         20-05-16 2.2.6 修复第一次点击显示推荐内容无反应的问题
// @note         20-05-16 2.2.5 删除抢沙发角标，修改显示推荐内容按钮样式
// @note         20-05-16 2.2.4 感谢来自GitHub的朋友“HeronZhang”的Issue建议，删除所有博客花里胡哨的背景，主页分类中广告清除，CSS样式控制宽度适配代码优化
// @note         20-05-16 2.2.3 感谢来自GitHub的朋友“RetiredWorld”的代码贡献，使用CSS来控制样式，而不是JS，增大灵活性。
// @note         20-05-13 2.2.2 屏蔽您的缩放不是100%的提示
// @note         20-04-29 2.2.1 感谢大家的支持，增加目录显示，自动判断是否存在目录调整页面宽度，屏蔽新增广告，欢迎大家体验并提出意见！
// @note         20-04-15 2.2.0 一些广告被其他插件屏蔽导致的异常无视之
// @note         20-03-30 2.1.9 干掉“记录你的创作历程”，干掉未登录情况下的角标提醒
// @note         20-03-13 2.1.8 窄屏适配加强
// @note         20-03-13 2.1.7 更新简介
// @note         20-03-12 2.1.6 宽度自适应（感谢来自GitHub的朋友LeonG7的建议）！修复剪贴板净化无效的问题。
// @note         20-03-04 2.1.5 适配AdGuard
// @note         20-02-27 2.1.4 优化免登录复制
// @note         20-02-25 2.1.3 免登录复制更新，现已可用
// @note         20-02-24 2.1.2 By Github@JalinWang 更改去除剪贴板劫持的方式，使得原文格式在复制时能够保留
// @note         20-02-22 2.1.1 紧急修复由于 CSDN 修改前端结构导致的文章错位
// @note         20-02-11 2.1.0 若干动画优化，视觉体验更流畅
// @note         20-02-06 2.0.9 武汉加油！修改推荐内容切换开关位置，减少违和感
// @note         20-01-17 2.0.8 去除右侧广告
// @note         20-01-17 2.0.7 感谢来自GitHub的朋友“gleans”的建议，去掉页头广告
// @note         19-12-12 2.0.6 感谢来自GitHub的朋友“yexuesong”的建议，将作者信息在文章顶部展示
// @note         19-10-30 2.0.5 美化隐藏按钮，增加点击动画
// @note         19-10-30 2.0.4 删除CSDN官方在主页推送的文章（大多是广告）
// @note         19-10-30 2.0.3 添加更多屏蔽脚本
// @note         19-10-30 2.0.0 祝自己生日快乐~完全重写CSDNGreener，统一使用JQuery，效率更高
// @note         19-10-27 1.5.2 删除分享海报提示&&感谢GitHub的朋友“CHN-STUDENT”的反馈，去除底部课程推荐
// @note         19-10-27 1.5.1 感谢来自GitHub的朋友“CHN-STUDENT”的细致复现反馈，去除了底部的课程推荐广告
// @note         19-10-04 1.5.0 移除了底部主题信息和打赏
// @note         19-09-10 1.4.9 感谢来自GitHub的朋友“programmerZe”的细致复现反馈，修复了评论区点击查看回复后，已经展开的评论会收起的问题
// @note         19-09-04 1.4.8 感谢来自GitHub的朋友“dwdcth”的细致复现反馈，现在查看原创文章不会无限弹登录窗口了，且加强了自动展开功能
// @note         19-08-20 1.4.7 感谢油叉用户“SupremeSir”的反馈，修复了右侧悬浮栏遮挡文章的问题
// @note         19-08-14 1.4.6 无语。刚更新的免登录复制，又改了。修复！
// @note         19-08-13 1.4.5 更新了独家功能：免登录复制
// @note         19-08-13 1.4.4 感谢来自GitHub的朋友“iamsunxing”的反馈，修复了顶部不贴边的问题
// @note         19-08-01 1.4.3 感谢油叉用户“ddddy”的反馈，去除了更多推广广告
// @note         19-07-30 1.4.2 感谢油叉用户“周义杰”的反馈，增加了防CSDN外链重定向的功能（CSDN臭流氓）
// @note         19-07-20 1.4.1 修复了推荐内容开关跨文章无效问题（忘了配置Cookie作用域）
// @note         19-07-19 1.4.0 1. 构架大更新 2. 感谢来自GitHub的朋友"lukemin"的反馈，加入了下方推荐内容是否隐藏开关（实用）
// @note         19-07-13 1.3.0 感谢来自GitHub的朋友“Holaplace”的反馈，修复了文章无法自动展开的问题（CSDN总改这个，令人头疼）
// @note         19-06-08 1.2.6 感谢油叉用户“DeskyAki”的反馈，修复了文章无法自动展开的问题
// @note         19-06-07 1.2.4 修复了登录后评论无法正常打开的问题
// @note         19-06-07 1.2.3 感谢油叉用户"永远的殿下"的反馈，在一上午的努力攻克下，终于实现了未登录展开评论的语句
// @note         19-06-05 1.2.0 修复了评论无法自动展开的BUG
// @note         19-06-04 1.1.9 修复了无法自动展开的BUG（自闭了）
// @note         19-06-04 1.1.6 CSDN太坏了，把“消息”按钮的Class设置成了“GitChat”，所以修复了“消息”按钮消失的问题
// @note         19-06-04 1.1.5 1. 优化了论坛体验 2.美化、优化代码结构
// @note         19-06-04 1.1.4 感谢来自GitHub的朋友“iamsunxing”的反馈，增加了论坛广告匹配规则
// @note         19-06-03 1.1.3 感谢来自GitHub的朋友“wangwei135”的反馈，去除了评论区上方的广告
// @note         19-05-27 1.1.2 感谢油叉用户“夏伟杰”的反馈，修复了富文本编辑器无法使用的问题
// @note         19-05-25 1.1.0 1. 修复了主页广告的问题 2. 论坛自动展开 3. 论坛广告消除
// @note         19-05-25 1.0.9 感谢油叉用户“渣渣不准说话”的反馈，修复了收藏按钮消失的问题
// @note         19-03-01 1.0.3 添加页面选择性过滤规则
// @note         19-03-01 1.0.2 增加了净化剪贴板功能
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==
var version = "3.4.8";
var currentURL = window.location.href;
if (currentURL.indexOf("?") !== -1) {
currentURL = currentURL.substring(0, currentURL.indexOf("?"));
}
var list;
var windowTop = 0;
var startTimeMilli = Date.now();
var stopTimeMilli = 0;

// 自定义 CSS
// 进度条
$('head').append("<style>#nprogress{pointer-events:none}#nprogress .bar{background:#f44444;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #f44444,0 0 5px #f44444;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#f44444;border-left-color:#f44444;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>");
// 弹出窗口
$('head').append("<style>.black_overlay{top:0%;left:0%;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:0.8;opacity:.10;filter:alpha(opacity=88)}.black_overlay,.white_content{display:none;position:absolute}.white_content{z-index:9999!important;top:25%;left:25%;width:650px;height:60%;padding:20px;border:0px;background-color:#fff;z-index:1002;overflow:auto}</style>");
// 提示条
$('head').append("<style>.tripscon{padding:10px}</style>");
// 按钮（旧）
$('head').append("<style>#toggle-button{display:none}.button-label{position:relative;display:inline-block;width:82px;background-color:#ccc;border:1px solid #ccc;border-radius:30px;cursor:pointer}.circle{position:absolute;top:0;left:0;width:30px;height:30px;border-radius:50%;background-color:#fff}.button-label .text{line-height:30px;font-size:18px;-webkit-user-select:none;user-select:none}.on{color:#fff;display:none;text-indent:10px}.off{color:#fff;display:inline-block;text-indent:53px}.button-label .circle{left:0;transition:all .3s}#toggle-button:checked+label.button-label .circle{left:50px}#toggle-button:checked+label.button-label .on{display:inline-block}#toggle-button:checked+label.button-label .off{display:none}#toggle-button:checked+label.button-label{background-color:#78d690}</style>");
// 保存按钮
$('head').append("<style>#save{background-color:#19a4ed;border:none;color:#fff;padding:5px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:12px;cursor:pointer}</style>");
// Star 样式
$('head').append("<style>.giveMeOneStar:hover{color:#FF69B4;}</style>");

// SVG
var save_svg = '<svg t="1595082650173" class="icon" viewBox="0 0 1075 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2078" width="140" height="140"><path d="M753.763902 685.830244a48.952195 48.952195 0 0 1 49.152-48.702439c81.420488 0 141.162146-65.386146 141.162147-146.057366 0-43.507512-13.037268-82.419512-43.457561-109.243317a142.360976 142.360976 0 0 0-20.280195-14.935415 158.045659 158.045659 0 0 0-11.239025-6.243902l-2.747317-1.298732a155.847805 155.847805 0 0 0-9.191024-3.996097c-1.348683-0.549463-2.697366-0.999024-4.096-1.498537a152.35122 152.35122 0 0 0-8.491707-2.847219c-1.948098-0.599415-3.896195-0.999024-5.844293-1.498537-2.497561-0.599415-4.945171-1.24878-7.492683-1.748293-2.597463-0.499512-5.34478-0.899122-8.042146-1.24878-1.948098-0.249756-3.846244-0.599415-5.844293-0.79922a153.150439 153.150439 0 0 0-14.435903-0.749268c-1.498537 0-2.997073 0.199805-4.545561 0.249756a265.390829 265.390829 0 0 0-5.594536-24.526049c-0.499512-1.998049-1.298732-3.846244-1.898146-5.844292a267.438829 267.438829 0 0 0-5.944196-17.982439c-0.649366-1.798244-1.498537-3.496585-2.197853-5.29483a283.123512 283.123512 0 0 0-7.742439-17.732683L772.745366 269.736585a282.973659 282.973659 0 0 0-9.790439-17.832585C714.302439 171.582439 625.88878 124.878049 524.487805 124.878049c-101.400976 0-189.914537 46.654439-238.517073 126.976-3.496585 5.794341-6.693463 11.788488-9.790439 17.832585l-2.197854 4.096a283.523122 283.523122 0 0 0-7.742439 17.732683l-2.197854 5.244878c-2.247805 5.894244-4.145951 11.988293-5.994146 18.03239-0.549463 1.998049-1.298732 3.846244-1.848195 5.844293a266.739512 266.739512 0 0 0-5.594537 24.476098c-1.498537 0-2.997073-0.199805-4.545561-0.199805-4.89522 0-9.690537 0.299707-14.485853 0.749268-1.998049 0.199805-3.846244 0.499512-5.794342 0.79922-2.697366 0.349659-5.444683 0.699317-8.092097 1.24878-2.497561 0.499512-4.995122 1.148878-7.492683 1.748293-1.898146 0.499512-3.846244 0.899122-5.794342 1.498536a153.649951 153.649951 0 0 0-8.491707 2.797269l-4.096 1.498536a164.289561 164.289561 0 0 0-9.240976 3.996098l-2.697366 1.348683a145.557854 145.557854 0 0 0-31.469268 21.179317C117.884878 408.600976 104.897561 447.562927 104.897561 491.070439c0 80.67122 59.741659 146.057366 141.162146 146.057366a48.952195 48.952195 0 0 1 49.152 48.702439 48.952195 48.952195 0 0 1-49.152 48.702439c-135.717463 0-245.710049-108.993561-245.710048-243.462244 0-109.692878 73.228488-202.402341 173.830243-232.872585A375.832976 375.832976 0 0 1 524.487805 20.330146a375.882927 375.882927 0 0 1 350.307902 237.867708c100.601756 30.470244 173.830244 123.179707 173.830244 232.872585 0 134.468683-109.992585 243.462244-245.710049 243.462244a48.952195 48.952195 0 0 1-49.102048-48.702439z" p-id="2079"></path><path d="M487.973463 386.122927a49.102049 49.102049 0 0 1 72.928781 0.099902l147.356097 162.041756c6.993171 7.742439 11.48878 19.431024 12.537757 30.120586l0.249756 12.937366c0 19.480976-20.48 39.661268-39.211708 39.661268h-104.897561v262.993171a52.44878 52.44878 0 1 1-104.897561 0v-262.993171h-104.897561c-13.886439 0-39.211707-21.72878-39.211707-39.661268v-12.987317c0-12.487805 4.795317-21.27922 12.637659-29.920781l147.356097-162.291512z" p-id="2080"></path></svg>';
var star_svg_1 = '<svg t="1595083631685" class="icon" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" width="140" height="140"><path d="M525.837838 852.410811L199.264865 1001.859459l41.513513-357.016216L0 381.924324l351.481081-69.189189L525.837838 0l174.356757 312.735135L1051.675676 381.924324l-240.778379 262.918919 41.513514 357.016216z" fill="#FFD566" p-id="2174"></path></svg>';
var star_svg_2 = ' <svg t="1595083715312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7848" width="140" height="140"><path d="M1014.001347 866.090236L810.23569 662.324579l145.497643-84.126599c11.377778-6.550842 17.92862-18.962963 16.894276-32.064647-1.034343-13.101684-9.309091-24.479461-21.376431-29.306397l-648.188552-258.585859c-12.756902-5.171717-27.23771-2.068687-36.891582 7.585186-9.653872 9.653872-12.756902 24.13468-7.585185 36.891582l258.585858 648.533333c4.826936 12.06734 16.204714 20.686869 29.306397 21.376431 13.101684 1.034343 25.513805-5.516498 32.064647-16.894276l84.126599-145.497643 203.765657 203.765657c6.550842 6.550842 15.17037 9.998653 24.13468 9.998653 8.96431 0 17.92862-3.447811 24.13468-9.998653l99.29697-99.29697c13.446465-13.446465 13.446465-35.167677 0-48.614141zM150.324579 102.055219c-13.446465-13.446465-35.167677-13.446465-48.26936 0-13.446465 13.446465-13.446465 35.167677 0 48.26936l76.196633 76.196633c6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653c13.446465-13.446465 13.446465-35.167677 0-48.26936L150.324579 102.055219zM176.183165 338.575084c0-18.962963-15.17037-34.133333-34.133333-34.133333H34.133333c-18.962963 0-34.133333 15.17037-34.133333 34.133333s15.17037 34.133333 34.133333 34.133334h107.571718c18.962963 0 34.478114-15.17037 34.478114-34.133334zM162.391919 444.422896l-76.196633 75.851851c-13.446465 13.446465-13.446465 35.167677 0 48.269361 6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653l76.196633-76.196633c13.446465-13.446465 13.446465-35.167677 0-48.269361-13.446465-13.101684-35.167677-13.101684-48.26936 0.344782zM338.575084 176.183165c18.962963 0 34.133333-15.17037 34.133334-34.133333V34.133333c0-18.962963-15.17037-34.133333-34.133334-34.133333s-34.133333 15.17037-34.133333 34.133333v107.571718c0 18.962963 15.17037 34.478114 34.133333 34.478114zM468.557576 220.659933c8.619529 0 17.583838-3.447811 24.13468-9.998654L568.888889 134.464646c13.446465-13.446465 13.446465-35.167677 0-48.26936-13.446465-13.446465-35.167677-13.446465-48.26936 0l-76.196633 76.196633c-13.446465 13.446465-13.446465 35.167677 0 48.26936 6.550842 6.550842 15.515152 9.998653 24.13468 9.998654z" fill="#2c2c2c" p-id="7849"></path></svg>';
var star_svg_3 = ' <svg t="1595083925438" class="icon" viewBox="0 0 1204 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4809" width="140" height="140"><path d="M1088.864348 618.13701a1555.009384 1555.009384 0 0 1-150.273004 167.137308c-52.881642 51.195212-107.931552 101.18583-163.643989 147.261521-33.849069 27.524955-60.229661 48.665566-76.190521 60.229661a162.981462 162.981462 0 0 1-191.891699 0c-15.539253-12.045932-42.160763-32.644476-76.190521-60.831957a2638.480754 2638.480754 0 0 1-164.366745-147.261521 1579.101249 1579.101249 0 0 1-150.273004-165.812257A468.104924 468.104924 0 0 1 0.152998 344.754579 315.543193 315.543193 0 0 1 109.048225 96.367457a399.443111 399.443111 0 0 1 493.883219-20.478084 398.660125 398.660125 0 0 1 493.883219 20.478084A315.482964 315.482964 0 0 1 1204.746215 343.309067a466.840101 466.840101 0 0 1-115.701178 274.647254z" fill="#FE4B83" p-id="4810"></path></svg>';
var star_svg_4 = ' <svg t="1595084089115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8008" width="140" height="140"><path d="M512 46.545455C256 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455z m0 837.818181c-204.8 0-372.363636-167.563636-372.363636-372.363636s167.563636-372.363636 372.363636-372.363636 372.363636 167.563636 372.363636 372.363636-167.563636 372.363636-372.363636 372.363636z" fill="#00C5C5" p-id="8009"></path><path d="M656.290909 586.472727c-79.127273 69.818182-209.454545 69.818182-288.581818 0-18.618182-13.963636-41.890909-13.963636-60.509091 4.654546-13.963636 13.963636-13.963636 41.890909 4.654545 60.509091 55.854545 51.2 125.672727 74.472727 200.145455 74.472727s144.290909-27.927273 200.145455-74.472727c18.618182-13.963636 18.618182-41.890909 4.654545-60.509091s-41.890909-18.618182-60.509091-4.654546zM358.4 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-55.854545-51.2-55.854545c-27.927273 0-51.2 23.272727-51.2 51.2s23.272727 55.854545 51.2 55.854545zM665.6 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-51.2-51.2-51.2-51.2 23.272727-51.2 51.2 23.272727 51.2 51.2 51.2z" fill="#00C5C5" p-id="8010"></path></svg>';
var star_svg = star_svg_1 + star_svg_2 + star_svg_3 + star_svg_4;
var donate_svg = '<svg t="1592982508258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4207" width="32" height="32"><path d="M664.48 234.432a32 32 0 0 0-45.248-0.8l-76.256 73.6-73.344-73.216a32 32 0 1 0-45.248 45.312l72.384 72.256h-49.28a32 32 0 0 0 0 64h63.776v32h-63.776a32 32 0 0 0 0 64h63.776v65.664a32 32 0 1 0 64 0v-65.664h64.288a32 32 0 1 0 0-64h-64.288v-32h64.288a32 32 0 1 0 0-64h-50.368l74.464-71.872a32.032 32.032 0 0 0 0.832-45.28z m275.2 503.552a9017.568 9017.568 0 0 0-141.664-56.736 368.512 368.512 0 0 0 97.568-248.608c0-202.912-165.12-368-368.064-368s-368 165.088-368 368c0 16.224 1.024 32.352 3.072 47.968 2.304 17.504 18.496 29.664 35.904 27.584a32 32 0 0 0 27.584-35.904 304.512 304.512 0 0 1-2.56-39.648c0-167.616 136.384-304 304-304 167.648 0 304.064 136.384 304.064 304a300.544 300.544 0 0 1-96.128 221.472c-0.768 0.736-1.088 1.76-1.824 2.528-42.848-15.936-79.328-28.48-93.76-30.656-24.896-3.904-48.672 7.616-63.104 28.896-12.032 17.792-15.072 38.816-8.096 56.256 4.288 10.656 20.512 32.896 39.776 57.28-46.432-0.064-117.312-6.336-192.832-35.488-31.264-12.064-69.44-52.64-103.136-88.416-47.968-50.976-93.28-99.104-142.56-99.104-18.336 0-35.744 6.848-50.336 19.776-18.24 16.224-35.136 48.32-12 109.248 42.624 112.16 208.544 285.12 341.728 285.12h478.144a32 32 0 0 0 32-32v-160a31.84 31.84 0 0 0-19.776-29.568z m-44.16 157.6h-445.12l-1.024 32v-32c-97.6 0-247.072-152.128-281.92-243.872-10.112-26.656-6.72-37.408-5.344-38.624 4.128-3.648 6.528-3.648 7.84-3.648 21.632 0 64.608 45.632 95.968 78.944 40.224 42.752 81.856 86.944 126.656 104.256 85.216 32.896 164.896 39.808 216.736 39.808 41.376 0 67.584-4.352 68.672-4.544a32 32 0 0 0 19.136-52.16c-27.008-32.096-58.592-71.808-67.296-85.344 0.288-0.576 0.512-1.024 0.352-1.152 22.848 3.488 162.432 57.952 265.28 99.84v106.496z" p-id="4208"></path></svg>';
var set_svg = '<svg t="1592982970375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10112" width="48" height="48"><path d="M256 102.4h512l256 256-512 563.2L0 358.4z" fill="#26CD63" p-id="10113"></path><path d="M256 102.4l256 256H0zM768 102.4l256 256H512zM512 921.6l204.8-563.2H307.2z" fill="#14A345" p-id="10114"></path></svg>';

(function () {
    'use strict';

    l("CSDNGreener V" + version);
    NProgress.start();

    setTimeout(function() {
        var blockURL = currentURL.split("/").length;
        var main = /(www\.csdn\.net\/)$/;
        var mainNav = /nav/;
        var article = /article/;
        var bbs = /bbs\.csdn\.net/;
        var blog = /blog\.csdn\.net/;
        var blog2 = /\/article\/list\//;
        var download = /download\.csdn\.net/;
        var login = /passport\.csdn\.net/;
        var zone = /me\.csdn\.net/;
        var other = /(www\.csdn\.net\/)/;
        var mp = /mp\.csdn\.net/;

        // 数组初始化
        list = [];
        // 头部分
        // APP
        // put(".app-app");
        // VIP
        put(".vip-caise");
        // 记录你的成长历程（记个毛）
        put("#writeGuide");
        // 新通知小圆点（未登录才消掉）
        if ($(".userinfo a").text() === '登录/注册') {
            put("#msg-circle");
        }
        // 顶部谷歌广告
        put(".adsbygoogle");
        // 悬浮在顶栏按钮上出现的二维码
        put(".appControl");
        // 顶部广告
        put(".advert-bg");

        if (main.test(currentURL) || mainNav.test(currentURL)) {
            l("正在优化主页体验...");
            // 常规
            // 头部广告
            put(".banner-ad-box");
            // 嵌入广告
            put("#kp_box_211");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            // 右侧推荐
            $(".feed_company").parent().remove();
            // 广告轮播
            put(".el-carousel__container");
            // 顶部横幅
            put(".toolbar-advert");
            // 顶栏VIP选项
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();
            clean(10);
            // common(5, 10);
            // 博客及主页优化
            common(9, 10);
            loop(3);
            loop(1);
        } else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
            l("正在优化个人博客主页体验...");
            // 常规
            // 头部广告
            put(".banner-ad-box");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            // 左侧广告
            put(".mb8");
            put("#kp_box_503");
            put("#kp_box_214");
            clean(10);
            // common(5, 10);
            loop(3);
            loop(1);
        } else if (article.test(currentURL) && !mp.test(currentURL)) {
            l("正在优化阅读体验...");
            // 常规
            // 右侧广告，放到第一个清除
            // put(".recommend-right");
            put("#addAdBox");
            // put(".aside-box.kind_person.d-flex.flex-column");
            put(".recommend-top-adbox");
            // put(".recommend-list-box.d-flex.flex-column.aside-box");
            // 左侧广告
            // put("#container");
            // 快来写博客吧
            put(".blog_tip_box");
            // 推荐关注用户
            put(".blog-expert-recommend-box");
            // 右下角VIP
            put(".meau-gotop-box");
            // 广告
            put(".mediav_ad");
            put(".pulllog-box");
            put(".recommend-ad-box");
            put(".box-shadow");
            put(".type_hot_word");
            put(".fourth_column");
            // 高分辨率时右侧文章推荐
            // put(".right-item");
            // 广告
            put("#asideFooter");
            put("#ad-div");
            put("#479");
            put("#480");
            // 打赏
            put(".postTime");
            // 课程推荐
            put(".t0");
            // 分享海报
            put(".shareSuggest");
            // 底部主题
            put(".template-box");
            // 评论区广告
            put("div#dmp_ad_58");
            // 打赏
            put(".reward-user-box");
            // 右侧打赏按钮
            put(".to-reward");
            // 推荐内容广告
            put(".recommend-recommend-box");
            // 右侧广告
            put(".indexSuperise");
            // 抢沙发角标
            put(".comment-sofa-flag");
            // 页jio
            put(".bottom-pub-footer");
            // 登录查看未读消息
            put(".toolbar-notice-bubble");
            // 右侧广告
            put(".recommend-top-adbox");
            // 右侧四个广告
            put(".programmer1Box");
            put(".programmer2Box");
            put(".programmer3Box");
            put(".programmer4Box");
            // 点赞气泡
            put(".triplet-prompt");
            // 顶部横幅
            put(".toolbar-advert");
            // 底部信息
            put(".blog-footer-bottom");
            // 右侧栏广告
            put("#6527");
            clean(10);
            setTimeout(function() {
               // 展开评论的所有回复
               $('.btn-read-reply').click();
            }, 1500);
            // 主动加入右侧栏
            if ($(".recommend-right").length === 0) {$("#mainBox").after('<div class="recommend-right  align-items-stretch clearfix" id="rightAside"><aside class="recommend-right_aside"><div id="recommend-right" style="height: 100%; position: fixed; top: 52px; overflow: scroll;"></div></aside></div>');}
            // 上栏按钮删除
            $(".toolbar-menus > li > a[href='https://edu.csdn.net/']").parent().remove();
            $(".toolbar-menus > li > a[href='https://live.csdn.net/?utm_source=csdn_toolbar']").parent().remove();
            $(".toolbar-menus > li > a[href='https://book.csdn.net/']").parent().remove();
            // 绿化设置
            common(6, 1);
            // 屏幕适配
            common(4, 1);
            // 评论
            common(1, 30);
            // 其它
            common(2, 20);
            // 顶部显示作者信息
            common(8, 1);
            // 博客及主页优化
            common(9, 10);
            // 循环线程开始
            loop(2);
            loop(3);
        } else if (bbs.test(currentURL)) {
            l("正在优化论坛体验...");
            // 常规
            // 评论嵌入小广告
            put(".post_recommend");
            // 底部推荐
            put("#post_feed_wrap");
            // 底部相关文章里面的广告
            put(".bbs_feed_ad_box");
            put(".recommend-ad-box");
            // 底部相关文字里面的热词提示
            put(".type_hot_word");
            // 底部蓝色flex属性的广告栏+登录注册框
            put(".pulllog-box");
            // 猜你喜欢
            put(".personalized-recommend-box");
            // 发帖减半提示
            put(".totast-box");
            // 顶部广告
            put(".recommend-right");
            // 顶部广告
            put(".ad_top");
            clean(10);
            // 展开
            common(3, 50);
            // common(5, 10);
            loop(3);
        } else if (download.test(currentURL)) {
            l("正在优化下载页体验...");
            // 常规
            put(".fixed_dl");
            put("indexSuperise");
            // 右侧推荐
            put(".content_recom");
            clean(10);
            // common(5, 10);
            loop(3);
        } else if (login.test(currentURL)) {
            l("正在优化登录页体验...");
            // 常规
            // 登录界面大图广告
            put(".main-tu");
            clean(10);
            // common(5, 10);
            loop(3);
        } else if (zone.test(currentURL)) {
            l("正在优化个人空间体验...");
            // 常规
            clean(10);
            common(7, 10);
            // common(5, 10);
            loop(3);
        } else {
            l("哦豁，好偏门的页面，我来试着优化一下哦...");
            // 常规
            // 展开全文
            $('.readmore_btn').click();
            // *** index ***
            // 头部广告
            put(".banner-ad-box");
            // 嵌入广告
            put("#kp_box_211");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            // 右侧推荐
            $(".feed_company").parent().remove();
            // *** article ***
            // 常规
            // 右侧广告，放到第一个清除
            put("#addAdBox");
            put(".recommend-top-adbox");
            // 快来写博客吧
            put(".blog_tip_box");
            // 推荐关注用户
            put(".blog-expert-recommend-box");
            // 右下角VIP
            put(".meau-gotop-box");
            // 广告
            put(".mediav_ad");
            put(".pulllog-box");
            put(".recommend-ad-box");
            //put(".box-shadow"); 某些页面异常，例如cloud.csdn.net
            put(".type_hot_word");
            put(".fourth_column");
            // cloud.csdn.net 头部广告
            put("#kp_box_118");
            // 广告
            put("#asideFooter");
            put("#ad-div");
            put("#479");
            put("#480");
            // 打赏
            put(".postTime");
            // 课程推荐
            put(".t0");
            // 分享海报
            put(".shareSuggest");
            // 底部主题
            put(".template-box");
            // 评论区广告
            put("div#dmp_ad_58");
            // 打赏
            put(".reward-user-box");
            // 右侧打赏按钮
            put(".to-reward");
            // 推荐内容广告
            put(".recommend-recommend-box");
            // 右侧广告
            put(".indexSuperise");
            // 抢沙发角标
            put(".comment-sofa-flag");
            // 页jio
            put(".bottom-pub-footer");
            // 登录查看未读消息
            put(".toolbar-notice-bubble");
            // 右侧广告
            put(".recommend-top-adbox");
            // 学院弹出广告
            $(".fouce_close_btn").click();
            // 其它
            // 头部广告
            put(".banner-ad-box");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            // 左侧广告
            put(".mb8");
            put("#kp_box_503");
            put("#kp_box_214");
            // *** bbs ***
            // 评论嵌入小广告
            put(".post_recommend");
            // 底部推荐
            put("#post_feed_wrap");
            // 底部相关文章里面的广告
            put(".bbs_feed_ad_box");
            put(".recommend-ad-box");
            // 底部相关文字里面的热词提示
            put(".type_hot_word");
            // 底部蓝色flex属性的广告栏+登录注册框
            put(".pulllog-box");
            // 猜你喜欢
            put(".personalized-recommend-box");
            // 发帖减半提示
            put(".totast-box");
            // 顶部广告
            put(".recommend-right");
            // 顶部广告
            put(".ad_top");
            // *** download ***
            put(".fixed_dl");
            put("indexSuperise");
            // 右侧推荐
            put(".content_recom");
            clean(10);
        }
        setTimeout(function() {
            NProgress.done();
        }, 0);
        stopTimeMilli = Date.now();
        l("优化完毕! 耗时 " + (stopTimeMilli - startTimeMilli) + "ms");
    }, 0);
})();

function l(log) {
    console.log("[CSDNGreener] " + log);
}

function e(error) {
    console.error("[CSDNGreener] " + error);
}

function clear() {
    list = [];
}

function put(tag) {
    list.push(tag);
}

function clean(times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        for (var k = 0; k < list.length; k++) {
            $(list[k]).remove();
        }
    }, 100);
    NProgress.inc();
}

function loop(num) {
    setInterval(function () {
        if (num === 1) {
            // 主页中间的广告
            $(".J_adv").remove();
            // 主页有新的内容横条
            $(".feed-fix-box").remove();
            // 主页广告 iframe
            if (currentURL == "https://www.csdn.net/") {
                $("iframe").remove();
            }
            // 删除 CSDN 官方在主页的文章（大多是广告）
            $("li.clearfix").each(function(index, ele) {
                var banned = /csdn<\/a>/;
                var aMark = $(ele).find(".name").html();
                if (banned.test(aMark)) {
                    $(ele).remove();
                }
            });
            // 主页广告
            $("li").each(function(){
                let self = $(this);
                let dataType = self.attr('data-type');
                if (dataType === 'ad') {
                    self.remove();
                }
            });
            // 主页广告
            $("li > div > div > h2 > a[href*='https://edu.csdn.net']").parent().parent().parent().parent().remove();
            $("li > div > div > h2 > a[href*='https://marketing.csdn.net']").parent().parent().parent().parent().remove();
            // 官方脚本横幅
            $(".toolbar-advert").remove();
        } else if (num === 2) {
            // 评论查看更多展开监听
            $("div.comment-list-box").css("max-height", "none");
            // 屏蔽您的缩放不是100%的提示
            $('.leftPop').remove();
            // 官方脚本横幅
            $(".toolbar-advert").remove();
        } else if (num == 3) {
            // 循环删除登录提示框
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
            $('#passportbox').remove();
            $('.login-mark').remove();
        }
    }, 500);
}

function common(num, times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        if (num === 1) {
            // 查看更多
            $(".btn-readmore").removeClass("no-login");
            $(".btn-readmore").addClass("fans-read-more");
            $(".btn-readmore").removeAttr("href");
            $(".btn-readmore").removeAttr("target");
            $(".btn-readmore").removeAttr("rel");
            $(".btn-readmore").click();
            // 已登录用户展开评论
            try {
                document.getElementById("btnMoreComment").click();
            } catch (e) {}
            // 删除查看更多按钮
            $("#btnMoreComment").parent("div.opt-box").remove();
            // 展开内容
            $("div.comment-list-box").css("max-height", "none");
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
        } else if (num === 2) {
            // 挡住评论的“出头推荐”
            if ($(".recommend-box").length > 1) {
                $(".recommend-box")[0].remove();
            }
            // 去外链
            $("#content_views").off();
            // 去除推广广告
            $("li[data-type='ad']").remove();
            // 免登录复制
            $(".hljs-button").removeClass("signin");
            $(".hljs-button").addClass("{2}");
            $(".hljs-button").attr("data-title", "免登录复制");
            $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
            // 去除剪贴板劫持
            $("code").attr("onclick", "mdcp.copyCode(event)");
            try {
                // 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
                Object.defineProperty(window, "articleType", {
                    value: 0,
                    writable: false,
                    configurable: false
                });
            } catch (err) {
            }
            csdn.copyright.init("", "", "");
            // 页头广告
            try {
                document.getElementsByClassName("column-advert-box")[0].style.display="none";
            } catch (e) {}
            // 自动检测是否有目录，如果没有则删除右边栏，文章居中
            if ($(".recommend-right_aside").html() && $(".recommend-right_aside").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            } else if ($(".recommend-right_aside").html() && $("#recommend-right").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            }
            // 登录按钮文字太多，修改
            $("a").each(function() {
                if ($(this).attr('href') === 'https://passport.csdn.net/account/login') {
                    $(this).html('登入');
                }
            });
            // 顶栏广告
            $("li").each(function(){
                let self = $(this);
                let dataType = self.attr('data-sub-menu-type');
                if (dataType === 'vip') {
                    self.remove();
                }
            });
            // 顶栏VIP选项
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();
        } else if (num == 3) {
            //论坛自动展开
            $(".js_show_topic").click();
        } else if (num == 4) {
            /** 配置控制 **/
            let config = new Config();
            let smCookie = config.get("scr-sm", false);
            let mdCookie = config.get("scr-md", true);
            let lgCookie = config.get("scr-lg", false);

            $("#scr-sm").prop("checked", smCookie);
            $("#scr-md").prop("checked", mdCookie);
            $("#scr-lg").prop("checked", lgCookie);

            if (smCookie) {
                // Small Screen Mode
                $(".main_father").removeClass("justify-content-center");
                $("csdn-side-toolbar").css("left", "auto")
                GM_addStyle(`
                main{
                    width: auto!important;
                    float: none!important;
                    max-width: 90vw;
                }
                main article img{
                    margin: 0 auto;
                    max-width: 100%;
                    object-fit: cover;
                }
                `);
            } else if (mdCookie) {
                // Middle Screen Mode
                $(".main_father").removeClass("justify-content-center");
                $("csdn-side-toolbar").css("left", "auto")
            } else if (lgCookie) {
                // Large Screen Mode
                $(".container").css("margin", "0 auto")
            }

            // 屏幕尺寸单选监听
            $("#scr-sm").click(function () {
                new Config().set("scr-sm", true);
                new Config().set("scr-md", false);
                new Config().set("scr-lg", false);
            });
            $("#scr-md").click(function () {
                new Config().set("scr-md", true);
                new Config().set("scr-sm", false);
                new Config().set("scr-lg", false);
            });
            $("#scr-lg").click(function () {
                new Config().set("scr-lg", true);
                new Config().set("scr-sm", false);
                new Config().set("scr-md", false);
            });
        } else if (num == 5) {
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
        } else if (num == 6) {
            let did = false;
            let configHTML = '';
            configHTML += '<div><a style="font-size: 20px;" href="https://openuserjs.org/scripts/AdlerED/%E6%9C%80%E5%BC%BA%E7%9A%84%E8%80%81%E7%89%8C%E8%84%9A%E6%9C%ACCSDNGreener%EF%BC%9ACSDN%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4%E3%80%81%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96" target="_blank">CSDNGreener</a> <sup>V' + version + '</sup></div>官方 QQ 交流群：1042370453&nbsp;&nbsp;&nbsp;<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=d7ad6ead3f57722e7f00a4281ae75dbac2132c5a8cf321992d57309037fcaf63"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="CSDNGreener 用户交流群" title="CSDNGreener 用户交流群"></a><br><br>';

            // 设定：推荐内容按钮
            configHTML += '<p style="margin-bottom: 5px"><b>根据屏幕尺寸，适配版式</b><br><span style="font-size: 5px;">建议逐个尝试后选择适合你的版式，屏幕过小或者版式选择不正确右侧栏可能没有空间显示（请尝试调节浏览器缩放）。</span></p>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-sm" /> 平铺模式 </label>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-md" /> 适应模式 </label>';
            configHTML += '<label><input name="displayMode" type="radio" value="" id="scr-lg" /> 居中模式</label>';
            configHTML += '<hr style="height:1px;border:none;border-top:1px solid #cccccc;margin: 5px 0px 5px 0px;" />';
            configHTML += '<p style="margin-bottom: 5px"><b>通用设定</b></p>';
            configHTML += '<input type="checkbox" id="toggle-recommend-button"> <label for="toggle-recommend-button" class="modeLabel">显示推荐内容</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-whitetheme-button"> <label for="toggle-whitetheme-button" class="modeLabel">白色主题&Dark Reader兼容模式<br><span style="font-size: 8px;color: #808080;"># 选项作用：开启后可通过Dark Reader插件灵活控制白色与黑暗模式，<a style="color: green;" href="https://chrome.zzzmh.cn/info?token=eimadpbcbfnmbkopoojfekhnkhdbieeh" target="_blank">插件下载地址点我</a></span></label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autosize-button"> <label for="toggle-autosize-button" class="modeLabel">宽度自动适应<br><span style="font-size: 8px;color: #808080;"># 选项作用：开启此选项可以在页面宽度缩小时自动切换至小屏模式</span></label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autohidetoolbar-button"> <label for="toggle-autohidetoolbar-button" class="modeLabel">向下滚动自动隐藏顶栏</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-autohidebottombar-button"> <label for="toggle-autohidebottombar-button" class="modeLabel">自动隐藏底栏</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-writeblog-button"> <label for="toggle-writeblog-button" class="modeLabel">显示创作中心按钮</label>';
            configHTML += '<br>';
            configHTML += '<hr style="height:1px;border:none;border-top:1px solid #cccccc;margin: 5px 0px 5px 0px;" />';
            configHTML += '<p style="margin-bottom: 5px"><b>右侧栏定制</b></p>';
            configHTML += '<input type="checkbox" id="toggle-authorcard-button"> <label for="toggle-authorcard-button" class="modeLabel">显示作者名片</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-searchblog-button"> <label for="toggle-searchblog-button" class="modeLabel">显示搜博主文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-newarticle-button"> <label for="toggle-newarticle-button" class="modeLabel">显示最新文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-hotarticle-button"> <label for="toggle-hotarticle-button" class="modeLabel">显示热门文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-newcomments-button"> <label for="toggle-newcomments-button" class="modeLabel">显示最新评论</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-kindperson-button"> <label for="toggle-kindperson-button" class="modeLabel">显示分类专栏</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-recommendarticle-button"> <label for="toggle-recommendarticle-button" class="modeLabel">显示推荐文章</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-archive-button"> <label for="toggle-archive-button" class="modeLabel">显示归档</label>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-content-button"> <label for="toggle-content-button" class="modeLabel">显示目录</label>';
            configHTML += '<br>';
            configHTML += '<button id="save1" style="position: absolute; top: 20px; right: 15px;" onclick="location.reload()">' + save_svg + ' 保存并应用</button>';
            configHTML += '<br>';
            configHTML += '<p style="font-size:5px">小提示：CSDNGreener 脚本不提供任何会员文章破解、会员资源下载功能，仅适用于前端优化，请在官方渠道购买会员体验付费功能。</p>';
            configHTML += '<br>';
            configHTML += '<a href="https://github.com/adlered/CSDNGreener" target="_blank" class="giveMeOneStar">' + star_svg + ' <b>点我~</b> 动动小手在 GitHub 点个 Star，支持我继续维护脚本 :)</a>';
            configHTML += '<button id="save2" style="float: right;" onclick="location.reload()">' + save_svg + ' 保存并应用</button>';
            configHTML += '<br>';

            // configHTML += '<a href="https://doc.stackoverflow.wiki/web/#/21?page_id=138" target="_blank" style="margin-top: 5px; display: block;">' + donate_svg + ' 我是老板，投币打赏</a>';
            configHTML += '</div><div id="fade" class="black_overlay"></div>';
            // 绿化器设定
            $("body").prepend('<div id="light" class="white_content">' + configHTML);
            // 绿化设定
            let htmlOf0 = '<li><a id="greenerSettings" href="javascript:void(0)" style="" onclick="$(window).scrollTop(0);document.getElementById(\'light\').style.display=\'block\';document.getElementById(\'fade\').style.display=\'block\';">' + set_svg + ' 绿化设定</a></li>';
            $(".toolbar-menus").prepend(htmlOf0);

            /** 配置控制 **/
            let config = new Config();
            // 推荐内容
            $(".blog-content-box").append("<br><div class='blog-content-box' id='recommendSwitch' style='text-align: right;'></div>");
            $("#recommendSwitch:last").append('<input type="checkbox" id="toggle-button"> <label for="toggle-button" class="button-label"> <span class="circle"></span> <span class="text on">&nbsp;</span> <span class="text off">&nbsp;</span> </label>' +
                               '<p style="margin-top: 5px; font-size: 13px;">显示推荐内容</p>');
            let recommendCookie = config.get("recommend", false);
            if (!recommendCookie) {
                $(".recommend-box").hide();
            }
            if (recommendCookie) {
                $("#toggle-recommend-button").prop("checked", true);
                $("#toggle-button").prop("checked", true);
            } else {
                $("#toggle-recommend-button").prop("checked", false);
                $("#toggle-button").prop("checked", false);
            }
            config.listenButton("#toggle-recommend-button", "recommend",
                               function() {$(".recommend-box").slideDown(200);},
                               function() {$(".recommend-box").slideUp(200);});
            config.listenButtonAndAction("#toggle-button", "recommend",
                                function() {$(".recommend-box").slideDown(200);},
                               function() {$(".recommend-box").slideUp(200);});

            // 提示
            let tipsCookie = config.get("showTip", true);
            if (tipsCookie) {
                showTips();
            }
            config.set("showTip", false);

            // 显示作者名片
            let authorCardCookie = config.get("authorCard", false);
            if (authorCardCookie) {
                // 博主信息
                $('#recommend-right').append($('#asideProfile').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideProfile').attr("style", "margin-top: 8px; width: 300px;");
                }, 500);
            }
            if (authorCardCookie) {
                $("#toggle-authorcard-button").prop("checked", true);
            } else {
                $("#toggle-authorcard-button").prop("checked", false);
            }
            config.listenButton("#toggle-authorcard-button", "authorCard",
                               function() {location.reload();},
                               function() {location.reload();});

            // 强制白色主题
            let whiteThemeCookie = config.get("whiteTheme", true);
            if (whiteThemeCookie) {
                // 背景删除
                $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
                $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
                $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
                $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
            }
            if (whiteThemeCookie) {
                $("#toggle-whitetheme-button").prop("checked", true);
            } else {
                $("#toggle-whitetheme-button").prop("checked", false);
            }
            config.listenButton("#toggle-whitetheme-button", "whiteTheme",
                               function() {location.reload();},
                               function() {location.reload();});

            // 搜博主文章
            let searchBlogCookie = config.get("searchBlog", false);
            if(searchBlogCookie) {
                $('#recommend-right').append($('#asideSearchArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideSearchArticle').attr("style", "margin-top: 8px; width: 300px;");
                    var i = $("#search-blog-words")
                      , n = $(".btn-search-blog");
                    i.keyup(function(t) {
                        var n = t.keyCode;
                        if (13 == n) {
                            var e = encodeURIComponent(i.val());
                            if (e) {
                                var s = "//so.csdn.net/so/search/s.do?q=" + e + "&t=blog&u=" + username;
                                window.open(s)
                            }
                        }
                    });
                    n.on("click", function(t) {
                        var n = encodeURIComponent(i.val());
                        if (n) {
                            var e = "//so.csdn.net/so/search/s.do?q=" + n + "&t=blog&u=" + username;
                            window.open(e)
                        }
                        t.preventDefault()
                    });
                }, 500);
            }
            if (searchBlogCookie) {
                $("#toggle-searchblog-button").prop("checked", true);
            } else {
                $("#toggle-searchblog-button").prop("checked", false);
            }
            config.listenButton("#toggle-searchblog-button", "searchBlog",
                               function() {location.reload();},
                               function() {location.reload();});

            // 最新文章
            let newArticleCookie = config.get("newArticle", false);
            if (newArticleCookie) {
                $('#recommend-right').append($('#asideNewArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewArticle').attr("style", "margin-top: 8px; width: 300px;");
                }, 0);
            }
            if (newArticleCookie) {
                $("#toggle-newarticle-button").prop("checked", true);
            } else {
                $("#toggle-newarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-newarticle-button", "newArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 热门文章
            let hotArticleCookie = config.get("hotArticle", false);
            if (hotArticleCookie) {
                $('#recommend-right').append($("#asideHotArticle").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideHotArticle').attr("style", "margin-top: 8px; width: 300px;");
                    $('#asideHotArticle img').remove();
                }, 0);
            }
            if (hotArticleCookie) {
                $("#toggle-hotarticle-button").prop("checked", true);
            } else {
                $("#toggle-hotarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-hotarticle-button", "hotArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 最新评论
            let newCommentsCookie = config.get("newComments", false);
            if (newCommentsCookie) {
                $('#recommend-right').append($("#asideNewComments").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewComments').attr("style", "margin-top: 8px; width: 300px;");
                    $(".comment.ellipsis").attr("style", "max-height: none;");
                    $(".title.text-truncate").attr("style", "padding: 0");
                }, 0);
            }
            if (newCommentsCookie) {
                $("#toggle-newcomments-button").prop("checked", true);
            } else {
                $("#toggle-newcomments-button").prop("checked", false);
            }
            config.listenButton("#toggle-newcomments-button", "newComments",
                               function() {location.reload();},
                               function() {location.reload();});

            // 分类专栏
            let kindPersonCookie = config.get("kindPerson", false);
            if (!kindPersonCookie) {
                setTimeout(function() {
                    $('#asideCategory').remove();
                    $('.kind_person').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideCategory").prop("outerHTML"));
                if ($("#asideCategory").length > 0) {
                    $('.kind_person').remove();
                } else {
                    $('.kind_person').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }
                setTimeout(function() {
                    $('#asideCategory').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                    $("a.flexible-btn").click(function() {
                        $(this).parents('div.aside-box').removeClass('flexible-box');
                        $(this).parents("p.text-center").remove();
                    })
                }, 500);
            }
            if (kindPersonCookie) {
                $("#toggle-kindperson-button").prop("checked", true);
            } else {
                $("#toggle-kindperson-button").prop("checked", false);
            }
            config.listenButton("#toggle-kindperson-button", "kindPerson",
                               function() {location.reload();},
                               function() {location.reload();});

            // 目录
            let contentCookie = config.get("content", true);
            if (!contentCookie) {
                setTimeout(function() {
                    $('.align-items-stretch.group_item').parent().remove();
                }, 0);
            }
            if (contentCookie) {
                $("#toggle-content-button").prop("checked", true);
            } else {
                $("#toggle-content-button").prop("checked", false);
            }
            config.listenButton("#toggle-content-button", "content",
                               function() {location.reload();},
                               function() {location.reload();});

            // 推荐文章
            let recommendArticleCookie = config.get("recommendArticle", false);
            if (!recommendArticleCookie) {
                setTimeout(function() {
                    $('.recommend-list-box').remove();
                }, 0);
            } else {
                setTimeout(function() {
                    $('.recommend-list-box').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }, 0);
            }
            if (recommendArticleCookie) {
                $("#toggle-recommendarticle-button").prop("checked", true);
            } else {
                $("#toggle-recommendarticle-button").prop("checked", false);
            }
            config.listenButton("#toggle-recommendarticle-button", "recommendArticle",
                               function() {location.reload();},
                               function() {location.reload();});

            // 归档
            let archiveCookie = config.get("archive", false);
            if (!archiveCookie) {
                setTimeout(function() {
                    $('#asideArchive').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideArchive").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideArchive').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                }, 500);
            }
            if (archiveCookie) {
                $("#toggle-archive-button").prop("checked", true);
            } else {
                $("#toggle-archive-button").prop("checked", false);
            }
            config.listenButton("#toggle-archive-button", "archive",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自动靠左平铺
            let autoSizeCookie = config.get("autoSize", false);
            if (autoSizeCookie) {
                setInterval(function () {
                    // 文章宽度自适应
                    if (window.innerWidth < 1100) {
                        // 删除原有响应式样式
                        $(".main_father").removeClass("justify-content-center");
                        $("csdn-side-toolbar").css("left", "auto")
                        $("article").width(window.innerWidth - 150);
                        GM_addStyle(`
                        main{
                            width: auto!important;
                            float: none!important;
                            max-width: 90vw;
                        }
                        main article img{
                            margin: 0 auto;
                            max-width: 100%;
                            object-fit: cover;
                        }
                        `);
                        did = true;
                    } else {
                        if (did === true) {
                            $("article").removeAttr("style");
                            did = false;
                        }
                    }
                }, 500);
            }
            if (autoSizeCookie) {
                $("#toggle-autosize-button").prop("checked", true);
            } else {
                $("#toggle-autosize-button").prop("checked", false);
            }
            config.listenButton("#toggle-autosize-button", "autoSize",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自动隐藏顶栏
            let autoHideToolbarCookie = config.get("autoHideToolbar", true);
            if (autoHideToolbarCookie) {
                $(window).scroll(function() {
                    if (document.documentElement.scrollTop > 100) {
                	    let scrollS = $(this).scrollTop();
                	    if (scrollS >= windowTop) {
                	    	$('#csdn-toolbar').slideUp(100);
                	    	windowTop = scrollS;
                	    } else {
                	    	$('#csdn-toolbar').slideDown(100);
                	    	windowTop = scrollS;
                	    }
                    }
                });
            }
            if (autoHideToolbarCookie) {
                $("#toggle-autohidetoolbar-button").prop("checked", true);
            } else {
                $("#toggle-autohidetoolbar-button").prop("checked", false);
            }
            config.listenButton("#toggle-autohidetoolbar-button", "autoHideToolbar",
                               function() {location.reload();},
                               function() {location.reload();});

            // 自动隐藏底栏
            let autoHideBottomBarCookie = config.get("autoHideBottomBar", true);
            if (autoHideBottomBarCookie) {
                setInterval(function () {$("#toolBarBox .left-toolbox").css({
                	position: "relative",
                	left: "0px",
                	bottom: "0",
                	width: $("#toolBarBox").width() + "px"
                })}, 3000);
            }
            if (autoHideBottomBarCookie) {
                $("#toggle-autohidebottombar-button").prop("checked", true);
            } else {
                $("#toggle-autohidebottombar-button").prop("checked", false);
            }
            config.listenButton("#toggle-autohidebottombar-button", "autoHideBottomBar",
                               function() {location.reload();},
                               function() {location.reload();});

            // 创作中心按钮
            let writeBlogCookie = config.get("writeBlog", true);
            if (!writeBlogCookie) {
                $(".toolbar-btn-write").remove();
            }
            if (writeBlogCookie) {
                $("#toggle-writeblog-button").prop("checked", true);
            } else {
                $("#toggle-writeblog-button").prop("checked", false);
            }
            config.listenButton("#toggle-writeblog-button", "writeBlog",
                               function() {location.reload();},
                               function() {location.reload();});

            // 右侧滚动条
            setTimeout(function () {
                let rightSideHeight = 0;
                let pageHeight = $(window).height();
                rightSideHeight += getHeight($('.align-items-stretch.group_item').parent());
                rightSideHeight += getHeight($("#asideProfile"));
                rightSideHeight += getHeight($("#asideSearchArticle"));
                rightSideHeight += getHeight($("#asideNewArticle"));
                rightSideHeight += getHeight($("#asideHotArticle"));
                rightSideHeight += getHeight($("#asideNewComments"));
                rightSideHeight += getHeight($("#asideCategory"));
                rightSideHeight += getHeight($("#asideArchive"));
                console.debug("Right side total height: " + rightSideHeight);
                console.debug("Page height: " + pageHeight);
                if (rightSideHeight > pageHeight) {
                    $('#recommend-right').css("overflow", "scroll");
                }
            }, 1500);
        } else if (num === 7) {
            $(".me_r")[1].remove();
        } else if (num === 8) {
            /* $(".article-bar-top").append("<br>");
            $(".article-bar-top").append($(".aside-box-footerClassify").children("dd").html());
            $("dl").each(function (index, element) {
                var key = $(this).children("dt");
                var value = $(this).children("dd").children("span");
                if (key.html().indexOf("原创") != -1) {
                    key = $(this).children("dt").children("a")
                    value = $(this).children("dd").children("a").children("span");
                    addInfo(key, value);
                } else
                if (value.html() != undefined) {
                    addInfo(key, value);
                }
            } );
            function addInfo(key, value) {
                var bind = key.html() + "&nbsp;" + value.html() + "&nbsp;&nbsp;";
                $(".article-bar-top").append(bind + " ");
            } */
            $(".blog_container_aside").remove();

            // 标题消息提醒去除
            let title = document.title.replace(/^\(.*?\)/g, "");
            document.title = title;
            // 评论复制按钮
            $('.comment-box').prepend('<button class="comment-hidden-text" style="display:none">COPY BUTTON</button>');
            $('.new-opt-box.new-opt-box-bg').prepend('<a class="btn btn-report btn-copy" onclick="javascript:$(\'.comment-hidden-text\').attr(\'data-clipboard-text\',$(this).parent().parent().find(\'.new-comment\').text())">复制评论</a><span class="btn-bar"></span>');
            $('.btn-copy').click(function() {
                var clipboard = new ClipboardJS('.comment-hidden-text');
                clipboard.on('success', function(e) {
                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                    e.clearSelection();
                    $('.btn-copy').html('成功');
                    setTimeout(function() {
                        $('.btn-copy').html('复制评论');
                    }, 1000);
                });
                clipboard.on('error', function(e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                    $('.btn-copy').html('失败，请手动复制');
                    setTimeout(function() {
                        $('.btn-copy').html('复制评论');
                    }, 1000);
                });
                $(".comment-hidden-text").click();
                clipboard.destroy();
            });
        } else if (num === 9) {
            // 删除CSDN LOGO悬浮后的二维码
            $(".toolbar-subMenu > img").parent().remove();
        }
    }, 100);
    NProgress.inc();
}

// 配置控制类
class Config {
    get(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.debug("Renew key: " + key + " : " + value);
            return value;
        }
        console.debug("Read key: " + key + " : " + cookie);
        if (cookie === "true") { return true; }
        if (cookie === "false") { return false; }
        return cookie;
    }

    set(setKey, setValue) {
        $.cookie(setKey, setValue, {
            path: '/',
            expires: 365
        });
        console.debug("Key set: " + setKey + " : " + setValue);
    }

    listenButton(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
            }
        });
    }

    listenButtonAndAction(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
                falseAction();
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
                trueAction();
            }
        });
    }
}

function showTips() {
	var config = {
		content: "欢迎使用 CSDNGreener，绿化设定按钮在这里！<br><a href='javascript:$(\".trips\").remove();'>好的，以后不再提示我</a>",
		type: "html",
		alignTo: ["bottom", "left"],
		trigger: "show",
		isclose: false,
		color: ["#B2E281", "#B2E281"]
	};
	$("#greenerSettings").showTips(config);
}

function getHeight(element) {
    let outerHeight = element.outerHeight();
    if (outerHeight === null) {
        return 0;
    }
    return outerHeight;
}
