const sidebar = [
  {
    text: "快速开始",
    items: [
      {
        text: "安装",
        link: "/blog/install/",
      },
    ],
  },
  {
    text: "组件",
    items: [{ text: "Button", link: "/components/button/" }],
  },
];

const footer = {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023-present Aimony'
}

export default {
  themeConfig: {
    sidebar,
    footer
  },
};
