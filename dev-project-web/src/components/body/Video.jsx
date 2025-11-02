import { useEffect, useState } from "react";

import { getModuleById } from "../../services/api";

import { VideoLimit, VideoRes } from "./styles";

const Video = ({ module_id }) => {
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
        <VideoLimit>
            <VideoRes
                id={`video-${module.id}`}
                src={module.url_video}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
        </VideoLimit>
    );
}

export default Video;