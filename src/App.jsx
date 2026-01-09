import React from 'react';
import Hero from "./Components/Hero/Hero.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Logo from "./Components/Logo/Logo.jsx";

const App = () => {
    return (

        <div className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">

            <NavBar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <section className="py-10 md:py-32">
                    <Logo/>
                </section>

                <section className="py-10 md:py-32">
                    <Hero />
                </section>

                <section className="py-10">

                </section>

            </main>

        </div>
    );
};

export default App;