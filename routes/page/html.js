require('tailwindcss');

const header = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href='/files/tlwdcss/style.css'/>
  <link rel="stylesheet" href='/files/tlwdcss/page.css'/>
  <link rel="icon" href='/files/images/engrenage.svg'/>
  <title class="">API</title>
</head>
`
const body = `
<body class="bg-gray-950 flex flex-col justify-items-center items-center text-white">
<h1 class="font-bold text-6xl">API</h1>
<form action="https://127.0.0.1:8090/auth/register" method="post">
    <input type="text" name="name" placeholder="nom"/>
    <input type="email" name="email" placeholder="Login"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="submit" name="submit" value="Envoyer" class="hover:cursor-pointer"/>
</form>
<form action="https://127.0.0.1:8090/auth/deleteall" method="post" class="">
    <input type="email" name="email" placeholder="email"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="submit" name="submit" value="Envoyer" class="hover:cursor-pointer"/>
</form>
</body>
`

module.exports = {
    body : body,
    header : header
}