import { useState } from "react";

function Name({ onSubmit }) {
  const [form, setForm] = useState({ firstName: "", email: "", age: "" });
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const printValues = () => {
    setResult(form);
    onSubmit?.(form);
  };
  return (
    <>
      <input placeholder=" name"name="firstName" value={form.firstName} onChange={onChange}/>
      <input name="email" type="email" value={form.email} onChange={onChange}/>
      <input name="age" type="number" value={form.age} onChange={onChange}/>
      <button type="button" onClick={printValues}>
        Print Values
      </button>
      {result && (
        <div>
          <h3>Name: {result.firstName}</h3>
          <h3>Email: {result.email}</h3>
          <h3>Age: {result.age}</h3>
        </div>
      )}
    </>
  );
}

export default Name;