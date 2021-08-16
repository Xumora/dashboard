import React from 'react'
import HomeWrapper from './HomeWrapper'
import { Link } from 'react-router-dom';


const links = [
    { to: "/", name: "Home" },
    { to: "/users", name: "Users" },
    { to: "/photos", name: "Photos" },
    { to: "/todos", name: "Todos" },
]

const Home = () => {
    return (
        <HomeWrapper>
            <div className="container py-5">
                <div className="row">
                    <div className="col-8">
                        <div className="box d-flex p-4">
                            <img src="./girl.png" alt="?" className="w-50" />
                            <div className="mt-5 pt-5">
                                <p>Hello, Welcome Back</p>
                                <h3>Palonchiley Pistonchi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column">
                        {links.map((v, i) => {
                            return <Link to={v.to} className="btn my-3 py-3">{v.name}</Link>
                        })}
                    </div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home
