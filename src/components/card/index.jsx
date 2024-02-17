import styles from './card.module.css'
import { useState } from 'react'

export default function Card({ person }) {
    const status = person.status
    console.log(status)

    return (
        <div className={styles.container}>
            <img 
            src={person.image} 
            alt="personagem" 
            width={100} 
            height={100}
            className={styles.image}
            />


            <div className={styles.content}>
                <div>
                    <h2 className={styles.titulo}>{person.name}</h2>  
                    <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
                        {status === 'Alive' && <span className={styles.statusAlive}></span>}
                        {status === 'Dead' && <span className={styles.statusDead}></span>}
                        {status === 'unknown' && <span className={styles.statusUnknown}></span>}
                        <b>{person.status} - {person.species}</b>
                    </div>
                    
                </div>

                <div>
                    <p className={styles.info}>Ultima localização conhecida:</p>
                    <p>{person.origin.name}</p>
                </div>

                <div>
                    <p className={styles.info}>Visto pela primeira vez:</p>
                    <p>{person.location.name}</p>
                </div>
            </div>
            
                
        </div>
    )
}