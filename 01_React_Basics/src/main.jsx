import React from 'react'
import { createRoot } from 'react-dom/client'


/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
*/

const anotherElement = React.createElement(
  <a href='https://google.com' target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "click me to visit google",
  anotherElement
)

createRoot(document.getElementById('root')).render(
  reactElement
)
