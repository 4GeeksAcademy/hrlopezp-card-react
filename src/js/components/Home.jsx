import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";


//components
import { Navbar} from "./Navbar";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Copyright } from "./Copyright";

//create your first component
const Home = () => {
	return (
        <>
            <Navbar />
            <Jumbotron />
            <div class="container-fluid p-0">
                <div class="row justify-content-center mx-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Copyright />
        </>
    );
};

export default Home;