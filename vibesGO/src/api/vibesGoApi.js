const BASE_URL = `http://10.0.5.30:3000`
import axios from 'axios'

const createUser = async (datos) => {

  try {
    const { data } = await axios.post(`${BASE_URL}/api/usuarios`, {
      ...datos
    })

    return {
      success: data
    }
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data
      }
    } else if (error.request) {
      return {
        error: error.request
      }
    } else {
      return error.message
    }
  }

}

export default createUser