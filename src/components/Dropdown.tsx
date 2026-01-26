export default function Dropdown({ value, handleChange, categories }) {
  return (
    <div className=" inline-block text-left space-x-2 ">
      <label className="font-bold">Filter:</label>
      <select className="border" value={value} onChange={(e) => handleChange(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
