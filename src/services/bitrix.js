import axios from 'axios';

class BitrixService {
    constructor() {
        this.api = axios.create({
            // Здесь нужно будет указать URL вашего сайта на Битриксе
            baseURL: process.env.VITE_BITRIX_API_URL,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    // Метод для авторизации
    async auth(login, password) {
        try {
            const response = await this.api.post('/rest/user.auth', {
                login,
                password
            });
            if (response.data.access_token) {
                localStorage.setItem('bitrix_token', response.data.access_token);
                this.api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
            }
            return response.data;
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            throw error;
        }
    }

    // Пример метода для получения списка элементов инфоблока
    async getIBlockElements(iblockId, filter = {}) {
        try {
            const response = await this.api.get('/rest/catalog.element.get', {
                params: {
                    IBLOCK_ID: iblockId,
                    filter: filter
                }
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка получения элементов инфоблока:', error);
            throw error;
        }
    }

    // Метод для проверки авторизации
    isAuthenticated() {
        return !!localStorage.getItem('bitrix_token');
    }
}

export const bitrixService = new BitrixService();
