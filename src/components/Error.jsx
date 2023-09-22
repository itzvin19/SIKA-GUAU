const Error = ({mensaje}) => {
    return (
        <div className="md:p-4 bg-red-700 text-white w-full text-center md:mb-3 rounded-md font-bold">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
