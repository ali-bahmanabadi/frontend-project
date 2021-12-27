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

      { className: 'back', onClick: () => console.log('back') },
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
      { className: 'menu', onClick: () => console.log('menu') },
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
        { className: 'story-circle', onClick: () => console.log('story') },
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
        { className: 'detail-area' },
        React.createElement('div', { className: 'counter' }, '6.305'),
        React.createElement('div', { className: 'text' }, 'posts')
      ),
      React.createElement(
        'div',
        { className: 'detail-area' },
        React.createElement('div', { className: 'counter' }, '12 M'),
        React.createElement('div', { className: 'text' }, 'Followers')
      ),
      React.createElement(
        'div',
        { className: 'detail-area' },

        React.createElement('div', { className: 'counter' }, '105'),
        React.createElement('div', { className: 'text' }, 'Following')
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
    React.createElement(
      'button',
      { className: 'follow-btn', onClick: () => console.log('follow') },
      'Follow'
    ),
    React.createElement(
      'button',
      { className: 'message-btn', onClick: () => console.log('message') },
      'Message'
    ),
    React.createElement(
      'button',
      { className: 'suggest-btn', onClick: () => console.log('suggest') },
      React.createElement('img', {
        alt: 'arrow down',
        src: './assets/icon/arrow-down.svg',
      })
    )
  )
)

ReactDOM.render(app, document.getElementById('root'))

//-----------------------------------------------------

// React: jsx

//-----------------------------------------------------

const Button = ({ className, children, click }) => {
  return (
    <button onClick={click} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any.isRequired,
  click: PropTypes.func,
}

const ProfileName = ({ profileName }) => {
  return <div className="username">{profileName}</div>
}

ProfileName.propTypes = {
  profileName: PropTypes.string,
}

const Bio = ({ text }) => {
  return (
    <div className="bio">
      <span>{text}</span>
      <span className="stiker">
        <img src="./assets/icon/heart-svgrepo-com.svg" alt="heart" />
      </span>
    </div>
  )
}

Bio.propTypes = {
  text: PropTypes.string,
}

const Link = ({ link, title }) => {
  return (
    <div className="link">
      <a href={link} target="_blank">
        {title}
      </a>
    </div>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
}

const PageDetail = ({ counter, name }) => {
  return (
    <div className="detail-area">
      <div className="counter">{counter}</div>
      <div className="text">{name}</div>
    </div>
  )
}

PageDetail.propTypes = {
  counter: PropTypes.string,
  name: PropTypes.string,
}

const FollowerArea = () => {
  return (
    <div className="follower-area">
      <PageDetail counter="1,234" name="Posts" />
      <PageDetail counter="12 M" name="Followers" />
      <PageDetail counter="200" name="Following" />
    </div>
  )
}

const StoryArea = ({ click, imgSrc }) => {
  return (
    <div className="story-area">
      <div className="story-circle" onClick={click}>
        <div className="story-white-line">
          <div className="profile-image">
            {imgSrc && <img src={imgSrc} alt="profile" />}
          </div>
        </div>
      </div>
    </div>
  )
}

StoryArea.propTypes = {
  click: PropTypes.func,
  imgSrc: PropTypes.string,
}

const Back = ({ click }) => {
  return (
    <div className="back" onClick={click}>
      <img src="./assets/icon/down-arrow-svgrepo-com.svg" alt="arrow left" />
    </div>
  )
}

Back.propTypes = {
  click: PropTypes.func,
}

const Username = ({ title }) => {
  return (
    <div className="username">
      <span>{title}</span>
      <span className="blue-tik">
        <img
          src="./assets/icon/icons8-instagram-verification-badge.svg"
          alt="blue tik"
        />
      </span>
    </div>
  )
}

Username.propTypes = {
  title: PropTypes.string,
}

const Menu = ({ click }) => {
  return (
    <div className="menu" onClick={click}>
      <span className="circle-menu"></span>
      <span className="circle-menu"></span>
      <span className="circle-menu"></span>
    </div>
  )
}

Menu.propTypes = {
  click: PropTypes.func,
}

const Header = () => {
  return (
    <header>
      <Back click={() => console.log('back')} />
      <Username title="instagram" />
      <Menu click={() => console.log('menu')} />
    </header>
  )
}

const StoryFollowerArea = () => {
  return (
    <div className="story-follower-area">
      <StoryArea
        click={() => console.log('story')}
        imgSrc="./assets/icon/Instagram-Glyph-Color-Logo.wine.svg"
      />
      <FollowerArea />
    </div>
  )
}

const PageDetailArea = () => {
  return (
    <div className="page-detail-area">
      <ProfileName profileName="instagram" />
      <Bio text="Bringing you closer to the people and things you love." />
      <Link link="https://www.facebook.com" title="www.facebook.com" />
    </div>
  )
}

const FollowButtonArea = () => {
  return (
    <div className="follow-button-area">
      <Button className="follow-btn" click={() => console.log('follow')}>
        Follow
      </Button>
      <Button className="message-btn" click={() => console.log('message')}>
        Message
      </Button>
      <Button className="suggest-btn" click={() => console.log('suggest')}>
        <img src="./assets/icon/arrow-down.svg" alt="arrow down" />
      </Button>
    </div>
  )
}

const App = () => {
  return (
    <div className="instagram-container">
      <Header />
      <StoryFollowerArea />
      <PageDetailArea />
      <FollowButtonArea />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root2'))
