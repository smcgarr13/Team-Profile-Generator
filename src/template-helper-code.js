

const managerFunction = (name, id, email, officeNumber) =>
`<div class="card">
<h2>${name}</h2>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>Office Number: ${officeNumber}</p>
</div>
`;

const engineerFunction = (name, id, email, github) =>
`<div class="card">
<h2>${name}</h2>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>GitHub: ${github}</p>
</div>
`;

const internFunction = (name, id, email, school) =>
`<div class="card">
<h2>${name}</h2>
<p>ID: ${id}</p>
<p>Email: <a href='mailto: ${email}'>${email}</a></p>
<p>School: ${school}</p>
</div>
`;

// const mainBody = () => {
//   return (
// `<div class="card">
// ${name}
// ${id}
// ${email}
// ${officeNumber}
// </div>
// `
// );

// };

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
            <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./dist/style.css" />
          </head>
          <body>
            <header>
              <h1>My Team</h1>
            </header>
              <main>
                <div class="container">
                ${cards.join('')}
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

// module.exports = templateHelperCode;



// const generateCardHTML = (name, id, email, additionalData) => {
//     return `
//     <div class="card">
//     <h2>${name}</h2>
//     <p>ID: ${id}</p>
//     <p>Email: <a href='mailto: ${email}'>${email}</a></p>
//     ${additionalData}
//     </div>
//     `;
//     };
    
    
//     const generateHTML = (cards) => { 
//         return `
//             <!DOCTYPE html>
//             <html>
//               <head>
//                 <meta charset="utf-8">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                 <title>My Team</title>
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-+iLwuix06anLfy4M4jreP8cQZd7Btmhp+cm1S/AiBFlo9bs1Y7zTtLQD0nRjJ8sCt7NHu/a/WvF3/nlzNGX9og==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//                 <link rel="stylesheet" href="./style.css">
//               </head>
//               <body>
//                 <header>
//                   <h1>My Team</h1>
//                 </header>
//                   <main>
//                     <div class="container">
//                     ${cards.map(card => generateCardHTML(card.name, card.id, card.email,card.additionalData)).join('')}
//                     </div>
//                   </main>
//               </body>
//               </html>
//             `;
//         };
        
//         module.exports = {
//             generateHTML
//         };