import type {FC} from 'react';
import {Box} from '@mui/material';

export type WaveProps = {
  width?: number;
  fill?: string;
};

const Wave: FC<WaveProps> = (props) => {
  const {
    width = 138,
    fill = 'white',
  } = props;

  return (
    <Box sx={{
      content: '""',
      bottom: '-5px',
      display: 'block',
      width,
      height: '10px',
      backgroundImage: `url("data:image/svg+xml,<svg width='52' height='10' viewBox='0 0 52 10' fill='none' xmlns=\'http://www.w3.org/2000/svg\'><path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M26.3456 5.5155C19.8495 0.496856 10.2374 1.20194 0 6.47465V4.4622C10.5562 -0.974704 20.1801 -1.77683 27.5464 3.91414C30.8728 6.48396 34.3418 7.8579 38.203 7.97617C42.0826 8.09501 46.8952 7.09206 52 4.46288V6.47534C46.708 9.20097 42.4583 10.1199 38.1432 9.98771C33.8097 9.85497 29.9504 8.30049 26.3456 5.5155Z' fill='${fill}'/></svg>")`,
      marginBottom: 5.5,
    }}
    >
    </Box>
  );
};

export default Wave;
