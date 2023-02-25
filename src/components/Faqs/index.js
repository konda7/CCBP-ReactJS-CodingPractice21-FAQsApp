import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faqs-list-items">
            {faqsList.map(eachFqs => (
              <FaqItem faqsDetails={eachFqs} key={eachFqs.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
