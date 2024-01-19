import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RoundedButton from '@/components/buttons/rounded-button';
import { sendEmail } from '@/app/contact/api/mail';

export default function ContactForm({ sx }: { sx?: SxProps }) {
  return (
    <Stack sx={sx}>
      <form
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '1rem',
        }}
        action={sendEmail}
      >
        <TextField fullWidth label="Email" name="email" />
        <TextField fullWidth label="Subject" name="subject" />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          minRows={15}
        />
        <RoundedButton
          variant="contained"
          size="large"
          color="primary"
          type="submit"
        >
          Send message
        </RoundedButton>
      </form>
    </Stack>
  );
}
