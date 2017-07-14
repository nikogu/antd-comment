import marked from 'marked';
import showdown from 'showdown';
import highlightjs from 'highlight.js';

const converter = new showdown.Converter();

const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  return `<h${level}>${text}</h${level}>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
  sanitize: true,
  highlight: code => highlightjs.highlightAuto(code).value,
});

const markdown = str => converter.makeHtml(marked(str));

// .replace(/(@[^(]*\((\d*)\))/g, function ($0, $1, $2) {
//  return '<a target="_blank" href="https://work.alibaba-inc.com/work/u/' + $2 + '">' + $1 + '</a>';
// }).replace(/\s?\:(\S*)\:\s?/g, function ($0, emojiName) {
//  if (emojiName && window.EMOJI_LIST.indexOf(emojiName) > -1) {
//    return '<img width="20" class="ant-say-emoji-img"
// height="20" src="/public/images/' + emojiName + '.png" />'
//  } else {
//    return $0;
//  }
// });

export default {
  markdown,
}
