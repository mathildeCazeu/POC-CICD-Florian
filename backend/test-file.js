const { exec } = require('child_process');
const file = process.argv[2];

if (!file) {
  console.error('Veuillez spécifier un fichier de test.');
  process.exit(1);
}

exec(`jest ${file}.test.js --setupFiles dotenv/config`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr : ${stderr}`);
    return;
  }
  console.log(stdout);
});