import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProblems, addProblem } from "../redux/ProblemSlice";
import { setSelectedProblem } from "../redux/selectedProblemSlice"; // ✅ import this
import { useNavigate } from "react-router-dom";

const ProblemSet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list, status, error } = useSelector((state) => state.problems);

  const [newProblem, setNewProblem] = useState({
    title: "",
    difficulty: "Easy",
  });

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  const handleAdd = () => {
    if (newProblem.title.trim()) {
      dispatch(addProblem(newProblem));
      setNewProblem({ title: "", difficulty: "Easy" });
    }
  };

  const handleProblemClick = (problem) => {
    dispatch(setSelectedProblem(problem)); // ✅ set selected problem in Redux
    navigate("/compiler"); // ✅ go to compiler
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Problem Set</h2>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Problem Title"
          className="border px-2 py-1 rounded"
          value={newProblem.title}
          onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
        />
        <select
          value={newProblem.difficulty}
          onChange={(e) => setNewProblem({ ...newProblem, difficulty: e.target.value })}
          className="border px-2 py-1 rounded"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Add Problem
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {list.map((problem, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => handleProblemClick(problem)} // ✅ updated
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{problem.title}</td>
              <td className="border px-4 py-2">{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemSet;
