const CreateToDo = () => {
    return (
      <form
        className="bg-purple-200 w-96 mx-auto mt-12 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-3/4 mr-4 rounded-md p-2 focus:outline-none border-2 focus:border-blue-300"
          type="text"
        />
        <input
          className="w-1/4 bg-blue-400 hover:bg-blue-600 active:bg-blue-400 rounded-md text-white font-semibold"
          type="submit"
        />
      </form>
    );
  };
  
  export default CreateToDo;