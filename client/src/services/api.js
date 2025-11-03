import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});

export const setupInterceptos = (logout) => {
  // 3. Interceptor de Respuesta
  api.interceptors.response.use(
    // Si la respuesta es exitosa, simplemente la retornamos
    (response) => response,

    // Si la respuesta falla...
    async (error) => {
      const originalRequest = error.config;
      // Si el error es 401 (No autorizado) y no hemos reintentado ya
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // Marcamos como reintentada

        try {
          // 4. Intentamos refrescar el token
          console.log('Access token expirado. Intentando refrescar...');
          const { data } = await api.post('/auth/refresh-token');

          // 5. Si tenemos éxito, actualizamos el token en las cabeceras de axios
          const newAccessToken = data.accessToken;
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${newAccessToken}`;

          // Y también en la petición original que falló
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          console.log('Token refrescado. Reintentando petición original...');
          // 6. Reintentamos la petición original con el nuevo token
          return api(originalRequest);
        } catch (refreshError) {
          // 7. Si el refresh token también falla, deslogueamos al usuario
          console.error('No se pudo refrescar el token. Cerrando sesión.');
          logout(); // Usamos la función logout que pasamos desde el contexto
          return Promise.reject(refreshError);
        }
      }

      // Para cualquier otro error, simplemente lo rechazamos
      return Promise.reject(error);
    }
  );
};

export default api;
