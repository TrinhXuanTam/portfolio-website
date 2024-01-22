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
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            textTransform="uppercase"
            lineHeight={1.2}
            fontSize={{
              xs: '1.7rem',
              sm: '3rem',
              md: '3.5rem',
            }}
          >
            Anything on your mind?
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              textTransform="uppercase"
              lineHeight={1.2}
              noWrap={true}
              fontSize={{
                xs: '1.7rem',
                sm: '3rem',
                md: '3.5rem',
              }}
            >
              I&apos;d love to hear from
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              lineHeight={1.2}
              textTransform="uppercase"
              color="secondary"
              fontSize={{
                xs: '1.7rem',
                sm: '3rem',
                md: '3.5rem',
              }}
            >
              you
            </Typography>
            <Typography
              fontFamily={oswald.style.fontFamily}
              lineHeight={1.2}
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{
                xs: '1.7rem',
                sm: '3rem',
                md: '3.5rem',
              }}
            >
              !
            </Typography>
          </Stack>
        </Stack>

        <Typography
          fontWeight="lighter"
          fontSize={{
            xs: '1rem',
            sm: '1.25rem',
            md: '1.5rem',
          }}
        >
          I&apos;m always open to discussing work, partnership opportunities or
          just chatting about tech.
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <Stack direction="row" spacing="20%">
          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
              fontSize={{
                xs: '1rem',
                md: '1.5rem',
              }}
            >
              Email
            </Typography>

            <Typography fontWeight="lighter">{contact.email}</Typography>
          </Stack>

          <Stack>
            <Typography
              fontFamily={oswald.style.fontFamily}
              fontSize={{
                xs: '1.rem',
                md: '1.5rem',
              }}
              fontWeight="bold"
              color="secondary"
              textTransform="uppercase"
            >
              Phone
            </Typography>

            <Typography fontWeight="lighter">{contact.phone}</Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography
            fontFamily={oswald.style.fontFamily}
            fontWeight="bold"
            color="secondary"
            textTransform="uppercase"
            fontSize={{
              xs: '1.rem',
              md: '1.5rem',
            }}
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
