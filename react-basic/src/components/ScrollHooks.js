import React, {useState, useEffect} from 'react';

export default function ScrollHooks() {
    const [scrollY, setscrollY] = useState(0);
    // eslint-disable-next-line
    const [name, setName] = useState('Juan');

    useEffect(() => {
        //console.log('Fase de Actualizacion Component Did Update ');
        const detectarScroll = () => setscrollY(window.pageYOffset);

        window.addEventListener('scroll', detectarScroll);

        return () => {
            window.addEventListener('scroll', detectarScroll)
            //console.log('Desmontaje')
        };

    }, [scrollY]); // solo scrollY tiene cambios

    useEffect(() => {
        //console.log('Fase de Montaje Component Did Mount ');
    }, [])

    useEffect(() => {
        return () => {
            //console.log('Fase de Desmontaje Component Did UnMount ');
        }
    }, [])
    return(
        <>
            <h2>Hooks -useEffect Ciclos de vida</h2>
            <p>Scroll Y del NAvegador {scrollY} px</p>
        </>
    )
}