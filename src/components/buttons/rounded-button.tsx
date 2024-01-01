import Button, { ButtonProps } from '@mui/material/Button';

export default function RoundedButton(props: ButtonProps) {
  return (
    <Button {...props} sx={{ ...props.sx, borderRadius: 3 }}>
      {props.children}
    </Button>
  );
}
