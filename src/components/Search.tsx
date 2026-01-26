import { BiSearch } from "react-icons/bi";

export default function Search({ value, handleSearch }) {
  return (
    <div className="inline-block">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <BiSearch />
        </div>
        <input
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          id="search"
          className="block w-full p-3 ps-9 bg-neutral-secondary-medium  border-2 rounded border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
}
