function Hover({children, ...props}) {
  return (
    <h3 {...props}
     className={`hover:bg-[#282B30] hover:text-center w-20
     hover:scale-100 transform transition-all duration-50 
     hover:font-medium p-2 rounded-[18px] cursor-pointer
     inline-block `}>
      {children}
    </h3>
  );
}

export default Hover;
