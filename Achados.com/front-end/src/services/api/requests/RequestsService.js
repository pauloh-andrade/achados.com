import { Api } from "../axios-config";

const getAll = async () => {
	try {
		const { data } = await Api.get("/request");
		if (data) return data;

		return new Error("Erro ao listar os registros");
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao listar os registros");
	}
};
const getById = async id => {
	try {
		const { data } = await Api.get(`/request/${id}`);
		if (data) return data;

		return new Error("Erro ao listar o registro");
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao listar o registro");
	}
};
const create = async datas => {
	try {
		const { data } = await Api.post(`/request`, datas);
		if (data) return data.id;

		return new Error("Erro ao criar o registro");
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao criar o registro");
	}
};
const updateById = async (id, datas) => {
	try {
		await Api.put(`/request/${id}`, datas);
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao atualizar o registro");
	}
};
const deleteById = async () => {
	try {
		await Api.delete(`/request/${id}`);
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao deletar o registro");
	}
};

const RequestService = {
	getAll,
	getById,
	create,
	updateById,
	deleteById,
};

export { RequestService };
