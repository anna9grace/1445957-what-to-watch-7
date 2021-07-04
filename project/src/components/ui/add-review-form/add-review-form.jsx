import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';

import {MAX_RATING} from '../../../const';
import { postComment } from '../../../utils/api';
import { APIRoute } from '../../../const';

function AddReviewForm(props) {
  const {filmId} = props;

  const history = useHistory();

  const [review, setReview] = useState({
    rating: null,
    comment: '',
  });
  const {comment, rating} = review;

  const ratingValues = new Array(MAX_RATING).fill().map((el, index) => index + 1).reverse();

  const textChangeHandler = (evt) => {
    setReview({
      ...review,
      comment: evt.target.value,
    });
  };

  const ratingChangeHandler = (evt) => {
    setReview({
      ...review,
      rating: evt.target.value,
    });
  };

  const onCommentPostSuccess = () => {
    history.goBack();
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    postComment(`${APIRoute.REVIEWS}/${filmId}`, review, onCommentPostSuccess);
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars">

            {
              ratingValues.map((value) => (
                <React.Fragment key={value}>
                  <input
                    className="rating__input"
                    id={`star-${value}`}
                    type="radio"
                    name="rating"
                    value={`${value}`}
                    checked={value === +rating}
                    onChange={ratingChangeHandler}
                  />
                  <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
                </React.Fragment>
              ))
            }

          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={textChangeHandler}
          >

          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

AddReviewForm.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default AddReviewForm;
