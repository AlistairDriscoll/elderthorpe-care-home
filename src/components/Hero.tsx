export default function Hero() {
    return (
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
                        href="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Arrange a Visit
                    </a>

                    <a
                        href="/about"
                        className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
                    >
                        About Our Care
                    </a>
                </div>
            </div>
        </section>
    );
}
