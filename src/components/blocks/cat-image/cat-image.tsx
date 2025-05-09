interface ICatImageProps {
  url?: string | null;
}

const CatImage = ({ url }: ICatImageProps) => {
  return !!url && <img src={url} />;
};

export default CatImage;
