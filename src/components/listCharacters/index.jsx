import Card from "../card";
import styles from "./list.module.css";

export default function ListCharacters({list}) {

    return (
        <div className={styles.container}>
                {list.map((item) => (
                    <div key={item.id}>
                        <Card person={item}/>
                    </div>                 
        ))}
        </div>
    )
}