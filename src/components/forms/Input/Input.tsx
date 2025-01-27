import { FieldValues, Path, UseFormRegister } from "react-hook-form";
type TInputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  id: string;
  error?: string;
  register: UseFormRegister<TFieldValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  textForm?: string;
  available?: string;
  notAvailable?: string
  failed?: string;
};
const Input = <TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  id,
  error,
  register,
  onBlur,
  textForm,
  available,
  notAvailable,
  failed
}: TInputProps<TFieldValue>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <>
      <label htmlFor={id} className="text-[18px]">
        {label}
      </label>
      <input
        {...register(name)}
        onBlur={onBlurHandler}
        type={type}
        id={id}
        className={`w-full my-1 b bg-[#eee] rounded-md pl-3 py-[10px] outline-none text-xl ${
          error && "border-2 border-red-500"
        } ${available && "border border-green-500"}`}
      />
      {textForm && <p className="text-[#00aaff]">{textForm}</p>}
      {available && <p className="text-[#15ff00]">{available}</p>}
      {notAvailable && <p className="text-red-500">{notAvailable}</p>}
      {failed && <p className="text-red-500">{failed}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default Input;
