import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RoundedButton from '@/components/buttons/rounded-button';

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
      >
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField fullWidth label="Subject" />
        <TextField fullWidth label="Message" multiline minRows={15} />
        <RoundedButton variant="contained" size="large" color="primary">
          Send message
        </RoundedButton>
      </form>
    </Stack>
  );
}
