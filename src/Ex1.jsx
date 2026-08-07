import { useActionState } from "react";

function i(prevState, formData) {
  return {
    name: formData.get("name"),
    age: formData.get("age"),
  };
}

export default function Example2() {
  const [data, func] = useActionState(i, {
    name: "",
    age: "",
  });
  return (
    <div className="w-full max-w-5xl mx-auto my-8 border p-8">
      <h1 className="uppercase font-bold text-4xl text-center">
        my personal Infomration
      </h1>
      <form action={func} className="w-full p-4 flex flex-col gap-2">
        <input
          className="py-1.5 w-full border focus:outline-0"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="py-1.5 w-full border focus:outline-0"
          type="number"
          placeholder="Age"
          name="age"
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-2xl"
        >
          Save
        </button>
      </form>
      {data.name && data.age && (
        <div>
          <h1>
            Salaam, I am {data.name} and I am {data.age} years old
          </h1>
        </div>
      )}
    </div>
  );
}
