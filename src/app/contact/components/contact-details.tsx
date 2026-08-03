import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps } from '@mui/material';
import { getContact, getProfiles } from '@/app/about/api/contact';

/** An uppercase secondary label with its value beneath — the site's standard. */
function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <Stack>
      <Typography
        fontFamily={oswald.style.fontFamily}
        fontWeight="bold"
        color="secondary"
        textTransform="uppercase"
        fontSize={{ xs: '1rem', md: '1.5rem' }}
      >
        {label}
      </Typography>
      <Typography fontWeight="lighter" fontSize={{ xs: '0.9rem', md: '1.1rem' }}>
        {value}
      </Typography>
    </Stack>
  );
}

export default async function ContactDetails({ sx }: { sx?: SxProps }) {
  const contact = await getContact();
  const profiles = await getProfiles();

  return (
    <Stack sx={sx} spacing={8}>
      <Stack spacing={3}>
        {/* Split-word headline, matching the site's heading style. */}
        <Typography
          fontFamily={oswald.style.fontFamily}
          fontWeight="bold"
          textTransform="uppercase"
          lineHeight={1.15}
          fontSize={{ xs: '1.6rem', sm: '2.4rem', md: '2.8rem' }}
        >
          Anything on your mind?
          <br />
          I&apos;d love to hear from{' '}
          <Box component="span" sx={{ color: 'secondary.main' }}>
            you
          </Box>
          !
        </Typography>

        <Typography
          fontWeight="lighter"
          fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.5rem' }}
        >
          I&apos;m always open to discussing work, partnership opportunities or
          just chatting about tech.
        </Typography>
      </Stack>

      <Stack spacing={4}>
        <Stack direction="row" spacing={{ xs: 6, sm: '20%' }}>
          <DetailBlock label="Email" value={contact.email} />
          <DetailBlock label="Phone" value={contact.phone} />
        </Stack>

        <Stack>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            color="secondary"
            textTransform="uppercase"
            fontSize={{ xs: '1rem', md: '1.5rem' }}
          >
            Check me out also on
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <IconButton
              href={profiles.linkedinUrl}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href={profiles.githubUrl}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
