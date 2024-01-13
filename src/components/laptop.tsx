'use client';

import { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import oswald from '@/styles/fonts/oswald';

export default function Laptop({ sx }: { sx?: SxProps }) {
  const codeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: codeRef,
    offset: ['start start', 'end end'],
  });
  const codeTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ['50%', '-100%']
  );
  const theme = useTheme();
  const codeColors = [
    theme.palette.primary.main,
    theme.palette.primary.dark,
    theme.palette.primary.light,
    theme.palette.secondary.main,
    theme.palette.secondary.dark,
    theme.palette.secondary.light,
    theme.palette.text.primary,
  ];

  return (
    <Stack sx={sx} display="flex" alignItems="center" justifyContent="center">
      <Box
        bgcolor="grey.300"
        width="60%"
        height="60%"
        padding={0.2}
        sx={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Box
          bgcolor="black"
          width="100%"
          height="100%"
          padding={1.2}
          sx={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            height="100%"
          >
            <Box
              flex={1}
              width="100%"
              height="100%"
              bgcolor="background.default"
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Typography
                  fontFamily={oswald.style.fontFamily}
                  color="primary"
                  fontWeight="bold"
                  variant="h4"
                >
                  {'</>'}
                </Typography>
              </motion.div>
            </Box>
            <Box
              flex={1}
              bgcolor="background.paper"
              width="100%"
              height="100%"
              overflow="hidden"
              ref={codeRef}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  translateY: codeTranslateY,
                }}
              >
                <Stack
                  direction="row"
                  width="100%"
                  height="100%"
                  justifyContent="start"
                  alignContent="start"
                  padding="10%"
                  flexWrap="wrap"
                  rowGap={1}
                >
                  {Array.from({ length: 100 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundColor:
                          codeColors[
                            Math.floor(Math.random() * codeColors.length)
                          ],
                        width: `${Math.random() * 10 + 5}%`,
                        height: '2%',
                        marginRight: `${Math.random() * 1 + 5}%`,
                      }}
                    />
                  ))}
                </Stack>
              </motion.div>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        bgcolor="grey.300"
        width="70%"
        height="4%"
        sx={{
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
    </Stack>
  );
}
