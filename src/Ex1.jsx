import { useActionState } from "react";
function x(prevData, formData) {
  return {
    information: `سلام من در این تاریخ 
        ${formData.get("dob")}

        متولد شده ام
        `,
  };
}

export default function Example1() {
  const [value, func, loading] = useActionState(x, { information: "" });
  return (
    <div className="w-full max-w-5xl mx-auto p-5 border rounded-2xl shadow-2xl my-5">
      <h1 className="text-center text-4xl font-semibold">registeration form</h1>
      <form action={func} className="w-full p-8  flex flex-col gap-4">
        <input
          type="date"
          name="dob"
          placeholder="Enter your name"
          className="w-full border py-1.5"
        />
        <button
          type="submit"
          className="w-full bg-linear-to-tr from-blue-400 to-purple-700 text-white py-2.5 rounded-md
        "
        >
          {loading ? "please wait..." : "Save"}
        </button>
      </form>

      {value.information && (
        <div>
          <h1 className="text-center text-5xl font-bold">
            {value.information}
          </h1>
        </div>
      )}
    </div>
  );
}
