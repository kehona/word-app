import Definition from "./Definition"

export default function Meaning() {
    return (
        <div className="bg-white-50 shadow-md border p-5">
            <h1 className="text-blue-500">Parts of Speech: <span className="font-semibold text-xl">Noun</span> </h1>
            <h1 className="mt-4 text-lg font-bold">Definitions</h1>
            <Definition />
        </div>
    )
}