import { Check } from "lucide-react";

function InputCheck({...props}) {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
      <input {...props}
        type="checkbox"
        className="peer appearance-none mb-3 w-6 h-6 mr-4  rounded-sm border-2 border-[#D2D5DA] checked:bg-[#4E80EE] checked:border-0 cursor-pointer"
      />

      <Check
        className="absolute -left-0.5  top-px w-7 h-6 text-white hidden peer-checked:block pointer-events-none"
      />
    </label>
    </>
  );
}

export default InputCheck;
