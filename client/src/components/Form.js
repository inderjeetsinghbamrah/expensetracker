import React from "react";
import { useForm } from "react-hook-form";
import List from "./List";

function Form() {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Salary, House Rent, SIP"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>

      <List></List>
    </div>
  );
}
export default Form;

// import React from "react";
// import { useState } from "react";
// import formElementsData from "./formElementsData";
// import InputElement from "./InputElement";

// const Form = () => {
//   const [values, setValues] = useState({
//     entryName: "",
//     entryType: "",
//     amount: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.elements);
//     setValues(null);
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="form max-w-sm mx-auto w-96">
//       <h1 className="font-bold pb-4 text-xl">Transaction</h1>

//       <form onSubmit={handleSubmit}>
//         <div className="grid gap-4">
//           {formElementsData.map((formElementData) => (
//             <InputElement
//               key={formElementData.id}
//               {...formElementData}
//               value={values[formElementData.name]}
//               elementType={formElementData.elementType}
//               onChange={onChange}
//             />
//           ))}
//           <div className="submit-btn">
//             <button className="border py-2 my-2 text-white bg-indigo-500 w-full">
//               Make Transaction
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;
