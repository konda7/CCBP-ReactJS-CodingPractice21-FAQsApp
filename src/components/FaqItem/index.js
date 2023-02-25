import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    showAns: false,
  }

  onCLickGetAnswer = () => {
    this.setState(prevState => ({
      showAns: !prevState.showAns,
    }))
  }

  getAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    return (
      <div>
        <hr className="horizontal-line" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }

  render() {
    const {showAns} = this.state
    const imgUrl = showAns
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = showAns ? 'plus' : 'minus'

    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="faq-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <img
            src={imgUrl}
            alt={imgAlt}
            className="toggle-img"
            onClick={this.onCLickGetAnswer}
          />
        </div>
        {showAns && this.getAnswer()}
      </li>
    )
  }
}

export default FaqItem
