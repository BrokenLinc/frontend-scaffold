import { map, padStart } from 'lodash';

const indent = sourceHtml => {
  let resultHtml = '';

  let lines = [''];
  let lineIndex = 0;

  const incrementLineIndex = () => {
    if (lines[lineIndex] === '') return; // don't make empty lines
    lineIndex++;
    lines.push('');
  };

  for (let i in sourceHtml) {
    const character = sourceHtml[i];
    if (character === '<') incrementLineIndex();
    lines[lineIndex] += character;
    if (character === '>') incrementLineIndex();
  }

  const selfClosingTags = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ];

  const inlineTags = [
    'b',
    'big',
    'i',
    'small',
    'tt',
    'abbr',
    'acronym',
    'cite',
    'dfn',
    'em',
    'kbd',
    'strong',
    'samp',
    'bdo',
    'br',
    'map',
    'q',
    'span',
    'sub',
    'sup',
  ];

  for (let i = 0; i < lines.length; i++) {
    const content = lines[i];
    const isTag = content.substr(0,1) === '<';
    let isText = !isTag;
    let tag;
    let isBeginTag = false;
    let isEndTag = false;
    let isSelfClosingTag = false;
    let isInlineTag = false;
    let isBlockTag = false;

    if (isTag) {
      isEndTag = content.substr(1,1) === '/';
      isBeginTag = !isEndTag;
      const beginTagIndex = isEndTag ? 2 : 1;
      const endTagIndex = Math.max(content.indexOf(' '), 0) || content.indexOf('>');
      tag = content.substring(beginTagIndex, endTagIndex);
      isSelfClosingTag = selfClosingTags.includes(tag);
      isInlineTag = inlineTags.includes(tag);
      isBlockTag = !isInlineTag;
      if (isSelfClosingTag) {
        isBeginTag = false;
        isEndTag = false;
      }
    }

    lines[i] = {
      content,
      isTag,
      isText,
      tag,
      isSelfClosingTag,
      isInlineTag,
      isBlockTag,
      isBeginTag,
      isEndTag,
    };
  }

  let indentLevel = 0;

  for (let i = 0; i < lines.length - 1; i++) {
    let lineBreakBetween = false;

    if (lines[i].isEndTag) {
      indentLevel--;
    }

    lines[i].indentLevel = indentLevel;

    if (lines[i].isBlockTag || lines[i + 1].isBlockTag) {
      lineBreakBetween = true;
    }

    if (lineBreakBetween) {
      lines[i].appendLineBreak = true;
      lines[i + 1].prefixIndentation = true;
    }

    if (lines[i].isBeginTag) {
      indentLevel++;
    }
  }

  return map(lines, line => {
    let content = line.content;
    if (line.prefixIndentation) content = padStart('', line.indentLevel * 2) + content;
    if (line.appendLineBreak) content += '\n';
    return content;
  }).join('');
};

export default indent;
