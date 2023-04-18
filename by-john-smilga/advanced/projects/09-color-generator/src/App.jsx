import Form from "./Form";
import ColorList from "./colorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  // console.log(new Values("#f15025").all(10));

  const addColor = (color) => {
    // console.log(color);
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      toast.success("color applied successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" />
    </main>
  );
};
export default App;
