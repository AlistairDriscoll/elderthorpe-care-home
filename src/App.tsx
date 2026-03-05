export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <div>
                        <h1 className="text-xl font-bold">
                            Elderthorpe Care Home
                        </h1>
                        <p className="text-sm text-gray-500">
                            Compassionate care in a comfortable home
                        </p>
                    </div>

                    <nav className="flex gap-6 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-600">
                            About
                        </a>
                        <a href="#care" className="hover:text-blue-600">
                            Care
                        </a>
                        <a href="#gallery" className="hover:text-blue-600">
                            Gallery
                        </a>
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-4">
                        A warm, safe place to live
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Person-centred care with dignity, comfort and community.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                        >
                            Arrange a Visit
                        </a>

                        <a
                            href="#care"
                            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
                        >
                            Our Care
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-4">About</h3>
                    <p className="text-gray-600">
                        Add information about the home, the team, and the values
                        that guide the care provided here.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t mt-16 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Elderthorpe Care Home
            </footer>
        </div>
    );
}
