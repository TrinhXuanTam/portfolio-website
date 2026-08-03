'use client';

import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/app/projects/[id]/components/section-heading';

/**
 * Responsive masonry-ish image grid where each tile opens a full-screen
 * lightbox with keyboard + arrow navigation. Tiles lift and zoom slightly on
 * hover. Built for the project detail page's screenshots.
 */
export default function ImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  if (!images.length) return null;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionHeading>Gallery</SectionHeading>
      <Grid container spacing={2}>
        {images.map((src, i) => {
          // First image spans full width as a "hero" tile; rest are halves.
          const big = i === 0;
          return (
            <Grid item xs={12} md={big ? 12 : 6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <Box
                  onClick={() => show(i)}
                  data-cursor="Open"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '30vh', md: big ? '70vh' : '45vh' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.08)',
                    '& img': { transition: 'transform 0.5s ease' },
                    '&:hover img': { transform: 'scale(1.05)' },
                    '&:hover .overlay': { opacity: 1 },
                  }}
                >
                  <Image
                    src={src}
                    alt={`${alt} — image ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      background:
                        'linear-gradient(0deg, rgba(0,0,0,0.45), transparent 60%)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <Modal open={open} onClose={close} sx={{ zIndex: 12000 }}>
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={close}
        >
          <IconButton
            onClick={close}
            sx={{ position: 'absolute', top: 16, right: 16, color: '#fff', zIndex: 2 }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            sx={{ position: 'absolute', left: { xs: 4, md: 24 }, color: '#fff', zIndex: 2 }}
          >
            <ChevronLeftIcon sx={{ fontSize: 48 }} />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            sx={{ position: 'absolute', right: { xs: 4, md: 24 }, color: '#fff', zIndex: 2 }}
          >
            <ChevronRightIcon sx={{ fontSize: 48 }} />
          </IconButton>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'relative',
                width: '90vw',
                height: '88vh',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index]}
                alt={`${alt} — image ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="90vw"
              />
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
            }}
          >
            {index + 1} / {images.length}
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
