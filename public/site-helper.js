/**
 * 公共帮助模块 —— 用于展示页面提示卡片、关键词徽章和访问说明
 * 非第三方依赖，纯 JavaScript
 */

(function() {
  'use strict';

  // 基础配置数据
  const config = {
    siteUrl: 'https://indexofficial-i-game.com.cn',
    keywords: ['爱游戏', '热门推荐', '游戏资讯'],
    cardTitle: '欢迎访问',
    cardMessage: '您正在访问官方资源页面，请合理使用。',
    badgePrefix: '关键词'
  };

  // 创建提示卡片 DOM
  function createTipCard() {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.style.cssText = 'background: #f0f8ff; border: 1px solid #b0d4f1; border-radius: 8px; padding: 16px; margin: 12px 0;';

    const title = document.createElement('h3');
    title.textContent = config.cardTitle;
    title.style.margin = '0 0 8px';
    card.appendChild(title);

    const message = document.createElement('p');
    message.textContent = config.cardMessage;
    message.style.margin = '0 0 4px';
    card.appendChild(message);

    const link = document.createElement('a');
    link.href = config.siteUrl;
    link.textContent = '了解更多 →';
    link.style.color = '#0066cc';
    link.style.textDecoration = 'none';
    card.appendChild(link);

    return card;
  }

  // 创建关键词徽章
  function createKeywordBadges() {
    const container = document.createElement('div');
    container.className = 'keyword-badges';
    container.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0;';

    config.keywords.forEach(function(keyword) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = config.badgePrefix + ': ' + keyword;
      badge.style.cssText = 'background: #e0e7ff; color: #1e3a8a; padding: 4px 12px; border-radius: 12px; font-size: 0.9em;';
      container.appendChild(badge);
    });

    return container;
  }

  // 创建访问说明
  function createAccessNote() {
    const note = document.createElement('div');
    note.className = 'access-note';
    note.style.cssText = 'background: #f9f9f9; border-left: 4px solid #4a90d9; padding: 12px; margin: 12px 0;';

    const p = document.createElement('p');
    p.textContent = '访问说明：本站为爱游戏官方索引页，请通过浏览器正常访问。如有问题，请参考 ' + config.siteUrl + ' 获取帮助。';
    p.style.margin = '0';
    note.appendChild(p);

    return note;
  }

  // 将元素插入页面指定位置（若未找到则追加到 body 开头）
  function insertElements() {
    var target = document.getElementById('site-helper-container');
    if (!target) {
      target = document.createElement('div');
      target.id = 'site-helper-container';
      document.body.insertBefore(target, document.body.firstChild);
    }

    target.appendChild(createTipCard());
    target.appendChild(createKeywordBadges());
    target.appendChild(createAccessNote());
  }

  // 页面加载完毕后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertElements);
  } else {
    insertElements();
  }
})();