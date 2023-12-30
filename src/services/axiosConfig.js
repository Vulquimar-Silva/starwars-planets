import axios from 'axios'

// Configuração do interceptor de resposta
const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Erro na resposta do servidor:', error.response.status)
      throw new Error(error.response.data.detail)
    } else if (error.request) {
      console.error('Sem resposta do servidor')
      throw new Error('Sem resposta do servidor')
    } else {
      console.error('Erro na requisição:', error.message)
      throw new Error(error.message)
    }
  },
)

export default axiosInstance
