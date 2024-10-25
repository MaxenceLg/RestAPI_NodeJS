require('tailwindcss');
const https = require('https');
const axios = require('axios');


async function status() {
    try {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        const response = await axios.get('https://127.0.0.1:8090/status', { httpsAgent: agent });
        return response.data;
    } catch (error) {
        console.error("Error fetching status:", error);
        return { status: "unknown", message: "Could not retrieve status" };
    }
}


const header = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href='/files/tlwdcss/style.css'/>
  <link rel="stylesheet" href='/files/tlwdcss/page.css'/>
  <link rel="icon" href='/files/images/engrenage.svg'/>
  <title class="">API</title>
</head>`;


const form = `
<form action="https://127.0.0.1:8090/auth/register" method="post" class="flex flex-col items-center">
    <h2>Register</h2>
    <input type="text" name="name" placeholder="Nom"/>
    <input type="email" name="email" placeholder="Email"/>
    <input type="password" name="password" placeholder="Mot de passe"/>
    <input type="submit" name="submit" value="Envoyer" class="hover:cursor-pointer"/>
</form>`


async function genPage()
{
    let r = await status();
    const content = `
    <h1 class="font-bold text-6xl self-center">API</h1>
    <p class="self-center">Status : <strong>` + r.status + ', ' + r.message + `</strong></p>`
        + form;
    const body = `
    <body class="bg-gray-950 flex flex-col text-white">`
        + content + `</body>`;
    return header + body + "</html>";
}



module.exports = {
    html : genPage,
    status : status
}