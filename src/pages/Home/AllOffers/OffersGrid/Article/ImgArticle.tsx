interface Props {
  path: string;
  imgStyle: string;
}

export const ImgArticle: React.FC<Props> = ({ path, imgStyle }) => (
  <div className="relative">
    <img className={imgStyle} src='img/all-offers/default.png' alt={path} />
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
