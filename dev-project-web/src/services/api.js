import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
});

export const createSessions = async (email, password) => {
    return api.post('/sessions', { email, password });
}

export const createUser = async (username, userlastname, email, password, confpass, age, gender, validation) => {
    return api.post('/users', { username, userlastname, email, password, confpass, age, gender, validation });
}

export const getModuleById = async (module_id) => {
    return api.get(`/module/${module_id}`);
}

export const getQuestionsByModuleId = async (module_id) => {
    return api.get(`/module/${module_id}/questions`);
}

export const getAlternativeByQuestionId = async (question_id) => {
    return api.get(`/questions/${question_id}/alternatives`)
}

export const createResponse = async ({ user_id, question_id, alternative_id }) => {
    return api.post("/responses", { user_id, question_id, alternative_id });
};

export const checkResponsesByModule = ({ user_id, module_id }) => {
    return api.post('/responses/check-by-module', { user_id, module_id });
}

export const getComment = async (module_id) => {
    return api.get(`/modules/${module_id}/comments`);
}

export const createComment = async ({ user_id, module_id, content }) => {
    return api.post('/comments', { user_id, module_id, content });
}

export const createSurvey = async ({ user_id, response }) => {
    return api.post('/survey-answers', { user_id, response })
}

export const getLastCompleteModule = async (user_id) => {
    return api.get(`/progress/${user_id}/last`);
}

export const updateProgress = async (user_id, field) => {
    return api.put(`/progress/${user_id}`, { field });
}