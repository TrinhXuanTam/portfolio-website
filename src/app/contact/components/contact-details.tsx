import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps } from '@mui/material';
import { getContact, getProfiles } from '@/app/about/api/contact';

export default async function ContactDetails({ sx }: { sx?: SxProps }) {
  const contact = await getContact();
  const profiles = await getProfiles();

  return (
    <Stack sx={sx} spacing={20}>
      <Stack spacing={3}>
        <Stack>
          <Typography
            variant="h3"
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Anything on your mind?
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography
              variant="h3"
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
            >
              I&apos;d love to hear from
            </Typography>
            <Typography
              variant="h3"
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
              color="secondary"
            >
              you
            </Typography>
            <Typography
              variant="h3"
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
            >
              !
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h6" fontWeight="lighter">
          I&apos;m always open to discussing work, partnership opportunities or
          just chatting about tech.
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <Stack direction="row" spacing="20%">
          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h6"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              Email
            </Typography>

            <Typography variant="body1" fontWeight="lighter">
              {contact.email}
            </Typography>
          </Stack>

          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              variant="h6"
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              Phone
            </Typography>

            <Typography variant="body1" fontWeight="lighter">
              {contact.phone}
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography
            fontFamily={oswald.style.fontFamily}
            variant="h6"
            fontWeight="bold"
            color="secondary"
            textTransform="uppercase"
          >
            Check me out also on
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton
              href={profiles.linkedinUrl}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              href={profiles.githubUrl}
              sx={{
                color: 'text.primary',
                padding: 0,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}