function Container({ children }) {
    return (
        <div className="container mx-auto max-w-screen-lg px-4">
            {children}
        </div>
    )
}

export default Container;