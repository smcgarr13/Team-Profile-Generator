const managerFunction = (name, id, email, officeNumber) =>
  `<div class="card">
<h2>${name}</h2>
<h3><i class="fa-solid fa-skull"></i><p>Manager</p></h3>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>Office Number: ${officeNumber}</p>
</div>
`;

const engineerFunction = (name, id, email, github) =>
  `<div class="card">
<h2>${name}</h2>
<h3><i class="fa-solid fa-face-smile"></i><p>Engineer</p></h3>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>GitHub: <a href='https://github.com/${github}'>${github}</a></p>
</div>
`;

const internFunction = (name, id, email, school) =>
  `<div class="card">
<h2>${name}</h2>
<h3><i class="fa-solid fa-user-graduate"></i><p>Intern</p></h3>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>School: ${school}</p>
</div>
`;

const mainBody = (cards) => {
  return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>My Team</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./dist/style.css" />
          </head>
          <body>
            <header>
              <h1>My Team</h1>
            </header>
              <main>
                <div class="container">
                ${cards.join("")}
              </main>
          </body>
          </html>
        `;
};

module.exports = {
  managerFunction,
  engineerFunction,
  internFunction,
  mainBody,
};
