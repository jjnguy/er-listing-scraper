import * as fs from 'fs'
import fetch from 'node-fetch'

let imgUrlTemplate = "https://www.edinarealty.com/listing-images/listing/RMLS/TODOimage{{n}}.jpg"
let imgCount = -1; // TODO

for (let i = 1; i <= imgCount; i++) {
  await download(i);
}

async function download(i) {
  var resp = await fetch(imgUrlTemplate.replace("{{n}}", i));
  var buffer = await resp.buffer();
  fs.writeFile(`./image-${i}.jpg`, buffer, () =>
    console.log('finished downloading!'));
}