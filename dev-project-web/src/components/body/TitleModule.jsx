import { useEffect, useState } from "react";

import { getModuleById } from "../../services/api";

import { Title } from "./styles";

const TitleModule = ({ module_id }) => {
    const [module, setModules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            setLoading(true);
            const response = await getModuleById(module_id);
            setModules(response.data || []);
        } catch (err) {
            console.error(err);
            setError("Erro ao carregar videos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (module_id) loadData();
    }, [module_id]);

    return (
        <Title>{module.title}</Title>
    );
}

export default TitleModule;