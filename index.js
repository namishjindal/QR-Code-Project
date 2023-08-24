import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([{
    message: "Type URL which you want to make QR Code of: ",
    name: "URL"
}])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    var qrrr = qr.image(url);   // By default it is PNG
    qrrr.pipe(fs.createWriteStream('url_qr.png'));
    fs.writeFile("text_url.txt",url,(err)=>{
        if (err) throw err;
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

