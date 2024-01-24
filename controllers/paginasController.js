import { Testimonial } from "../model/Testimoniales.js";
import { Viaje } from "../model/Viaje.js";

const paginaInicio = async (req, res) => {

    //Consultar tres viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB) 

        res.render('inicio', {
            pagina : 'Inicio',
            clase: 'home',
            viajes : resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error)
    }

}

const paginaNosotros =  (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    //Consultar DDBB.
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {

    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

const paginaContactanos =  (req, res) => {
    res.send('Contactanos');
}

//Muestra un viaje por su Slug
const paginaDetallesViajes = async (req, res) => {
    const  {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({where : { slug }});

        res.render('viaje', {
            pagina : 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContactanos,
    paginaDetallesViajes
}