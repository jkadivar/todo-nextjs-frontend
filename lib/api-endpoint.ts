export const API_ENDPOINTS = {
    register: "/auth/register",
    login: '/auth/login',
    getalltasks: '/tasks',
    createtask: '/tasks',
    gettaskbyid: (id: string) => `/tasks/${id}`,

    edittask: (id: string) => `/tasks/${id}`,
    deletetask: (id: string) => `/tasks/${id}`,
}