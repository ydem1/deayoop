export const Poster = () => {
  return (
    <section className="relative">
      <div className="
        bg-poster h-[165px] bg-center bg-cover
        flex
        rounded-lg border-[#fff] border-1
      ">
        <div className="relative flex-1 rounded-lg border-[#fff] border-4">
          <div className="absolute top-0 bottom-0 right-[-8px] w-2 bg-[#fff]"></div>
        </div>
        <div className="relative flex-1 rounded-lg border-[#fff] border-4">
          <div className="absolute top-0 bottom-0 right-[-8px] w-2 bg-[#fff]"></div>
        </div>
        <div className="flex-1 rounded-lg border-[#fff] border-4" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#fff]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fff]" />
      </div>
    </section>
  )
};

