import react, { Component } from 'react'

class TitleBox extends Component {

    constructor () {
        super ();
        this.state = {
            gifTitle: "",
            gifImage: ""
        }
    }

    //Llamado a la API
    apiCall (url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( error => console.log(error))
    }

    //Esta es la funcion que trae un nuevo GIF


    //En montaje hacemos que se ejecute el llamado a la API
    componentDidMount () {
        console.log('Me monte');
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=1g1N2psDgipMjkJqmw5GfXpIEJcxYiUv&tag=&rating=g', this.mostrarGifData)
    }

    // segundo metodo que se ejecuta en el montaje y con la data cambiamos es estado con setState
    mostrarGifData = (data) => {
        console.log(data);
        this.setState(
            {
                gifTitle: data.data.title,
                gifImage: data.data.images.original.webp
            }
        )
    }
    


    componentDidUpdate () {
        console.log('me actualice');

    }


    render () {

        let contenido = []

        if (this.state.gif == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = [<h4> {this.state.gifTitle} </h4>, this.state.gifImage] 
        }



        return (
            <>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={contenido[1]} alt="" />
                        <div className="card-body">
                            <h4 className="card-title"> {contenido[0]} </h4>
                        </div>
                    </div>
                </div>

            </>
            
            

        )
    }
    
}

export default TitleBox;