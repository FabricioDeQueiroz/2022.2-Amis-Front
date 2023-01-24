import { TurmasCadastrarDTO } from "../pages/turmas/dtos/TurmasCadastrarDTO";
import { TurmasMatricularDTO } from "../pages/turmas/dtos/TurmasMatricularDTO";
import api from "./api";

export const cadastrarTurmas = async (payload: TurmasCadastrarDTO) => {
  return await api.post("/turmas/", payload).then((response: any) => response);
};

export const listarTurmas = async () => {
  return await api.get("/turmas/").then((response: any) => response);
};

export const apagarTurmas = async (turmaId: string) => {
  return await api
    .delete("/turmas/" + turmaId)
    .then((response: any) => response);
};

export const editarTurmas = async (
  turmaId: string,
  turmaEdit: TurmasCadastrarDTO
) => {
  return await api
    .put("/turmas/" + turmaId, turmaEdit)
    .then((response: any) => response);
};

export const cadastrarAluna = async (payload: TurmasMatricularDTO) => {
  return await api
    .post("/matricula/", payload)
    .then((response: any) => response);
};

export const desmatricularAluna = async (idTurma: number, idAluna: number) => {
  return await api
    .delete("/matricula/" + idTurma + "/" + idAluna)
    .then((response: any) => response);
};

export const listaAlunasNaTurma = async (idTurma: number) => {
  return await api
    .get("/matricula/" + idTurma)
    .then((response: any) => response);
};

export const listarAlunas = async () => {
  return await api.get("/alunas/").then((response: any) => response);
};

export const listarVagasTurma = async (idTurmaVagas: number) => {
  return await api
    .get("/matricula/turma/" + idTurmaVagas)
    .then((response: any) => response);
};
