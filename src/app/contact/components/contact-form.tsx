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
import Box from '@mui/material/Box';

type FieldErrors = { email?: string; subject?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Subtle rounding + accent focus so inputs feel designed, not stock MUI.
const fieldSx: SxProps = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& label.Mui-focused': { color: 'primary.main' },
};

export default function ContactForm({ sx }: { sx?: SxProps }) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [error, setError] = useState<string | undefined>();

  /** Validate a single field's value; returns an error string or undefined. */
  function validateField(name: string, value: string): string | undefined {
    if (!value.trim()) return 'This field is required';
    if (name === 'email' && !EMAIL_RE.test(value.trim()))
      return 'Please enter a valid email address';
    return undefined;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function validateAll(data: FormData): boolean {
    const next: FieldErrors = {
      email: validateField('email', String(data.get('email') ?? '')),
      subject: validateField('subject', String(data.get('subject') ?? '')),
      message: validateField('message', String(data.get('message') ?? '')),
    };
    setFieldErrors(next);
    const hasError = Object.values(next).some(Boolean);
    setError(hasError ? 'Please fix the highlighted fields.' : undefined);
    return !hasError;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!validateAll(data)) return;

    try {
      setPending(true);
      setError(undefined);
      await sendEmail(data);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setPending(false);
    }
  }

  function reset() {
    setSubmitted(false);
    setFieldErrors({});
    setError(undefined);
  }

  if (submitted) {
    return (
      <Stack sx={sx} justifyContent="center" alignItems="center" spacing={2} py={6}>
        <MarkEmailReadIcon
          sx={{ fontSize: { xs: '5rem', sm: '7rem', md: '9rem' } }}
          color="primary"
        />
        <Typography
          fontFamily={oswald.style.fontFamily}
          fontWeight="bold"
          color="primary"
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ xs: '1.25rem', md: '1.75rem' }}
        >
          Thank you for your message!
        </Typography>
        <Typography
          fontWeight="lighter"
          textAlign="center"
          fontSize={{ xs: '1rem', md: '1.25rem' }}
        >
          I will get back to you as soon as possible.
        </Typography>
        <RoundedButton variant="outlined" color="primary" onClick={reset} sx={{ mt: 1 }}>
          Send another
        </RoundedButton>
      </Stack>
    );
  }

  return (
    <Stack sx={sx} spacing={{ xs: 2, md: 3 }}>
      <Typography
        fontFamily={oswald.style.fontFamily}
        fontWeight="bold"
        color="primary"
        textTransform="uppercase"
        fontSize={{ xs: '1.7rem', md: '2rem' }}
      >
        Contact form
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          disabled={pending}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
          onBlur={handleBlur}
          sx={fieldSx}
        />
        <TextField
          fullWidth
          label="Subject"
          name="subject"
          disabled={pending}
          error={!!fieldErrors.subject}
          helperText={fieldErrors.subject}
          onBlur={handleBlur}
          sx={fieldSx}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          minRows={6}
          disabled={pending}
          error={!!fieldErrors.message}
          helperText={fieldErrors.message}
          onBlur={handleBlur}
          sx={fieldSx}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <RoundedButton
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          disabled={pending}
          startIcon={
            pending ? <CircularProgress size={18} color="inherit" /> : undefined
          }
          sx={{ alignSelf: 'flex-start' }}
        >
          {pending ? 'Sending…' : 'Send message'}
        </RoundedButton>
      </Box>
    </Stack>
  );
}
