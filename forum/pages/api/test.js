export default function handler(request, response){
    console.log(request.query)
    return response.status(200).json()
}