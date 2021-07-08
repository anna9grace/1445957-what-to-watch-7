import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../ui/logo/logo';
import FormMessage from '../../ui/form-message/form-message';
import { login } from '../../../store/api-actions';
import { AuthorizationStatus, AppRoutes } from '../../../const';


const validationRules = {
  email: {
    validate: (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    message: 'Please enter a valid email address',
  },

  password: {
    validate: (value) => value.trim().length !== 0,
    message: 'Password field cannot be empty',
  },
};

const validateFields = (formData) => {
  const errors = [];

  Object.keys(formData).forEach((fieldName) => {
    const fieldValidation = validationRules[fieldName];
    const isValid = fieldValidation.validate(formData[fieldName]);

    if (!isValid) {
      errors.push({
        field: fieldName,
        message: fieldValidation.message,
      });
    }
  });
  return errors;
};

function SignInScreen(props) {
  const { onSubmit, authorizationStatus } = props;
  const [formErrors, setFormErrors] = useState([]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    evt.preventDefault();
    const errors = validateFields(formData);

    (errors.length === 0) && onSubmit(formData);
    setFormErrors(errors);
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLink />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >

          {formErrors && <FormMessage formErrors={formErrors} />}

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="text"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isFooter isLink />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

SignInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export { SignInScreen };
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
