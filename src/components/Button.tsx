export default function Button({theme,setTheme}) {

  return (
    <div className=" fixed top-2 right-10">
      <button
      className="border p-2 rounded bg-black text-white"
        onClick={() => {
            localStorage.setItem("theme",theme === "light" ? "dark" : "light");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
        </button>
      
    </div>
  );
}
