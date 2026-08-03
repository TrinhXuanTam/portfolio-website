import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';

/**
 * Consistent uppercase section heading for the project detail page.
 */
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      fontFamily={oswald.style.fontFamily}
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="0.08em"
      sx={{ mb: { xs: 3, md: 5 } }}
      fontSize={{ xs: '1.3rem', sm: '1.8rem', md: '2.2rem' }}
    >
      {children}
    </Typography>
  );
}
