import citasApi from "../axiosApi";

class cargarCitas {
  getAllCitas() {
      console.log('Estoy pidiendo citas')
    return citasApi().get("/citasReactivas");
  }
}

export default new cargarCitas();