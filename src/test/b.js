// extract-js-css

// import fs from 'fs'

var fs = require('fs')

// import csscomb from 'csscomb'

// var csscomb = require('csscomb')

// var comb = new csscomb('zen');

// console.log(comb)



// 删除文件

const deleteFile = (path)=>{

    return new Promise(resolve => {

        fs.unlink(path, (err) => {

            if (err) {

                console.log(err)

                return

            }

            console.log(`已成功删除 ${path}文件`);

            resolve()

        });

    })

}



// 删除文件夹

const deleteDir = async (path)=>{

    let _files = await new Promise (resolve => {

        fs.readdir(path, (err,files) => {

            if (err) {

                console.log(err)

            };

            console.log(`已成功读取 ${path} 文件夹`);

            resolve(files)

        })

    })



    if(_files && _files.length) {

        for(let i =0;i<_files.length;i++) {

            // console.log(_files[i],'innnnnn')

            await deleteFile('./test/'+ _files[i])

        }

    }

    // console.log('delete hou')



    await new Promise(resolve => {

        fs.rmdir(path, (err) => {

            if (err) {

                console.log(err)

            };

            console.log(`已成功删除空 ${path}文件夹`);

            resolve()

        })

    });

}

const emptyDir = (path) => {

    return new Promise(resolve => {

        fs.rmdir(path, (err) => {

            if (err) {

                console.log(err)

            };

            console.log(`已成功删除空 ${path}文件夹`);

            resolve()

        })

    })

}

// 新建文件夹

/**

 *

 */

const mkdirTest = ()=>{

    return new Promise(resolve => {

        fs.mkdir('./test', { recursive: true }, (err, data)=>{

            if (err) {

                console.log(err)

            };

            console.log('新建文件夹成功')

            resolve()

        })

    })

}



// 读取html 内容

/**

 *

 */

const readHtml = ()=>{

    return new Promise(resolve => {

        fs.readFile('./b.html', 'utf-8', (err, data)=>{

            if(err) {

                throw Error(err)

            }

            console.log('b.html 读取成功！--NO1')

            resolve(data)

        })

    })

}



// 写入css 和js

/**

 * 向文件中追加内容

 * @param {是文件名字} path

 * @param {写入文件的内容} data

 * @param {文件类型} type

 * @author erlinger

 * @time

 */

const appendFile = (path, data, type) => {

    return new Promise(resolve => {

        fs.appendFile(path, data, (err) => {

            if (err) {

                console.log(err)

            };

            console.log(`${type}数据已追加到文件`);

            resolve()

        });

    })

}

// 写一个html

const writeHtml = (path, data) => {

    return new Promise(resolve => {

        fs.writeFile(path, data, (err) =>{

            if(err) {

                console.log('err', err)

                return

            }

            console.log(`${path} 写入成功，功能结束!`);

            resolve() // 必须resolve 。不然 promise 就到此为止，调用该方法后面的代码将不执行

        })

    })

}



// 插件 方法入口

(async ()=>{

    console.log('==========================game-start=============================');

    await deleteDir('./test');

    console.log('我应该是等---删除文件夹后---才出现')



    await mkdirTest();

    console.log('我应该是在---文件夹新建成功---后出现！');



    let cssReg = /<style [\s|\S]*?>[\s|\S]*?<\/style>/ig;

    let jsReg = /<script [\s|\S]*?>[\s|\S]*?<\/script>/ig;

    // let allStyleReg = /<\/style>[\s|\S]*?<style>/ig;
    //
    // let allScriptReg = /<\/script>[\s|\S]*?<script>/ig;

    let cssLink = '<link rel="stylesheet" href="./test.css" rel="external nofollow" >';

    let jsrc = '<script src="./test.js"></script>';

    let styleCollection, scriptColletion;

    let cssContent = '', jsContent = '', htmlContentStr = '';



    let originContent = await readHtml();

    styleCollection = originContent.match(cssReg);

    scriptColletion = originContent.match(jsReg);



    // 处理 css

    for (let i =0;i<styleCollection.length;i++) {

        cssContent += JSON.stringify(styleCollection[i]);

    }



    cssContent = cssContent.replace(/<style[\s|\S]*?>/g,'').replace(/<\/style>/g, '').replace(/("")/g,'')



    for (let i =0;i<scriptColletion.length;i++) {

        jsContent += JSON.stringify(scriptColletion[i]);

    }



    jsContent = jsContent.replace(/<script [\s|\S]*?>/g,'').replace(/<\/script>/g, '')

        .replace(/<\/script>"*<script [\s|\S]*?>/g, '').replace(/("")/g,'')



    await appendFile('./test/test.css', JSON.parse(cssContent), 'css');

    console.log('我应该是在---css写入成功---后出现！');



    await appendFile('./test/test.js', JSON.parse(jsContent), 'js');

    console.log('我应该是在---js写入成功---后出现！');



    htmlContentStr = originContent

        .replace(cssReg, cssLink)

        .replace(jsReg, jsrc);

    console.log('copyTest.html 文本已经格式化，准备写入');

    await writeHtml('./test/copyTest.html', htmlContentStr);



    console.log('==========================game-over=============================');

})()