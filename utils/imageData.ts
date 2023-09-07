import { toOneArray, transformSliderProductToImageProps } from './helpers';
import { ImageProps } from './types';
import vtn1sl1Img1 from '/public/products/vtn-1/slider-1/vtn1-sl1-001.webp';
import vtn1sl1Img2 from '/public/products/vtn-1/slider-1/vtn1-sl1-002.webp';
import vtn1sl1Img3 from '/public/products/vtn-1/slider-1/vtn1-sl1-003.webp';
import vtn1sl1Img4 from '/public/products/vtn-1/slider-1/vtn1-sl1-004.webp';
import vtn1sl1Img5 from '/public/products/vtn-1/slider-1/vtn1-sl1-005.webp';
import vtn1sl1Img6 from '/public/products/vtn-1/slider-1/vtn1-sl1-006.webp';
import vtn1sl1Img7 from '/public/products/vtn-1/slider-1/vtn1-sl1-007.webp';
import vtn1sl2Img1 from '/public/products/vtn-1/slider-2/vtn1-sl2-001.webp';
import vtn1sl2Img2 from '/public/products/vtn-1/slider-2/vtn1-sl2-002.webp';
import vtn1sl2Img3 from '/public/products/vtn-1/slider-2/vtn1-sl2-003.webp';
import vtn1sl2Img4 from '/public/products/vtn-1/slider-2/vtn1-sl2-004.webp';
import vtn1sl2Img5 from '/public/products/vtn-1/slider-2/vtn1-sl2-005.webp';
import vtn1sl2Img6 from '/public/products/vtn-1/slider-2/vtn1-sl2-006.webp';
import vtn1sl3Img1 from '/public/products/vtn-1/slider-3/vtn1-sl3-001.webp';
import vtn1sl3Img2 from '/public/products/vtn-1/slider-3/vtn1-sl3-002.webp';
import vtn1dusl1Img1 from '/public/products/vtn-1du/slider-1/vtn1du-sl1-001.webp';
import vtn1dusl1Img2 from '/public/products/vtn-1du/slider-1/vtn1du-sl1-002.webp';
import vtn1dusl1Img3 from '/public/products/vtn-1du/slider-1/vtn1du-sl1-003.webp';
import vtn1dusl2Img1 from '/public/products/vtn-1du/slider-2/vtn1-sl2-001.webp';
import vtn1dusl2Img2 from '/public/products/vtn-1du/slider-2/vtn1-sl2-002.webp';
import vtn1dusl2Img3 from '/public/products/vtn-1du/slider-2/vtn1-sl2-003.webp';
import vtn1dusl2Img4 from '/public/products/vtn-1du/slider-2/vtn1-sl2-004.webp';
import vtn1mtsl1Img1 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-001.webp';
import vtn1mtsl1Img2 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-002.webp';
import vtn1mtsl1Img3 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-003.webp';
import vtn1mtsl1Img4 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-004.webp';
import vtn1mtsl1Img5 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-005.webp';
import vtn1mtsl1Img6 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-006.webp';
import vtn1mtsl1Img7 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-007.webp';
import vtn1mtsl1Img8 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-008.webp';
import vtn1mtsl1Img9 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-009.webp';
import vtn1mtsl1Img10 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-010.webp';
import vtn1mtsl1Img11 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-011.webp';
import vtn1mtsl1Img12 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-012.webp';
import vtn1mtsl1Img13 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-013.webp';
import vtn1mtsl1Img14 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-014.webp';
import vtn1mtsl1Img15 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-015.webp';
import vtn1mtsl1Img16 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-016.webp';
import vtn1mtsl1Img17 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-017.webp';
import vtn1mtsl1Img18 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-018.webp';
import vtn1mtsl1Img19 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-019.webp';
import vtn1mtsl1Img20 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-020.webp';
import vtn1mtsl1Img21 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-021.webp';
import vtn1mtsl1Img22 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-022.webp';
import vtn1mtsl1Img23 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-023.webp';
import vtn1mtsl1Img24 from '/public/products/vtn-1mt/slider-1/vtn1mt-sl1-024.webp';
import { StaticImageData } from 'next/image';

export interface SliderProduct {
  id: number;
  img: StaticImageData;
}

export const vtn1Sl1: SliderProduct[] = [
  { id: 0, img: vtn1sl1Img1 },
  { id: 1, img: vtn1sl1Img2 },
  { id: 2, img: vtn1sl1Img3 },
  { id: 3, img: vtn1sl1Img4 },
  { id: 4, img: vtn1sl1Img5 },
  { id: 5, img: vtn1sl1Img6 },
  { id: 6, img: vtn1sl1Img7 },
];

export const vtn1Sl2: SliderProduct[] = [
  { id: 7, img: vtn1sl2Img1 },
  { id: 8, img: vtn1sl2Img2 },
  { id: 9, img: vtn1sl2Img3 },
  { id: 10, img: vtn1sl2Img4 },
  { id: 11, img: vtn1sl2Img5 },
  { id: 12, img: vtn1sl2Img6 },
];
export const vtn1Sl3: SliderProduct[] = [
  { id: 13, img: vtn1sl3Img1 },
  { id: 14, img: vtn1sl3Img2 },
];
export const vtn1DuSl1: SliderProduct[] = [
  { id: 15, img: vtn1dusl1Img1 },
  { id: 16, img: vtn1dusl1Img2 },
  { id: 17, img: vtn1dusl1Img3 },
];

export const vtn1DuSl2: SliderProduct[] = [
  { id: 18, img: vtn1dusl2Img1 },
  { id: 19, img: vtn1dusl2Img2 },
  { id: 20, img: vtn1dusl2Img3 },
  { id: 21, img: vtn1dusl2Img4 },
];
export const vtn1MtSl1: SliderProduct[] = [
  { id: 22, img: vtn1mtsl1Img1 },
  { id: 23, img: vtn1mtsl1Img2 },
  { id: 24, img: vtn1mtsl1Img3 },
  { id: 25, img: vtn1mtsl1Img4 },
  { id: 26, img: vtn1mtsl1Img5 },
  { id: 27, img: vtn1mtsl1Img6 },
  { id: 28, img: vtn1mtsl1Img7 },
  { id: 29, img: vtn1mtsl1Img8 },
  { id: 30, img: vtn1mtsl1Img9 },
  { id: 31, img: vtn1mtsl1Img10 },
  { id: 32, img: vtn1mtsl1Img11 },
  { id: 33, img: vtn1mtsl1Img12 },
  { id: 34, img: vtn1mtsl1Img13 },
  { id: 35, img: vtn1mtsl1Img14 },
  { id: 36, img: vtn1mtsl1Img15 },
  { id: 37, img: vtn1mtsl1Img16 },
  { id: 38, img: vtn1mtsl1Img17 },
  { id: 39, img: vtn1mtsl1Img18 },
  { id: 40, img: vtn1mtsl1Img19 },
  { id: 41, img: vtn1mtsl1Img20 },
  { id: 42, img: vtn1mtsl1Img21 },
  { id: 43, img: vtn1mtsl1Img22 },
  { id: 44, img: vtn1mtsl1Img23 },
  { id: 45, img: vtn1mtsl1Img24 },
];

// All in one
export const imageObjects = transformSliderProductToImageProps(
  toOneArray(vtn1Sl1, vtn1Sl2, vtn1Sl3, vtn1DuSl1, vtn1DuSl2, vtn1MtSl1)
);
