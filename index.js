const backBtn = document.querySelector('.back')
const menu = document.querySelector('.menu')
const followBtn = document.querySelector('.follow-btn')
const messageBtn = document.querySelector('.message-btn')
const suggestBtn = document.querySelector('.suggest-btn')
const showStory = document.querySelector('.story-circle')

backBtn.addEventListener('click', () => {
  console.log('clicked back button')
})

menu.addEventListener('click', () => {
  console.log('clicked menu button')
})

followBtn.addEventListener('click', () => {
  console.log('clicked follow button')
})

messageBtn.addEventListener('click', () => {
  console.log('clicked message button')
})

suggestBtn.addEventListener('click', () => {
  console.log('clicked suggest button')
})

showStory.addEventListener('click', () => {
  console.log('clicked show story')
})

//---------------------------------------------------------

// React: createElement

//---------------------------------------------------------

const app = React.createElement(
  'div',
  {
    className: 'instagram-container',
  },
  React.createElement(
    'header',
    {},
    React.createElement(
      'div',
      { className: 'back' },
      React.createElement('img', {
        alt: 'arrow left',
        src: './assets/icon/down-arrow-svgrepo-com.svg',
      })
    ),
    React.createElement(
      'div',
      { className: 'username' },
      React.createElement('span', {}, 'instagram'),
      React.createElement(
        'span',
        { className: 'blue-tik' },
        React.createElement('img', {
          alt: 'blue tik',
          src: './assets/icon/icons8-instagram-verification-badge.svg',
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'menu' },
      React.createElement('span', { className: 'circle-menu' }),
      React.createElement('span', { className: 'circle-menu' }),
      React.createElement('span', { className: 'circle-menu' })
    )
  ),
  React.createElement(
    'div',
    { className: 'story-follower-area' },
    React.createElement(
      'div',
      { className: 'story-area' },
      React.createElement(
        'div',
        { className: 'story-circle' },
        React.createElement(
          'div',
          { className: 'story-white-line' },
          React.createElement(
            'div',
            { className: 'profile-image' },
            React.createElement('img', {
              alt: 'profile',
              src: './assets/icon/Instagram-Glyph-Color-Logo.wine.svg',
            })
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'follower-area' },
      React.createElement(
        'div',
        { className: 'post' },
        React.createElement('div', { className: 'post-counter' }, '6.305'),
        React.createElement('div', { className: 'post-text' }, 'posts')
      ),
      React.createElement(
        'div',
        { className: 'follower' },
        React.createElement('div', { className: 'follower-counter' }, '12 M'),
        React.createElement('div', { className: 'follower-text' }, 'Followers')
      ),
      React.createElement(
        'div',
        { className: 'following' },

        React.createElement('div', { className: 'following-counter' }, '105'),
        React.createElement('div', { className: 'following-text' }, 'Following')
      )
    )
  ),
  React.createElement(
    'div',
    { className: 'page-detail-area' },
    React.createElement('div', { className: 'username' }, 'Instagram'),
    React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'span',
        {},
        'Bringing you closer to the people and things you love.'
      ),
      React.createElement(
        'span',
        { className: 'stiker' },
        React.createElement('img', {
          alt: 'heart',
          src: './assets/icon/heart-svgrepo-com.svg',
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'link' },
      React.createElement(
        'a',
        { href: 'https://www.facebook.com' },
        'www.facebook.com'
      )
    )
  ),
  React.createElement(
    'div',
    { className: 'follow-button-area' },
    React.createElement('button', { className: 'follow-btn' }, 'Follow'),
    React.createElement('button', { className: 'message-btn' }, 'Message'),
    React.createElement(
      'button',
      { className: 'suggest-btn' },
      React.createElement('img', {
        alt: 'arrow down',
        src: './assets/icon/arrow-down.svg',
      })
    )
  )
)

ReactDOM.render(app, document.getElementById('root'))
