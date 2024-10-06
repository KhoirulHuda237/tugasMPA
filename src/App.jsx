// import React from "react";

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white"
//         type="submit"
//       >
//         Tuku Sakiki
//       </button>
//     );
//   }
// }

// function ButtonBlack() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//     >
//       Tuku Sakiki
//     </button>
//   );
// }

// function Buttonblue() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
//       type="submit"
//     >
//       Tuku Sakiki
//     </button>
//   );
// }


// function App() {
//   return (
//     <div className="flex justify-center bg-green-400 min-h-screen items-center">
//       <div className="flex gap-x-10">
//         <Buttonblue></Buttonblue>
//         <Button></Button>
//         <Button></Button>
//         <ButtonBlack></ButtonBlack>
//         <Button></Button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

const RadioButton = (props) => {
  const { label = "Option", name = "radio-group", value = "" } = props;
  return (
    <label className="flex items-center gap-2">
      <input type="radio" name={name} value={value} />
      {label}
    </label>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-green-500 min-h-screen items-center">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button variant="bg-red-700">Login</Button>
          <Button variant="bg-blue-700">Huda</Button>
          <Button>Utama</Button>
          <Button></Button>
        </div>
        <div className="mt-5">
          <RadioButton name="radio-group" label="laki" value="1" />
          <RadioButton name="radio-group" label="perempuan" value="2" />
          <RadioButton name="radio-group" label="waria" value="3" />
        </div>
      </div>
    </div>
  );
}

export default App;
