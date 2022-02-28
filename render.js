const fs = require('fs')
const Maizzle = require('@maizzle/framework')

const options = {
  maizzle: {
    inlineCSS: true,
    removeUnusedCSS: true,
  },
}

const source = fs.readFileSync('./test.html', 'utf8')

Maizzle
  .render(source, options)
  .then(({html}) => {
    console.log(html)
  })
