import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Handle form submission (e.g., send feedback to API)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="feedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={feedback}
          onChange={handleChange}
          placeholder="Provide your feedback or suggestions"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Feedback
      </Button>
    </Form>
  );
};

export default FeedbackForm;
