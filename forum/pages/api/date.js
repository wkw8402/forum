export default function handler(request, response){
    let a = new Date()
    response.status(200).json(a)
  } 