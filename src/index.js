import { parser } from 'lezer-qatam';
import {
  LRLanguage,
  foldNodeProp,
  foldInside,
  indentNodeProp,
  delimitedIndent,
} from '@codemirror/language';

export const qatam = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        'Block Object List Args Params LambdaParams': foldInside,
      }),
      indentNodeProp.add({
        'Block Object': delimitedIndent({ closing: '}' }),
        List: delimitedIndent({ closing: ']' }),
        'Args Params': delimitedIndent({ closing: ')' }),
        LambdaParams: delimitedIndent({ closing: '|' }),
      }),
    ],
    languageData: {
      closeBrackets: { brackets: ['(', '[', '{', '"'] },
      commentTokens: { line: '#' },
    },
  }),
});
