import Image from "next/image"
import plat from '../public/img/logo2.png'

export default function DishMenu() {
    return (
        <>
            <div>
                <h2>Especialidades</h2>
                <div className="dish">
                    <p>Caldeirada no Tacho<span>2PAX</span></p>
                    <article className="description">
                        <Image
                            className="img_dish"
                            src={plat}
                            alt=""
                        />
                        <p>ffffffffffffffffffff</p>
                    </article>
                </div>
                <p>Caldeirada à Rocha c\ Marisco<span>2PAX</span></p>
                <p>Cataplana de Tamboril c\ Marisco<span>2PAX</span></p>
                <p>Cataplana c\ Marisco<span>2PAX</span></p>
                <p>Cataplana de Robalo c\ Marisco<span>2PAX</span></p>
                <p>Cataplana de Bacalhau c\ Marisco<span>2PAX</span></p>
                <p>Arroz de Tamboril<span>1PAX | 2PAX</span></p>
                <p>Arroz de Tamboril c\ Marisco<span>2PAX</span></p>
                <p>Arroz de Marisco<span>1PAX | 2PAX</span></p>
                <p>Arroz de Lavagante<span>2PAX</span></p>
            </div>
            <div>
                <h2>Carnes</h2>
                <p>Carne de Porco à Alentejana</p>

                <p>Lombinhos de Porco Grelhados</p>
                <p>Espetadas Mistas na Brasa</p>
                <p>Bife de Novilho</p>
                <p>Bife da Vazia</p>
                <p>Costeleta de Novilho</p>
            </div>
            <div>
                <h2>Peixes</h2>
                <p>Espetada de Lulas</p>
                <article>
                    <h2>Peixe fresco da costa</h2>
                    <p>Cherne</p>
                    <p>Garoupa</p>
                    <p>Robalo da Costa</p>
                    <p>Dourada da Costa</p>
                    <p>Lulas da Costa</p>
                    <p>Mero</p>
                    <p>Cantaril</p>
                    <p>Sargo</p>
                    <p>Cabeça de Peixe (Garoupa e Mero)</p>
                    <p>Lagostins Cozidos</p>
                </article>
            </div>
            <div>
                <h2>Mariscos</h2>
                <p>Lagosta p/cozer ou grelhar</p>
                <p>Camarão Tigre p/grelhar</p>
                <p>Gambas Cozidas</p>
                <p>Gambas Fritas</p>
            </div>
            <div>
                <h2>Vegan</h2>
                <p>Espetadas de Tófu à Rocha</p>
            </div>
        </>
    )
}