interface Props {
  alt: string;
  imageClassName: string;
}

export const ArticleImage: React.FC<Props> = ({ alt, imageClassName }) => (
  <div className="relative">
    <img className={imageClassName} src='img/all-offers/default.png' alt={alt} />
    <p
      className="
        absolute top-2 left-2 
        text-black text-xs font-bold 
        border border-grey rounded-lg
        bg-white 
        p-2 
        uppercase
      "
    >
      Top
    </p>
  </div>
);
