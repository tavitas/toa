import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
            We are a small team of crypto enthusiasts operating out of Apia,
            Samoa. Our mission is to pioneer the adoption of Cardano and
            cryptocurrencies in the Pacific region.
          </p>
          <p>
            The team's background experience is in DevOps, Systems Development
            and Web Design.
          </p>
          {close}
        </article>

        <article
          id="tech"
          className={`${this.props.article === 'tech' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tech</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>Secure Servers</h3>
          <p>
            The TOA stake pool is hosted on the DigitalOcean cloud computing
            platform.
          </p>
          <h3>Performance</h3>
          <p>
            We have been fine tuning the stake pool since the start of the
            Haskell Test Network (HTN) and continue to monitor the performance
            of the pool 24/7.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main"> */}
          {/* <img src={pic03} alt="" /> */}
          {/* </span> */}
          <p>
            The Cardano blockchain has transitioned from a federated,
            centralized network over to a dynamic, decentralized network. Anyone
            can now setup a cardano node and participate in the network. Holders
            of the Cardano cryptocurrency ADA can delegate their tokens towards
            a stake pool and earn rewards.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <p>
            You can join our telegram channel{' '}
            <a href="https://t.me/toapool">t.me/toapool</a> for all updates on
            the node pool and any developments in the pipeline.
          </p>
          <ul className="icons">
            <li>
              <a href="https://t.me/toapool" className="icon fa-telegram">
                <span className="label">Telegram</span>
              </a>
            </li>
            <li>
              <a href="mailto: insamoa@pm.me" className="icon fa-inbox">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tavitas" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
