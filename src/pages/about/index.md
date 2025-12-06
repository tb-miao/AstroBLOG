---
title: "关于"
h1: "关于我"
desc: "Hi there, I’m AUNya 👋"
layout: "@/layouts/PageLayout/PageLayout.astro"
type: "about"
---

> ## 我叫AUNya,
> ![](/favicon.ico)<br>
> 我是一个热爱二次元文化的小萌新~ 喜欢粉色、动漫、游戏和一切可爱的东西！


## 关于我
- 🌟 **兴趣爱好**：看番、画画、编程、游戏
- 💖 **最爱颜色**：粉色系
- 🎵 **喜欢音乐**：ACG音乐、J-POP
- 🎮 **常玩游戏**：三角洲行动、碧蓝档案、蛋仔派对

## 为什么建站？
创建这个站的时候，想要就是能够有一个自己能够`积累知识、积累兴趣` 的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。
与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有`技能的教程干货` 、`有生活上的吐槽和妙招` 、有`话题上的思考和想法` 。一般我研究什么、发现了什么都会分享在这里。
这些就是创造这个小站的本意，`也是我分享生活的方式` 。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。

## 小站点

|     主&emsp;页      |       <https://lab.tbmiao.dpdns.org/>        |
| :-----------------: | :-------------------------------: |
|   **博&emsp;客**    |    **<https://tbmiao.dpdns.org/>**    |
|  **网站监测**   |    **<https://status.tbmiao.dpdns.org/>**    |
|  **Ba_logo**  | **<https://ba.tbmiao.dpdns.org/>** |

# 联系方式
- 邮箱：init@tbmiao.dpdns.org

# 日志 
:::note{type="warning"}
如果显示不出来，请刷新页面。
:::
> <div id="git-info"></div>

<style>.enfj-dom{margin:1rem 0;position:relative;box-sizing:border-box;padding:1rem 2rem;display:flex;justify-content:space-between;width:100%;height:16rem;background:#fff;border:1px solid #e3e8f7;border-radius:12px;box-shadow:0 8px 16px -4px #2c2d300c;overflow:hidden;background:url("/assets/images/enfj.webp") no-repeat;background-size:8.8rem auto;background-position:right 2rem;transition:all .36s}.enfj-dom:hover{background-position:right 1.6rem}.enfj-dom>.text{display:flex;flex-direction:column;width:100%}.enfj-dom>.text>em,.enfj-dom>.text>span{padding:0;margin:0;font-size:2rem;cursor:default;line-height:2.6rem;font-style:normal}.enfj-dom>.text>span{font-weight:bold;color:#33a474}.enfj-dom>.text>a.more-enfj{margin-top:auto;color:#999 !important;font-size:.88rem !important;text-decoration:none !important}</style>

<script>
// 显示git信息
document.addEventListener('DOMContentLoaded', function() {
  const gitInfoElement = document.getElementById('git-info');
  
  if (!gitInfoElement) return;

  fetch('https://api.github.com/repos/tb-miao/AstroBLOG/commits')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      let allCommitsInfo = '';
      
      // 显示最近的10条提交信息
      const commitsToShow = data.slice(0, 10);
      
      commitsToShow.forEach(commit => {
        const commitDate = new Date(commit.commit.author.date);
        const formattedDate = commitDate.toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
        
        const commitMessage = commit.commit.message;
        const commitUrl = commit.html_url;
        const commitSha = commit.sha.substring(0, 7);
        const authorName = commit.commit.author.name;
        
        const commitInfo = `
              ## <b>##### ${formattedDate}</b> - <a href='${commitUrl}' target='_blank'  style='color: #013cffff'>${commitSha}</a>
              <p>${commitMessage}</p><br>
        `;
        
        allCommitsInfo += commitInfo;
      });
      
      gitInfoElement.innerHTML = allCommitsInfo;
    })
    .catch(error => {
      console.error('获取GitHub提交信息失败:', error);
      gitInfoElement.innerHTML = '<p>无法获取更新信息</p>';
    });
    console.log('JS加载成功')
});
</script>