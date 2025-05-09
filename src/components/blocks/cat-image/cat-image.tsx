interface ICatImageProps {
  url: string;
}

const CatImage = ({ url }: ICatImageProps) => {
  return <img src={url} />;
};

export default CatImage;
