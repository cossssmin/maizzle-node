const fs = require('fs')
const Maizzle = require('@maizzle/framework')

const options = {
  maizzle: {
    inlineCSS: true,
    removeUnusedCSS: true,
  },
  tailwind: {
    css: `
      @tailwind components;
      p { @apply text-slate-700 };
      @tailwind utilities;
    `,
  }
}

const source = fs.readFileSync('./test.html', 'utf8')

Maizzle
  .render(source, options)
  .then(({html}) => {
    console.log(html)
  })
