import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Carousel from '../../components/Carousel';
import type { ImageProps } from '../../utils/types';
import { imageObjects } from '../../utils/imageData';

const Home: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter();
  const { photoId } = router.query;
  let index = Number(photoId);

  const currentPhotoUrl = currentPhoto.img.src;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const currentPhoto = imageObjects.find(
    (img) => img.id === Number(context.params.photoId)
  );

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  };
};

export async function getStaticPaths() {
  let fullPaths = [];
  for (let i = 0; i < imageObjects.length; i++) {
    fullPaths.push({
      params: { photoId: imageObjects[i].id.toString() },
    });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}
