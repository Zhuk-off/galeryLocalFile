import { SliderProduct } from './imageData';
import { ImageProps } from './types';

export function toOneArray(...arrays: SliderProduct[][]): SliderProduct[] {
  const combinedArray: SliderProduct[] = [].concat(...arrays);
  return combinedArray;
}

export function transformSliderProductToImageProps(
  inputArray: SliderProduct[]
): ImageProps[] {
  const transformedArray = inputArray.map((item) => ({
    id: item.id,
    height: item.img.height.toString(),
    width: item.img.width.toString(),
    blurDataUrl: item.img.src,
    img: item.img,
  }));

  return transformedArray;
}
