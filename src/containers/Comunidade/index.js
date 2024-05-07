import React, { useState } from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formContainer: {
    display: "flex",
    marginBottom: "20px",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  attendanceButton: {
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  editButton: {
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    fontSize: "14px",
    marginRight: "5px",
  },
};

const JiuJitsuPage = () => {
  // Estado para armazenar a lista de alunos
  const [students, setStudents] = useState([
    { id: 1, name: "João", belt: "Branca", degrees: 1, attendance: 80 },
    { id: 2, name: "Maria", belt: "Azul", degrees: 2, attendance: 90 },
    { id: 3, name: "Pedro", belt: "Roxa", degrees: 3, attendance: 75 },
  ]);

  // Estado para controlar o formulário de adição de aluno
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentBelt, setNewStudentBelt] = useState("Branca");
  const [newStudentDegrees, setNewStudentDegrees] = useState(1);
  const [newStudentAttendance, setNewStudentAttendance] = useState(0);

  // Função para adicionar um novo aluno à lista
  const handleNewStudentSubmit = () => {
    const newStudentId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const newStudent = {
      id: newStudentId,
      name: newStudentName,
      belt: newStudentBelt,
      degrees: newStudentDegrees,
      attendance: newStudentAttendance,
    };
    setStudents([...students, newStudent]);
    resetNewStudentForm();
  };

  // Função para limpar o formulário de adição de aluno
  const resetNewStudentForm = () => {
    setNewStudentName("");
    setNewStudentBelt("Branca");
    setNewStudentDegrees(1);
    setNewStudentAttendance(0);
  };

  // Função para editar o nome de um aluno
  const editName = (id, newName) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, name: newName } : student
      )
    );
  };

  // Função para editar a faixa de um aluno
  const editBelt = (id, newBelt) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, belt: newBelt } : student
      )
    );
  };

  // Função para editar os graus de um aluno
  const editDegrees = (id, newDegrees) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, degrees: newDegrees } : student
      )
    );
  };

  // Função para editar a presença de um aluno
  const editAttendance = (id, newAttendance) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, attendance: newAttendance } : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Controle de Presença e Evolução</h1>
      {/* Formulário para adicionar um novo aluno */}
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Nome do Aluno"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          style={styles.input}
        />
        <select
          value={newStudentBelt}
          onChange={(e) => setNewStudentBelt(e.target.value)}
          style={styles.select}
        >
          <option value="Branca">Branca</option>
          <option value="Azul">Azul</option>
          <option value="Roxa">Roxa</option>
          <option value="Marrom">Marrom</option>
          <option value="Preta">Preta</option>
        </select>
        <input
          type="number"
          placeholder="Graus"
          value={newStudentDegrees}
          onChange={(e) => setNewStudentDegrees(parseInt(e.target.value))}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Frequência (%)"
          value={newStudentAttendance}
          onChange={(e) => setNewStudentAttendance(parseInt(e.target.value))}
          style={styles.input}
        />
        <button onClick={handleNewStudentSubmit} style={styles.addButton}>
          Adicionar Aluno
        </button>
      </div>
      {/* Tabela para exibir a lista de alunos */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Faixa</th>
            <th>Graus</th>
            <th>Frequência</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => editName(student.id, e.target.value)}
                  style={styles.input}
                />
              </td>
              <td>
                <select
                  value={student.belt}
                  onChange={(e) => editBelt(student.id, e.target.value)}
                  style={styles.select}
                >
                  <option value="Branca">Branca</option>
                  <option value="Azul">Azul</option>
                  <option value="Roxa">Roxa</option>
                  <option value="Marrom">Marrom</option>
                  <option value="Preta">Preta</option>
                </select>
              </td>
              <td>
                <button onClick={() => editDegrees(student.id, student.degrees + 1)}>+</button>{" "}
                {student.degrees}{" "}
                <button onClick={() => editDegrees(student.id, student.degrees - 1)}>-</button>
              </td>
              <td>
                <input
                  type="number"
                  value={student.attendance}
                  onChange={(e) => editAttendance(student.id, parseInt(e.target.value))}
                  style={styles.input}
                />
              </td>
              <td>
                <button onClick={() => editAttendance(student.id, student.attendance)} style={styles.editButton}>
                  Editar Presença
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JiuJitsuPage;
