import Button from "../Button/Button";
import styles from "./CardItem.module.css"
import { CgAdd } from "react-icons/cg";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function CardItem(){
    return(
        <div className={styles.cardBody}>
            <h3 className="card-item-title">nome_do_item</h3>
            <div className="cardImg">
                <a>imagem do produto</a>
            </div>
            <div className="card-price">
                R$15.00
            </div>
            <div className="card-buttons">
                <Button type="removeItem"><IoIosRemoveCircleOutline/></Button>
                <Button type="addItem"><CgAdd /></Button>
                
            </div>
        </div>
    )
}

