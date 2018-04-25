import { map, padStart } from 'lodash';

const indent = (sourceHtml) => {
  const lines = [''];
  let lineIndex = 0;

  const incrementLineIndex = () => {
    if (lines[lineIndex] === '') return; // don't make empty lines
    lineIndex += 1;
    lines.push('');
  };

  for (let i = 0; i < sourceHtml.length; i += 1) {
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

  for (let i = 0; i < lines.length; i += 1) {
    const content = lines[i];
    const isTag = content.substr(0, 1) === '<';
    const isText = !isTag;
    let tag;
    let isBeginTag = false;
    let isEndTag = false;
    let isSelfClosingTag = false;
    let isInlineTag = false;
    let isBlockTag = false;

    if (isTag) {
      isEndTag = content.substr(1, 1) === '/';
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

  let currentIndentLevel = 0;

  for (let i = 0; i < lines.length - 1; i += 1) {
    let lineBreakBetween = false;

    if (lines[i].isEndTag) {
      currentIndentLevel -= 1;
    }

    lines[i].indentLevel = currentIndentLevel;

    if (lines[i].isBlockTag || lines[i + 1].isBlockTag) {
      lineBreakBetween = true;
    }

    if (lineBreakBetween) {
      lines[i].appendLineBreak = true;
      lines[i + 1].prefixIndentation = true;
    }

    if (lines[i].isBeginTag) {
      currentIndentLevel += 1;
    }
  }

  return map(lines, (line) => {
    const { appendLineBreak, indentLevel, prefixIndentation } = line;
    let { content } = line;
    if (prefixIndentation) content = padStart('', indentLevel * 2) + content;
    if (appendLineBreak) content += '\n';
    return content;
  }).join('');
};

export default indent;
