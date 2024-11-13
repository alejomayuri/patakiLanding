'use client'
import style from './style.module.css'
import { useState } from "react"
import Item from './Item/Item'
import ArrowIcon from '../../icons/Arrow'

const FoodBanner = () => {
    const testimoniesData = [
        { 
            id: 1, 
            text: "Ya sea que celebres una ocasión especial, disfrutes de una salida romántica o simplemente estés saciando tu antojo de una cerveza perfecta.",
            title: "A la Parrilla, Como Te Gusta",
            image: "/demos/demo3/food1.jpg"
        },
        {
            id: 2,
            text: "Nuestro ambiente está diseñado para envolverte en una atmósfera de calidez y sofisticación, creando el escenario perfecto para una experiencia inolvidable.",
            title: "Tu Viaje Cervecero",
            image: "/demos/demo3/food2.jpg"
        },
        {
            id: 3,
            text: "En nuestra cervecería, ofrecemos solo las mejores cervezas artesanales, elaboradas con ingredientes de origen local y seleccionados cuidadosamente.",
            title: "Disfruta de la Experiencia",
            image: "/demos/demo3/food3.jpg"
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleBefore = () => {
        setCurrentTestimonial(
            currentTestimonial === 0 ? testimoniesData.length - 1 : currentTestimonial - 1
        );
    }

    const handleAfter = () => {
        setCurrentTestimonial(
            currentTestimonial === testimoniesData.length - 1 ? 0 : currentTestimonial + 1
        );
    }

    return (
        <section>
            <div id='testimonial' className={style.container}>
                {testimoniesData.map((testimonial, index) => (
                    <Item
                        key={testimonial.id}
                        isActive={index === currentTestimonial}
                        {...testimonial}
                    />
                ))}
                <div className={style.buttonContainer}>
                    <button onClick={handleBefore}><ArrowIcon width={45} height={45} fill="#ba9773" /></button>
                    <button onClick={handleAfter}><ArrowIcon width={45} height={45} fill="#ba9773" /></button>
                </div>
            </div>
        </section>
    )
}

export default FoodBanner
