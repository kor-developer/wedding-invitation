import {Divider, Title} from '../../components';
import Carousel from './Carousel';

import type {FC} from 'react';

export type GalleryProps = {
  value?: any;
};

const Gallery: FC<GalleryProps> = (props) => {
  const {value} = props;

  return (
    <article>
      <Title text="갤러리" />
      <Carousel />
      <Divider />
    </article>
  );
};

export default Gallery;

