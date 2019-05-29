import express from 'express';
import { exec } from 'child_process';
import AdmZip from 'adm-zip';
import stream from 'stream';
import md5 from 'md5';
import isUrl from 'is-url';

const router = express.Router();

const downloadWebsite = (url, hashPath) =>
  new Promise((resolve, reject) => {
    const path = `compressed/${hashPath}/`;
    exec(`wget -k -p -Q10M -e robots=off ${url} -P ${path}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      }

      resolve(path);
    });
  });

const compress = (sourcePath) =>
  new Promise((resolve, reject) => {
    try {
      const zip = new AdmZip();
      zip.addLocalFolder(sourcePath);
      return zip.toBuffer((res) => resolve(res));
    } catch (e) {
      reject(e);
    }
  })
;

const getRandomHash = () => md5((new Date()).getMilliseconds() * Math.random());

router.post('/copy', async (req, res, next) => {
  try {
    // 1 check url +
    // 2 check that site is avaliable
    // 2 check site size ?
    // 3 download
    // 4 compress as buffer
    // results

    const url = req.body.url;

    if (!isUrl(url)) {
      res.status(400);
      res.json({
        message: 'Incorrect url',
      });
      next();
    }

    const hashPath = getRandomHash();
    const path = await downloadWebsite(url, hashPath);
    const Buffer = await compress(path);
    const readStream = new stream.PassThrough();
    readStream.end(Buffer);
    res.set(`Content-disposition', 'attachment; filename=${url}.zip`);
    res.set('Content-Type', 'application/zip');
    readStream.pipe(res);
  } catch (e) {
    res.status(400);
    res.json({
      message: 'Не удается скопировать сайт',
      error: e
    });
    next();
  }
});

export default router;
