import { client } from "../../prisma/client"

const App = async (req, res) => {

  var phone = req.body.number


  var phoneFormated = '55' + phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')

  var phones = await client.phones.findFirst({
    where: {
      phone: phoneFormated
    }
  });

  console.log(phones)


  if (phones != null){
    res.status(201).json({response: 'Response already exists'})

    return;
  } 


  try{
    await client.phones.create({
      data: {
        phone: phoneFormated
      }
    });
    res.status(201).json({phoneFormated})

  }

  catch{
    res.status(200).json({erro: "erro"})

  }

}

export default App