const fs = require('fs')
const { writeFile } = require('fs/promises')
const PastebinAPI = require("pastebin-js"),
  pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");
module.exports = {
  async MakeSession(session_id, authFile) {
    return new Promise((resolve, reject) => {
      code = session_id.replace(/_WHATSKRIZAI_/g, "");
      code = Buffer.from(code, "base64").toString("utf-8");
      pastebin
        .getPaste(code)
        .then(async function(data) {
          if (!fs.existsSync(authFile)) {
            await writeFile(authFile, data);
            resolve(true)
          }
        })
        .fail(function(err) {
          reject(err)
          console.log(err);
        });
    })


  },
};
