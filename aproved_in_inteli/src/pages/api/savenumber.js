const App = (req, res) => {

  console.log(req.body)

  var phone = req.body.number

  var phoneFormated = phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')

  res.status(200).json({phoneFormated})
}

export default App