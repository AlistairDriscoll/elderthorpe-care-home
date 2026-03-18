import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link to={"/"}>
                    <h1 className="text-xl font-bold">Elderthorpe Care Home</h1>
                    <p className="text-sm text-gray-500">
                        Compassionate care in a comfortable home
                    </p>
                </Link>

                <nav className="flex gap-6 text-sm font-medium">
                    <Link to={"/about"} className="hover:text-blue-600">
                        About
                    </Link>
                    <Link to={"/events"} className="hover:text-blue-600">
                        Elderthorpe Events
                    </Link>
                    <Link to={"/gallery"} className="hover:text-blue-600">
                        Gallery
                    </Link>
                    <Link to={"/contact"}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
