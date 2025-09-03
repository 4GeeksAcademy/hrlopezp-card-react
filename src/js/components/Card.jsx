export const Card = () => {
    return (
        <div className="col-12 col-lg-3 col-md-4 col-sm-6 py-4">
            <div className="card text-center">
                <img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top"
                    alt="cuadro gris" />
                <div className="card-body m-0 p-0">
                    <h3 className="card-title pt-4 pb-1 ">Card title</h3>
                    <p className="card-text border-bottom px-3 pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Distinctio deserunt delectuselit. voluptatum facere autem quam beatae.</p>
                    <a href="#" className="btn btn-primary mb-3 fw-bold">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}