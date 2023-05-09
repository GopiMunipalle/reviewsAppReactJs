// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onRightClick = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    if (id !== reviewsList.length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  onLeftClick = () => {
    const {id} = this.state
    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="head">{username}</p>
        <div className="button-container">
          <button
            type="button"
            className="btn"
            data-testid="leftArrow"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <button
            type="button"
            className="btn"
            data-testid="rightArrow"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="description">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
