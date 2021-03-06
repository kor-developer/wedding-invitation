import {Box, Typography} from '@mui/material';

import type {FC} from 'react';

export type AccountProps = {};

const Account: FC<AccountProps> = (props) => {
  return (
    <Box
      sx={{
        paddingY: 6 ,
        textAlign: 'center',
        backgroundColor: '#e5d2e0',
        color: 'rgba(0,0,0, 0.7)',
        border: 'none',
        fontSize: 13,
      }}
    >
      <Typography
        sx={{
          fontSize: 35,
          marginBottom: 1,
        }}
      >
        π€΅π»ββοΈ π°π½ββοΈ
      </Typography>
      <div style={{textAlign: 'center'}}>λΈμΉλ¨ / ν μ€λ±ν¬ 1000-0034-9315</div>
      <div style={{textAlign: 'center'}}>ν©μ ν / κ΅­λ―Όμν 115302-04-107751</div>
    </Box>
  );
};

export default Account;
