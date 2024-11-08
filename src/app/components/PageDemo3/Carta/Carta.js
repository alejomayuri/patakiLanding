import style from './style.module.css';
import CartElement from './element/CartElement';

const DATA_CERVEZAS = [
    {
        id: 1,
        color: "#E4B01F",
        estilo: "Blonde Ale",
        marca: "TYRIS",
        keywords: ["Suave y fresca", "Facil de beber"],
        alcohol: 5,
        amargo: 1,
    },
    {
        id: 2,
        color: "#813E44",
        estilo: "Margen",
        marca: "TYRIS",
        keywords: ["Tostada", "Maltosa"],
        alcohol: 6,
        amargo: 2,
    },
    {
        id: 3,
        color: "#DAA442",
        estilo: "Session IPA",
        marca: "TYRIS",
        keywords: ["Aperitivo", "Cítrica y afrutada"],
        alcohol: 3.8,
        amargo: 3,
    },
    {
        id: 4,
        color: "#E08A41",
        estilo: "Indian Pale Ale",
        marca: "TYRIS",
        keywords: ["Equilibrado", "Lúpulo"],
        alcohol: 6,
        amargo: 3,
    },
    {
        id: 5,
        color: "#CB563F",
        estilo: "Witbier",
        marca: "SPIGHA",
        keywords: ["Suave y fresca", "Especiada"],
        alcohol: 4.8,
        amargo: 0,
    },
    {
        id: 6,
        color: "#3B2D3F",
        estilo: "Porter",
        marca: "VALENTIUM",
        keywords: ["Caramelo", "Café y regaliz"],
        alcohol: 5,
        amargo: 4,
    },
    {
        id: 7,
        color: "#DAA442",
        estilo: "Session IPA",
        marca: "TYRIS",
        keywords: ["Aperitivo", "Cítrica y afrutada"],
        alcohol: 3.8,
        amargo: 3,
    },
    {
        id: 8,
        color: "#E08A41",
        estilo: "Indian Pale Ale",
        marca: "TYRIS",
        keywords: ["Equilibrado", "Lúpulo"],
        alcohol: 6,
        amargo: 3,
    }
]

const CartaCerveza = () => {
    return (
        <section>
            <div className={style.container}>
                <header>
                    <div className={style.styleHeaderContainer}>
                        <p>ESTILO</p>
                    </div>
                    <div className={style.marcaHeaderContainer}>
                        <p>MARCA</p>
                    </div>
                    <div className={style.keywordsHeaderContainer}>
                        <p>PALABRAS CLAVES</p>
                    </div>
                    <div className={style.alcoholHeaderContainer}>
                        <p>% ALCOHOL</p>
                    </div>
                    <div className={style.lupuloHeaderContainer}>
                        <p>AMARGOR</p>
                    </div>
                </header>
                {DATA_CERVEZAS.map((item) => (
                    <CartElement 
                        key={item.id}
                        estilo={item.estilo}
                        color={item.color}
                        marca={item.marca}
                        keywords={item.keywords}
                        alcohol={item.alcohol}
                        amargo={item.amargo}
                    />
                ))}
               
            </div>
        </section>
    )
}

export default CartaCerveza;