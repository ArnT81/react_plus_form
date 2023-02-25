import React, { useState } from 'react';
import Form from './components/Form';
import Input from './components/Input';


export default function App() {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = ({ target }) => {
    target.setCustomValidity('');
    setValue({ ...value, [target.name]: target.value });
  }

  const customValidation = ({ target }) => {
    // If custom errors are preffered (not used)
    switch (target.name) {
      case 'firstName':
        // target.setCustomValidity('You need to provide a first name')
        break;
      default:
        break;
    }
  }

  const handleReset = () => {
    setValue({ firstName: '', lastName: '', phone: '', email: '', password: '', confirmPassword: '' });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }

  const passwordsMatch = () => {
    return value.password === value.confirmPassword;
  }


  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      >
        <Input
          required
          type='text'
          label='Förnamn'
          name='firstName'
          placeholder='Erik'
          value={value.firstName}
          onChange={handleChange}
          onInvalid={customValidation}
          autoFocus
          autoComplete
          pattern="\w{3,16}"
        />
        <Input
          required
          type='text'
          label='Efternamn'
          name='lastName'
          placeholder='Svensson'
          value={value.lastName}
          onChange={handleChange}
          onInvalid={customValidation}
          pattern="\w{3,16}"
        />
        <Input
          required
          type='tel'
          label='Telefon'
          name='phone'
          placeholder='#######'
          value={value.phone}
          onChange={handleChange}
          onInvalid={customValidation}
          pattern='[0-9]{4,12}'
        />
        <Input
          required
          type='email'
          label='Mail'
          name='email'
          placeholder='example@gmail.com'
          value={value.email}
          onChange={handleChange}
          onInvalid={customValidation}
          minLength={13}
        />
        <Input
          required
          type='password'
          label='Lösenord'
          name='password'
          placeholder='*******'
          value={value.password}
          onChange={handleChange}
          onInvalid={customValidation}
          pattern="\w{3,16}"
        />
        <div data-validate='mongo'>
          <Input
            required
            type='password'
            label='Upprepa lösenord'
            name='confirmPassword'
            placeholder='*******'
            value={value.confirmPassword}
            onChange={handleChange}
            onInvalid={customValidation}
            passwordsMatch={passwordsMatch}
            pattern="\w{3,16}"
          />
        </div>
      </Form>
    </div>
  );
}