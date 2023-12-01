const BASE_URL = `http://192.168.0.11:3000`
import axios from 'axios'

const createUser = async (datos) => {

  try {
    const { data } = await axios.post(`${BASE_URL}/api/usuarios`, {
      ...datos
    })

    return {
      success: data,
      data: data.data
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

const getStoresToClosed = async (datos)=> {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/getStoresByUserUbication`, {
      ...datos
    })

    return {
      success: data,
      data: data.data
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

export {
  createUser,
  getStoresToClosed
}