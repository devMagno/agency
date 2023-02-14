import { globalCss, styled } from '@/styles'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    width: '100%',
    height: '100%',
    lineHeight: 1,
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
  },
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },
  'ol, ul': { listStyle: 'none' },
  table: { borderCollapse: 'collapse', borderSpacing: '0' },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    padding: 0,
    cursor: 'pointer',
    border: 'none',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
})

export const MainWrapper = styled('main', {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
})
