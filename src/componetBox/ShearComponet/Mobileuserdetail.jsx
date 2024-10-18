// ##########################
//mobile user details box component
// ##########################
export const Mobileuserditailse = ({ remover, ref }) => {
  return (
    <>
      <div
        ref={ref}
        className="absolute top-[65px] right-[10px] dark:bg-darkcofeecolor bg-white rounded shadow-md p-2 z-10 sm:hidden"
      >
        <div className="flex items-center justify-between cursor-pointer ">
          <h4 className="text-[#A1A1AA] text-sm font-semibold">Usman Zafar</h4>
          <i
            onClick={remover}
            className="ri-close-line text-xl font-bold text-textblackcolor dark:text-darktextdipcolor"
          ></i>
        </div>

        <p className="text-[#A1A1AA] text-xs">usmanzafar@gmail.com</p>
      </div>
    </>
  );
};
