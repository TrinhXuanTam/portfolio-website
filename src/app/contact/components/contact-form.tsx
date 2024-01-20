'use client';

import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RoundedButton from '@/components/buttons/rounded-button';
import { sendEmail } from '@/app/contact/api/mail';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactForm({ sx }: { sx?: SxProps }) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: false,
    subject: false,
    message: false,
  });
  const [error, setError] = useState<string | undefined>();

  function resetErrors() {
    setError(undefined);
    setFormErrors({
      email: false,
      subject: false,
      message: false,
    });
  }

  function validateFormData(data: FormData) {
    resetErrors();

    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    if (!email || !subject || !message) {
      setError('Please fill in all fields');
      setFormErrors((prev) => ({
        ...prev,
        email: !email,
        subject: !subject,
        message: !message,
      }));
      return false;
    }

    if (!email.toString().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      setFormErrors((prev) => ({ ...prev, email: true }));
      return false;
    }

    return true;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formValid = validateFormData(data);
    if (!formValid) {
      return;
    }

    try {
      setPending(true);
      await sendEmail(data);
      resetErrors();
      setSubmitted(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Stack sx={sx} position="relative">
      {pending && (
        <CircularProgress
          size="10vh"
          sx={{ position: 'absolute', top: '45%', left: '45%' }}
        />
      )}

      {!submitted ? (
        <form
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '1rem',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            disabled={pending}
            error={formErrors.email}
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            disabled={pending}
            error={formErrors.subject}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            minRows={15}
            disabled={pending}
            error={formErrors.message}
          />
          {error && (
            <Alert sx={{ width: '100%' }} severity="error">
              {error}
            </Alert>
          )}
          <RoundedButton
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={pending}
          >
            Send message
          </RoundedButton>
        </form>
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          height="100%"
          spacing={2}
        >
          <MarkEmailReadIcon sx={{ fontSize: '10rem' }} color="primary" />
          <Typography
            variant="h3"
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            color="primary"
            textTransform="uppercase"
          >
            Thank you for you message!
          </Typography>

          <Typography variant="h5" fontWeight="lighter">
            I will get back to you as soon as possible.
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
