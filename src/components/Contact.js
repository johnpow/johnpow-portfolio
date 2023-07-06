import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format.';
    }

    if (!subject) {
      errors.subject = 'Subject is required.';
    }

    if (!message) {
      errors.message = 'Message is required.';
    }

    if (Object.keys(errors).length === 0) {
      // Perform further actions, such as sending the form to the desired email address
      const formData = {
        email: email,
        subject: subject,
        message: message
      };
      console.log('Form Data:', formData);
      // Send the form to the desired email address using an API or server-side logic
      // Replace the console.log statement with the logic for sending the form

      // Clear form fields
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      setSubmitMessage('Form submitted successfully!');
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
