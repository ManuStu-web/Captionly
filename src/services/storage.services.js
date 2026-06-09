const ImageKit = require("@imagekit/nodejs");

const imageKit = new ImageKit({
    privateKey:"private_FLJEq2E6F7V+QbRK4Ta5SY3C+kw="
})

async function uploadFile(buffer){
    const result = await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
}

module.exports = uploadFile;