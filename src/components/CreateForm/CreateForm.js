import React from 'react';
import { useForm } from 'react-hook-form';
import './CreateForm.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const CreateForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => console.log(response))
      .then(() => {
        navigate('/users');
      });
  };
  const { formatMessage } = useIntl();

  return (
    <div className='page'>
      <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <FormattedMessage id='createUserPage.name' />
                </label>
              </td>
              <td>
                <fieldset className='register-form__fieldset'>
                  <input type='text' {...register('name', { required: true })} />
                  {errors?.name && (
                    <p className='register-form__error'>
                      <FormattedMessage id='createUserPage.required' />
                    </p>
                  )}
                </fieldset>
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage id='createUserPage.username' />
                </label>
              </td>
              <td>
                <fieldset className='register-form__fieldset'>
                  <input type='text' {...register('username', { required: true })} />
                  {errors?.username && (
                    <p className='register-form__error'>
                      <FormattedMessage id='createUserPage.required' />
                    </p>
                  )}
                </fieldset>
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage id='createUserPage.email' />
                </label>
              </td>
              <td>
                <fieldset className='register-form__fieldset'>
                  <input type='text' {...register('email', { required: true })} />
                  {errors?.email && (
                    <p className='register-form__error'>
                      <FormattedMessage id='createUserPage.required' />
                    </p>
                  )}
                </fieldset>
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage id='createUserPage.phone' />
                </label>
              </td>
              <td>
                <fieldset className='register-form__fieldset'>
                  <input type='text' {...register('phone', { required: true, maxLength: 9 })} />
                  {errors?.phone && (
                    <p className='register-form__error'>
                      <FormattedMessage id='createUserPage.required' />
                    </p>
                  )}
                </fieldset>
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage id='createUserPage.website' />
                </label>
              </td>
              <td>
                <fieldset className='register-form__fieldset'>
                  <input type='text' {...register('website', { required: true })} />
                  {errors?.website && (
                    <p className='register-form__error'>
                      <FormattedMessage id='createUserPage.required' />
                    </p>
                  )}
                </fieldset>
              </td>
            </tr>
          </tbody>
        </table>

        <button type='submit'>{formatMessage({ id: 'createUserPage.submitButton' })} </button>
      </form>
    </div>
  );
};

export default CreateForm;
