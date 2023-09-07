
export default function Definition({ index, definition }) {
    return (
        <div className="border p-5">
            <div className="flex">
                <span className="font-bold text-2xl">{index + 1}.</span>
                <span className="text-xl ml-2">{definition.definition}</span>
            </div>
            {definition.example && <p className="mt-2 italic font-normal text-blue-600">Example: {definition.example}</p>}
        </div>
    )
}