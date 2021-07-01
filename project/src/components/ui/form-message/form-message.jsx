import React from 'react';
import PropTypes from 'prop-types';

function FormMessage(props) {
  const {formErrors} = props;

  return (
    <div className='sign-in__message'>
      {formErrors.map(({field, message}) => (
        <p key={field}>{message}</p>
      ))}
    </div>
  );
}

FormMessage.propTypes = {
  formErrors: PropTypes.string.isRequired,
};

export default FormMessage;
