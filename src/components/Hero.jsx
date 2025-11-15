import "./Hero.css";
import heroImage from "../assets/Hero.jpg";
export default function Hero() {
    return (
        <section 
        className="hero"
        style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="overlay"></div>

            <div className="content">
                <h1 className="title">Andrea</h1>
                <p className="subtitle"> 
                    Sono Andrea e mi piace il mio gatto, Dexter. 
                    Ho deciso di creare questo website un po' per noia, 
                    un po' per poter raccontare le mie esperienze e i miei pensieri. 
                    Se volete leggere una verita' discutibile e non assoluta, siete esattamente dove dovete essere.
                </p>

                <button className="btn">Vai al blog</button>

                <div className="social"> 
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Linkedin"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </section>
    )
}