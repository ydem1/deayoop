const CLASSNAME_FRAME = "relative flex-1 rounded-lg border-white border-4";
const CLASSNAME_LINE_VERTICALLY = "absolute top-0 bottom-0 -right-2 w-2 bg-white";
const CLASSNAME_LINE_HORIZONTALLY = "absolute left-0 right-0 h-1 bg-white";

export const Poster = () => (
  <section className="relative">
    <div className="
        bg-poster h-44 bg-center bg-cover
        flex
        rounded-lg border-white border-1
      ">
      <div className={CLASSNAME_FRAME}>
        <div className={CLASSNAME_LINE_VERTICALLY} />
      </div>
      <div className={CLASSNAME_FRAME}>
        <div className={CLASSNAME_LINE_VERTICALLY} />
      </div>
      <div className={CLASSNAME_FRAME} />
      <div className={`${CLASSNAME_LINE_HORIZONTALLY} top-0`} />
      <div className={`${CLASSNAME_LINE_HORIZONTALLY} bottom-0`} />
    </div>
  </section>
);


