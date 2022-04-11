import { Api } from "../axios-config";

const getAllByRquest = async id => {
	try {
		const { data } = await Api.get(`/historic/${id}`);
		if (data) return data;

		return new Error("Erro ao listar os registros");
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao listar os registros");
	}
};

const create = async datas => {
	try {
		const { data } = await Api.post(`/historic`, datas);
		if (data) return data.id;

		return new Error("Erro ao criar o registro");
	} catch (error) {
		console.log(error);
		return new Error(error.message || "Erro ao criar o registro");
	}
};

const HistoricService = {
	getAllByRquest,
	create,
};

export { HistoricService };
