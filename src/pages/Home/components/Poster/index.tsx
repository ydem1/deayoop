export const Poster = () => {
  return (
    <section className="relative">
      <div className="
        bg-poster h-44 bg-center bg-cover
        flex
        rounded-lg border-white border-1
      ">
        <div className="relative flex-1 rounded-lg border-white border-4">
          <div className="absolute top-0 bottom-0 -right-2 w-2 bg-white"></div>
        </div>
        <div className="relative flex-1 rounded-lg border-white border-4">
          <div className="absolute top-0 bottom-0 -right-2 w-2 bg-white"></div>
        </div>
        <div className="flex-1 rounded-lg border-white border-4" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-white" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
      </div>
    </section>
  )
};

