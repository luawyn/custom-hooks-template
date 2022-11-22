import React from "react";
import { useRequestData } from "./hooks/useRequestData";

function App() {
  const [students, loadingStudents, erroStudents] = useRequestData(
    "characters/students"
  );
  const [spells, loadingSpells, erroSpells] = useRequestData("spells");

  return (
    <>
      <p>Hogwarts students and their homes</p>
      {erroStudents && <p>Student request failure</p>}
      {!erroStudents && !loadingStudents ? (
        students.map((student) => {
          return (
            <p key={student.id}>
              Student: {student.name}. House: {student.house}
            </p>
          );
        })
      ) : (
        <p>Loading students...</p>
      )}
      <hr />
      <p>List of Spells</p>
      {erroSpells && <p>Spells request failure</p>}
      {!erroSpells && !loadingSpells ? (
        spells.map((spell) => {
          return (
            <p key={spell.id}>
              {spell.name}: {spell.description}
            </p>
          );
        })
      ) : (
        <p>Loading spells...</p>
      )}
    </>
  );
}

export default App;
