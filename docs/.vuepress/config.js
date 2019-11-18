module.exports = {
  title: "gzh blog",
  description: "gzh blog",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    themePicker: false,
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间轴",
        link: "/timeLine/",
        icon: "reco-date"
      }
    ],
    type: "blog",
    logo: "/head.jpeg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "gzh"
  },
  markdown: {
    lineNumbers: true
  }
};
