export default function BlackButton({ text, btn_Function }) {
  return (
    <div className="text-[var(--input-txt-size)] m-0 p-0">
      <button
        className="w-full  border border-default rounded-[2px] transition-all duration-200 px-[25px] py-[11px] m-0 hover:bg-[var(--border)]"
        onClick={() => {
          btn_Function();
        }}
      >
        {text}
      </button>{" "}
         
    </div>
  );
}
