import axios from "axios";

interface PersonajeIngles {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface PersonajeEspanol {
  nombre: string;
  altura: string;
  masa: string;
  color_de_pelo: string;
  color_de_piel: string;
  color_de_ojos: string;
  anio_de_nacimiento: string;
  genero: string;
}

const traducirPersonaje = (personaje: PersonajeIngles): PersonajeEspanol => {
  return {
    nombre: personaje.name,
    altura: personaje.height,
    masa: personaje.mass,
    color_de_pelo: personaje.hair_color,
    color_de_piel: personaje.skin_color,
    color_de_ojos: personaje.eye_color,
    anio_de_nacimiento: personaje.birth_year,
    genero: personaje.gender,
  };
};

export const httpClientPlugin = {
  get: async (url: string) => {
    const response = await axios.get(url);
    const personajeEnEspanol = traducirPersonaje(response.data);
    return personajeEnEspanol;
  },
};
