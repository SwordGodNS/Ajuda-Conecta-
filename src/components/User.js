// src/pages/User.js
import React, { useState, useEffect } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import styles from "../styles/User.module.css";
import { estadosECidades } from "../components/brasil.js"; // Importando estados e cidades

const User = () => {
  // Estados para o modal de cadastro/edição
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [horarioAbertura, setHorarioAbertura] = useState("");
  const [horarioFechamento, setHorarioFechamento] = useState("");
  const [doacoesAceitas, setDoacoesAceitas] = useState([]);
  const [novaDoacao, setNovaDoacao] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [editingPonto, setEditingPonto] = useState(null); // Estado para edição

  // Estados para a lista de pontos de coleta
  const [pontosColeta, setPontosColeta] = useState(() => {
    const storedData = localStorage.getItem("pontosColeta");
    return storedData ? JSON.parse(storedData) : [];
  });

  // Estados para o modal de confirmação de exclusão
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [pontoParaDeletar, setPontoParaDeletar] = useState(null);

  // Atualiza o localStorage sempre que pontosColeta mudar
  useEffect(() => {
    localStorage.setItem("pontosColeta", JSON.stringify(pontosColeta));
  }, [pontosColeta]);

  // Função para abrir o modal de cadastro
  const handleOpenModal = () => {
    setEditingPonto(null); // Garantir que não está editando ao abrir para adicionar
    setHorarioAbertura("");
    setHorarioFechamento("");
    setDoacoesAceitas([]);
    setEstadoSelecionado("");
    setCidadeSelecionada("");
    setIsModalOpen(true);
  };

  // Função para fechar o modal de cadastro/edição
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPonto(null);
    setHorarioAbertura("");
    setHorarioFechamento("");
    setDoacoesAceitas([]);
    setEstadoSelecionado("");
    setCidadeSelecionada("");
  };

  // Função para adicionar doações aceitas
  const handleDoacoesAceitas = () => {
    if (novaDoacao && !doacoesAceitas.includes(novaDoacao)) {
      setDoacoesAceitas([...doacoesAceitas, novaDoacao]);
      setNovaDoacao("");
    }
  };

  // Função para remover uma doação da lista
  const removeDoacao = (doacao) => {
    setDoacoesAceitas(doacoesAceitas.filter((item) => item !== doacao));
  };

  // Função para cadastrar um novo ponto de coleta
  const handleSubmit = (event) => {
    event.preventDefault();

    const novoPonto = {
      id: `PT${pontosColeta.length + 1}`, // Usando template string
      nome: event.target.nome.value,
      estado: estadoSelecionado,
      cidade: cidadeSelecionada,
      rua: event.target.rua.value,
      numero: event.target.numero.value,
      horario: `${horarioAbertura} - ${horarioFechamento}`,
      doacoes: doacoesAceitas,
    };

    setPontosColeta([...pontosColeta, novoPonto]);

    // Resetar estados
    handleCloseModal();
  };

  // Função para atualizar um ponto de coleta existente
  const handleUpdate = (event) => {
    event.preventDefault();

    const pontoAtualizado = {
      id: editingPonto.id, // Manter o mesmo ID
      nome: event.target.nome.value,
      estado: estadoSelecionado,
      cidade: cidadeSelecionada,
      rua: event.target.rua.value,
      numero: event.target.numero.value,
      horario: `${horarioAbertura} - ${horarioFechamento}`,
      doacoes: doacoesAceitas,
    };

    const updatedPontos = pontosColeta.map((ponto) =>
      ponto.id === editingPonto.id ? pontoAtualizado : ponto
    );

    setPontosColeta(updatedPontos);

    // Resetar estados
    handleCloseModal();
  };

  // Função para abrir o modal de edição
  const handleEdit = (ponto) => {
    setEditingPonto(ponto);
    setEstadoSelecionado(ponto.estado);
    setCidadeSelecionada(ponto.cidade);
    const [abertura, fechamento] = ponto.horario.split(" - ");
    setHorarioAbertura(abertura);
    setHorarioFechamento(fechamento);
    setDoacoesAceitas(ponto.doacoes);
    setIsModalOpen(true);
  };

  // Função para abrir o modal de confirmação de exclusão
  const handleDelete = (ponto) => {
    setPontoParaDeletar(ponto);
    setIsConfirmModalOpen(true);
  };

  // Função para confirmar a exclusão
  const confirmDelete = () => {
    if (pontoParaDeletar) {
      const updatedPontos = pontosColeta.filter(
        (ponto) => ponto.id !== pontoParaDeletar.id
      );
      setPontosColeta(updatedPontos);
      setPontoParaDeletar(null);
      setIsConfirmModalOpen(false);
    }
  };

  // Função para cancelar a exclusão
  const cancelDelete = () => {
    setPontoParaDeletar(null);
    setIsConfirmModalOpen(false);
  };

  return (
    <div className={styles.userContainer}>
      <h1 className={styles.pageTitle}>Pontos de Coleta</h1>
      <button className={styles.addButton} onClick={handleOpenModal}>
        Adicionar Ponto
      </button>

      <div className={styles.listContainer}>
        <h2 className={styles.listTitle}>Lista de Pontos de Coleta</h2>
        <div className={styles.dataHeader}>
          <p>ID</p>
          <p>Nome</p>
          <p>Cidade</p>
          <p>Estado</p>
          <p>Horário</p>
          <p>Doações</p>
          <p>Ações</p> {/* Nova coluna para ações */}
        </div>
        {pontosColeta.map((ponto) => (
          <div key={ponto.id} className={styles.dataRow}>
            <p>{ponto.id}</p>
            <p>{ponto.nome}</p>
            <p>{ponto.cidade}</p>
            <p>{ponto.estado}</p>
            <p>{ponto.horario}</p>
            <p>{ponto.doacoes.join(", ")}</p>
            <div className={styles.actionButtons}>
              <button
                onClick={() => handleEdit(ponto)}
                className={styles.editButton}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(ponto)}
                className={styles.deleteButton}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Cadastro e Edição */}
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>
              {editingPonto ? "Editar Ponto de Coleta" : "Cadastrar Ponto de Coleta"}
            </h4>
            <form
              className={styles.form}
              onSubmit={editingPonto ? handleUpdate : handleSubmit}
            >
              <div className={styles.formGroup}>
                <label>Nome</label>
                <input
                  className={styles.input}
                  name="nome"
                  required
                  defaultValue={editingPonto ? editingPonto.nome : ""}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Estado</label>
                <select
                  className={styles.input}
                  value={estadoSelecionado}
                  onChange={(e) => setEstadoSelecionado(e.target.value)}
                  required
                >
                  <option value="">Selecione um estado</option>
                  {Object.keys(estadosECidades).map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Cidade</label>
                <select
                  className={styles.input}
                  value={cidadeSelecionada}
                  onChange={(e) => setCidadeSelecionada(e.target.value)}
                  required
                  disabled={!estadoSelecionado}
                >
                  <option value="">Selecione uma cidade</option>
                  {estadoSelecionado &&
                    estadosECidades[estadoSelecionado].map((cidade) => (
                      <option key={cidade} value={cidade}>
                        {cidade}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.inlineGroup}>
                <div>
                  <label>Rua</label>
                  <input
                    className={styles.input}
                    name="rua"
                    required
                    defaultValue={editingPonto ? editingPonto.rua : ""}
                  />
                </div>
                <div>
                  <label>Número</label>
                  <input
                    className={styles.input}
                    name="numero"
                    type="number"
                    required
                    defaultValue={editingPonto ? editingPonto.numero : ""}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Horário de Funcionamento</label>
                <div className={styles.inlineGroup}>
                  <div>
                    <label>Início</label>
                    <TimePicker
                      onChange={setHorarioAbertura}
                      value={horarioAbertura}
                      disableClock
                      clearIcon={null}
                    />
                  </div>
                  <div>
                    <label>Fechamento</label>
                    <TimePicker
                      onChange={setHorarioFechamento}
                      value={horarioFechamento}
                      disableClock
                      clearIcon={null}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Doações Aceitas</label>
                <div className={styles.doacaoInputContainer}>
                  <input
                    className={styles.input}
                    value={novaDoacao}
                    onChange={(e) => setNovaDoacao(e.target.value)}
                    placeholder="Ex: Roupas, Alimentos"
                  />
                  <button
                    type="button"
                    className={styles.addDoacaoButton}
                    onClick={handleDoacoesAceitas}
                  >
                    Adicionar
                  </button>
                </div>
                <ul className={styles.doacoesList}>
                  {doacoesAceitas.map((item, index) => (
                    <li key={index} className={styles.doacaoItem}>
                      {item}
                      <button
                        type="button"
                        className={styles.removeDoacaoButton}
                        onClick={() => removeDoacao(item)}
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.modalButtons}>
                <button className={styles.submitButton} type="submit">
                  {editingPonto ? "Atualizar" : "Cadastrar"}
                </button>
                <button
                  className={styles.closeButton}
                  type="button"
                  onClick={handleCloseModal}
                >
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {isConfirmModalOpen && pontoParaDeletar && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>Confirmar Exclusão</h4>
            <p>
              Você tem certeza que deseja excluir o ponto de coleta{" "}
              <strong>{pontoParaDeletar.nome}</strong>?
            </p>
            <div className={styles.modalButtons}>
              <button
                className={styles.submitButton}
                onClick={confirmDelete}
              >
                Sim
              </button>
              <button
                className={styles.closeButton}
                onClick={cancelDelete}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
