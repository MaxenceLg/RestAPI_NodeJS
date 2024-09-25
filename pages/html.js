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
<body class="bg-gray-950 flex flex-col text-white">
<h1 class="font-bold text-6xl self-center">API</h1>
<p>Status : <strong id="max"></strong><script></script></p>
<form action="https://127.0.0.1:8090/auth/register" method="post" class="flex flex-col items-center">
    <h2>Register</h2>
    <input type="text" name="name" placeholder="Nom"/>
    <input type="email" name="email" placeholder="Email"/>
    <input type="password" name="password" placeholder="Mot de passe"/>
    <input type="submit" name="submit" value="Envoyer" class="hover:cursor-pointer"/>
</form>
</body>
`

module.exports = {
    body : body,
    header : header
}