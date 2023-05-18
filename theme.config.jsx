import {components} from 'mdx-elements';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <span>MDX组件库</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – MDX-components",
    };
  },
  project: {
    link: 'https://github.com/try-to-fly/mdx-components'
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  toc: {
    float: true,
    title: "目录",
  },
  components
}
