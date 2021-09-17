const legacyCommands = [
    {
        name: "cuddle",
        description: "Cuddle someone",
        embed_text: "%sender is cuddling %receiver",
        images_urls: [
            "https://media1.tenor.com/images/c2e8c095f01a2c5a4ab20aa79d370876/tenor.gif",
            "https://media1.tenor.com/images/a020caa66045de6bf768d8ad6f07ce36/tenor.gif",
            "https://media1.tenor.com/images/750468294054aa83989a924801437db4/tenor.gif",
            "https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif",
            "https://media1.tenor.com/images/f65bd4bb3441b9d647d86b04eee6542e/tenor.gif",
            "https://media1.tenor.com/images/cb2d293a76ebfb4baebc717807177c98/tenor.gif",
            "https://media1.tenor.com/images/c1461ba849fd9cff5b346f2433f8e8c1/tenor.gif",
            "https://media1.tenor.com/images/21942e559915eae43d964c19d170e647/tenor.gif",
            "https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif",
            "https://media1.tenor.com/images/94e6a5bca46ddbf4295a858add086224/tenor.gif",
            "https://media1.tenor.com/images/9af57b60dca6860724a0ff6c1689c246/tenor.gif",
            "https://media1.tenor.com/images/a2b938d651a8f6b89ed4c02f9f8c13ed/tenor.gif",
            "https://media1.tenor.com/images/4179058caa9eef3e7c6b21b8888b9cc9/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "pat",
        description: "Pat someone",
        embed_text: "%sender is patting %receiver",
        images_urls: [
            "https://media1.tenor.com/images/5ad20ac44cdaa247eb8cc4c3fce559c7/tenor.gif",
            "https://media1.tenor.com/images/0d2fb6ad9a6d71c3a018c0b37ffca50b/tenor.gif",
            "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif",
            "https://media1.tenor.com/images/90712ed3a99db973ec92383a3c6a8767/tenor.gif",
            "https://media1.tenor.com/images/5466adf348239fba04c838639525c28a/tenor.gif",
            "https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif",
            "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif",
            "https://media1.tenor.com/images/0a35a0cc82d3b613086e0f420a94c2ad/tenor.gif",
            "https://media1.tenor.com/images/0c4f64f8a242d541fee42ebb5edaa0c7/tenor.gif",
            "https://media1.tenor.com/images/66bf1ff7b81aba1fabb89c92be2909ba/tenor.gif",
            "https://media1.tenor.com/images/78421fd64eba6902f18a0574cce1b5f5/tenor.gif",
            "https://media1.tenor.com/images/f330c520a8dfa461130a799faca13c7e/tenor.gif",
            "https://media1.tenor.com/images/7b229789792923664bc11b92fcef3561/tenor.gif",
            "https://media1.tenor.com/images/65cc5670b8c44364c0f4a37509296e61/tenor.gif",
            "https://media1.tenor.com/images/d7b64952781815e1f4bf9d158848ba61/tenor.gif",
            "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif",
            "https://media1.tenor.com/images/63537cc1bc3710be080fc39e8234fd3c/tenor.gif",
            "https://media1.tenor.com/images/d12d447301a5e93c9d1c42fa55fd020b/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "hug",
        description: "Hug someone",
        embed_text: "%sender gave %receiver a hug",
        images_urls: [
            "https://media1.tenor.com/images/97353f675001cac44226df1811cda95c/tenor.gif",
            "https://media1.tenor.com/images/a34985a665a2674f8e2481025700222d/tenor.gif",
            "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif",
            "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif",
            "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif",
            "https://media1.tenor.com/images/3ce31b15c2326831a8de9f0b693763ff/tenor.gif",
            "https://media1.tenor.com/images/44b4b9d5e6b4d806b6bcde2fd28a75ff/tenor.gif",
            "https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif",
            "https://media1.tenor.com/images/42d1297ffbdf68673ed77edc9448eeca/tenor.gif",
            "https://media1.tenor.com/images/1b27c69585088b0e99e7007029401852/tenor.gif",
            "https://media1.tenor.com/images/ff0371fb884a0f35d573b21f1d830d51/tenor.gif",
            "https://media1.tenor.com/images/6cccacf0caa037e1947569ce4d717adf/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "comfort",
        description: "Comfort someone",
        embed_text: "%sender is comforting %receiver",
        images_urls: [
            "https://media1.tenor.com/images/136da5b76861532c8e048347ce04f408/tenor.gif",
            "https://media1.tenor.com/images/c3c2d17b3f2e9c469586f01629163fd1/tenor.gif",
            "https://media1.tenor.com/images/aaba26e54153c58179593f1475efd0dc/tenor.gif",
            "https://media1.tenor.com/images/7d6a56988dc7e6152ca578b7a1f24be9/tenor.gif",
            "https://media1.tenor.com/images/af76e9a0652575b414251b6490509a36/tenor.gif",
            "https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "kiss",
        description: "Kiss someone",
        embed_text: "%sender gave a kiss to %receiver",
        images_urls: [
            "https://media1.tenor.com/images/69ace17be06147ed8db45af81d1d5485/tenor.gif",
            "https://media1.tenor.com/images/2165e6adfd32a9390689b892dd165766/tenor.gif",
            "https://media1.tenor.com/images/0939ae60d616a4c7265da52e4abd0089/tenor.gif",
            "https://media1.tenor.com/images/c1d53795e7365a607139ca65c8c9aeba/tenor.gif",
            "https://media1.tenor.com/images/39a148ac112e0153793bd2410a4e1601/tenor.gif",
            "https://media1.tenor.com/images/e8279efa48706a643238272753531abd/tenor.gif",
            "https://media1.tenor.com/images/068210253137d60698c2c214dc146e64/tenor.gif",
            "https://media1.tenor.com/images/01a6aded6b6de51278e80a2f4ceda79a/tenor.gif",
            "https://media1.tenor.com/images/cf05117c1d3dbe1750ffa4da648e1113/tenor.gif",
            "https://media1.tenor.com/images/8d22c74d2c755dcf3dd952f940c264aa/tenor.gif",
            "https://media1.tenor.com/images/0e730944f918d06f633762e0b18fea4c/tenor.gif",
            "https://media1.tenor.com/images/fa99cab500e304d3dfa1c9a28ed51a5e/tenor.gif",
            "https://media1.tenor.com/images/c42df790ea42b8aad0909f8b3adb37fd/tenor.gif",
            "https://media1.tenor.com/images/69ace17be06147ed8db45af81d1d5485/tenor.gif",
            "https://media1.tenor.com/images/0ba86bd2cfc067be6da988c010d6b1e9/tenor.gif",
            "https://media1.tenor.com/images/ca4ce080922431468d50674b682724f9/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "slap",
        description: "Slap someone",
        embed_text: "%sender slapped %receiver",
        images_urls: [
            "https://media1.tenor.com/images/d4c399fe29375608f6b1a16e6098f593/tenor.gif",
            "https://media1.tenor.com/images/72c7403c95f4f888a4931a74dfaec17a/tenor.gif",
            "https://media1.tenor.com/images/afcb3e72257b6710cc618cafb4f498dd/tenor.gif",
            "https://media1.tenor.com/images/0a3e109296e16977a61ed28c1e5bf7bf/tenor.gif",
            "https://media1.tenor.com/images/fdc1a977e6880e1cd635a4e416305cd2/tenor.gif",
            "https://media1.tenor.com/images/1530be51889535b9819e5f1c3f20916d/tenor.gif",
            "https://media1.tenor.com/images/e4c03c3883720518176db21e9687a188/tenor.gif",
            "https://media1.tenor.com/images/5bc60fa342da31f5aec13faf54813cc1/tenor.gif",
            "https://media1.tenor.com/images/0892a52155ac70d401126ede4d46ed5e/tenor.gif",
            "https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif",
            "https://media1.tenor.com/images/4a6b15b8d111255c77da57c735c79b44/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "handhold",
        description: "Hold someone's hand",
        embed_text: "%sender is holding %receiver's hand",
        images_urls: [
            "https://media1.tenor.com/images/9d921ae2f69420beb68dcf083d7e0f43/tenor.gif",
            "https://media1.tenor.com/images/6f083b2eb7027a9b1876814ab18326f6/tenor.gif",
            "https://media1.tenor.com/images/47d0eb6ff3eedde5c780ef1a379004da/tenor.gif",
            "https://media1.tenor.com/images/ce7c75d2ad983db54d483eb8f4517d8d/tenor.gif",
            "https://media1.tenor.com/images/d3c5561f3850d35ec5535dac4de2aa59/tenor.gif",
            "https://media1.tenor.com/images/0e6f524f25fbc80c666d6541822e2522/tenor.gif",
            "https://media1.tenor.com/images/aa76186dc654f6938bd2e75dc0aa2a0b/tenor.gif",
            "https://media1.tenor.com/images/6dcc4b8b1b18a852bc71fcce08498487/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "bonk",
        description: "Bonk someone",
        embed_text: "%sender bonked %receiver",
        images_urls: [
            "https://media1.tenor.com/images/6493bee2be7ae168a5ef7a68cf751868/tenor.gif",
            "https://media1.tenor.com/images/4dee992174206c66cb208bee31174b8d/tenor.gif",
            "https://media1.tenor.com/images/0f145914d9e66a19829d7145daf9abcc/tenor.gif",
            "https://media1.tenor.com/images/4d6dcfd5d1a0e876a534ee8bf2411e43/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "blush",
        description: "Make a blushing reaction",
        embed_text: "%sender is blushing because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif",
            "https://media1.tenor.com/images/9516a72bed6f4b80a22637cf93011b9c/tenor.gif",
            "https://media1.tenor.com/images/274fc34d3add3ce4cbb5716cb4f94f4f/tenor.gif",
            "https://media1.tenor.com/images/1796f5f2469c4777cadf2a1ab57c6c0d/tenor.gif",
            "https://media1.tenor.com/images/c118281cf06513a78e2fdc731db48c1b/tenor.gif",
            "https://media1.tenor.com/images/82b0f0a24e1621510b1216317edd4ba0/tenor.gif",
            "https://media1.tenor.com/images/ad0fbaa8dd27994a8fbab2ab86122c7f/tenor.gif",
            "https://media1.tenor.com/images/d06d8c5273038c41f786bc75c53af470/tenor.gif",
            "https://media1.tenor.com/images/8f76f034ccc458bd09675c0380f59cb7/tenor.gif",
            "https://media1.tenor.com/images/71015cf10d2bc6ddc6c2dd0d7b294277/tenor.gif",
            "https://media1.tenor.com/images/ac2f1f727d4d96a6a7c4fb5ae5a41cf0/tenor.gif",
            "https://media1.tenor.com/images/9af8d8afab3b509a97f2440562845682/tenor.gif",
            "https://media1.tenor.com/images/c0a9bb579552da7fbf71d105b9676f3d/tenor.gif",
            "https://media1.tenor.com/images/f62cae32b30d364bf0a8a1e7432c2ddf/tenor.gif",
            "https://media1.tenor.com/images/95d627e71466ebfb2a168a041c96f122/tenor.gif",
            "https://media1.tenor.com/images/8fbb6ba53ea92b8fafa071ab4c4c9e31/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "spank",
        description: "Spank someone",
        embed_text: "%sender spanked %receiver",
        images_urls: [
            "https://media1.tenor.com/images/6b3dda2e995a02ad50ae788a16bfbd64/tenor.gif",
            "https://media1.tenor.com/images/86b5a47d495c0e8c5c3a085641a91aa4/tenor.gif",
            "https://media1.tenor.com/images/0d202a5b98b413a88a4611feae8cd855/tenor.gif",
            "https://media1.tenor.com/images/96de572b2a61a3c34199523530dacd70/tenor.gif",
            "https://media1.tenor.com/images/d0f32f61c2964999b344c6846b30e1d6/tenor.gif",
            "https://media1.tenor.com/images/1ffbabd05e0be468f035680111da8325/tenor.gif",
            "https://media1.tenor.com/images/2eb222b142f24be14ea2da5c84a92b08/tenor.gif",
            "https://media1.tenor.com/images/c9b1fa86a103a3bf878ab1741d0bfdfe/tenor.gif",
            "https://media1.tenor.com/images/ce3cf43d579c44806cb775890167b2a8/tenor.gif",
            "https://media1.tenor.com/images/19e30607441c8a08330d91329fd18e69/tenor.gif",
            "https://media1.tenor.com/images/6dee783a2cad3f449933cb2c3c920949/tenor.gif",
            "https://media1.tenor.com/images/49cc731f0d76650a83351618b495805b/tenor.gif",
            "https://media1.tenor.com/images/c159cd1d7e7424cf9fd6fbdb09919146/tenor.gif"
        ],
        nsfw: true
    },
    {
        name: "tease",
        description: "Tease someone",
        embed_text: "%sender is teasing %receiver",
        images_urls: [
            "https://media1.tenor.com/images/56cd3c8edf20f67c418c05067bef8218/tenor.gif",
            "https://media1.tenor.com/images/0aa65b3bd11a2912220fdf12d1e0be46/tenor.gif",
            "https://media1.tenor.com/images/14567cd500a880d9339c6fc7bb15de09/tenor.gif",
            "https://media1.tenor.com/images/708710074e3339617e1b90ffb99683dd/tenor.gif",
            "https://media1.tenor.com/images/5ea90744fec7e590287d5761848e8d55/tenor.gif",
            "https://media1.tenor.com/images/b43df533b92a60a6302a3fceb6ea532c/tenor.gif",
            "https://media1.tenor.com/images/30f7b23b90c82ec66c6e8c9707578605/tenor.gif",
            "https://media1.tenor.com/images/c5f55e96849d1971b1ed5f4be33c7e8c/tenor.gif",
            "https://media1.tenor.com/images/e8cd0add198578738065fce4d9c7bd13/tenor.gif"
        ],
        nsfw: true
    },
    {
        name: "poke",
        description: "Poke someone",
        embed_text: "%sender poked %receiver",
        images_urls: [
            "https://media1.tenor.com/images/0da232de2ee45e1464bf1d5916869a39/tenor.gif",
            "https://media1.tenor.com/images/01b264dc057eff2d0ee6869e9ed514c1/tenor.gif",
            "https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif",
            "https://media1.tenor.com/images/963e4620c8b6345f09d7d22ef1c91420/tenor.gif",
            "https://media1.tenor.com/images/dbde71d42e747010b980422b88e77f9b/tenor.gif",
            "https://media1.tenor.com/images/1b030d975ca0a44b63b53a5ec81696ed/tenor.gif",
            "https://media1.tenor.com/images/a0deb2094ececc2ab39c75337fcfd1c5/tenor.gif",
            "https://media1.tenor.com/images/d9b55173939b863da320ddba91e13b91/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "highfive",
        description: "High five someone",
        embed_text: "%sender gave a high five to %receiver",
        images_urls: [
            "https://media1.tenor.com/images/03f755704208a18ef6f1e1b36529961e/tenor.gif",
            "https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif",
            "https://media1.tenor.com/images/1b1597b6b5a36a1d3ac10047c030a22c/tenor.gif",
            "https://media1.tenor.com/images/b714d7680f8b49d69b07bc2f1e052e72/tenor.gif",
            "https://media1.tenor.com/images/ce85a2843f52309b85515f56a0a49d06/tenor.gif",
            "https://media1.tenor.com/images/564aac614e91983dcbef052742d2bb3a/tenor.gif",
            "https://media1.tenor.com/images/e553e6d366ab4db4590bacc2ac9a4910/tenor.gif",
            "https://media1.tenor.com/images/93d4cf9becbd095b6f41109d21e126de/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "panic",
        description: "Make a panic reaction",
        embed_text: "%sender is panicking because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/9630355883511eebbd4e09c28643aeb7/tenor.gif",
            "https://media1.tenor.com/images/955a2f12d221d282a1903b74b7da42c4/tenor.gif",
            "https://media1.tenor.com/images/06dbb1f64d16a665b6d4b608f176aa7b/tenor.gif",
            "https://media1.tenor.com/images/e139871a7201f1b3b2a6c871d85e4f74/tenor.gif",
            "https://media1.tenor.com/images/e965c589bfa666bb50eee3578532eeb8/tenor.gif",
            "https://media1.tenor.com/images/10bbf90a30f5e8630340d8cf77c8f5c9/tenor.gif",
            "https://media1.tenor.com/images/8fc3274f40dc68498ed945561bed4964/tenor.gif",
            "https://media1.tenor.com/images/f0f314f819347c185dbf8a8c369ffdfd/tenor.gif",
            "https://media1.tenor.com/images/596e0cfb869bbf63bfa0019514e7c8b6/tenor.gif",
            "https://media1.tenor.com/images/2fb2956789cb3444bccad6eddfeedeef/tenor.gif",
            "https://media1.tenor.com/images/cb9b144cf60736e287037160ce2aecd4/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "smirk",
        description: "Smirk at someone",
        embed_text: "%sender smirks at %receiver",
        images_urls: [
            "https://media1.tenor.com/images/c63af10b76369b053f5bd89994e8d439/tenor.gif",
            "https://media1.tenor.com/images/0c3c1c1394c9ab4f455873a4336aa3e6/tenor.gif",
            "https://media1.tenor.com/images/009350df6c674e28d572a13f9b4ffc96/tenor.gif",
            "https://media1.tenor.com/images/d55fcc70b9a4121ea05f2252a2d5bcdd/tenor.gif",
            "https://media1.tenor.com/images/3af6c580ae9f8957f1c1943c41d66050/tenor.gif",
            "https://media1.tenor.com/images/3b850bb0dbbdbe4baaa7e539834aa6c8/tenor.gif",
            "https://media1.tenor.com/images/6fcfbab36f6d2c578abd6228d1e74231/tenor.gif",
            "https://media1.tenor.com/images/d83a46f84236a6ff40923c27051f84cf/tenor.gif",
            "https://media1.tenor.com/images/52ea7d449a5402030a3432fd3c94aa99/tenor.gif",
            "https://media1.tenor.com/images/d6d47797a3d40e00cf4ad19b2e84e1e8/tenor.gif",
            "https://media1.tenor.com/images/f2e0111cdbbe40da4d29d85f5edd6526/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "scared",
        description: "Make a scared reaction",
        embed_text: "%sender is scared by %receiver",
        images_urls: [
            "https://media1.tenor.com/images/33a05b29ac2b6d9be9c8f23ceab06f46/tenor.gif",
            "https://media1.tenor.com/images/3565384f7d317d10863b140159426d86/tenor.gif",
            "https://media1.tenor.com/images/ad92a2c585d927fb0b7efe3df31b24ce/tenor.gif",
            "https://media1.tenor.com/images/e76fd71de8b2995e5a863e372b7b9685/tenor.gif",
            "https://media1.tenor.com/images/61142da9811736aa4b78c9d9b001552c/tenor.gif",
            "https://media1.tenor.com/images/5d83670f205d9c84099e7706c19a776a/tenor.gif",
            "https://media1.tenor.com/images/b98a6d0461dfe829bfd42fd9a5d9b98c/tenor.gif",
            "https://media1.tenor.com/images/999bb80969f031c5bddee2fd6961ab82/tenor.gif",
            "https://media1.tenor.com/images/85d7d7b1c14d3a373bbe5e89d15c799a/tenor.gif",
            "https://media1.tenor.com/images/2ec2e2e4aaf7a0d30c765fea274b5500/tenor.gif",
            "https://media1.tenor.com/images/3d1e90964da8453e060865f8f4fb729a/tenor.gif",
            "https://media1.tenor.com/images/35b9cfb177c5c9c9699083e05ac21568/tenor.gif",
            "https://media1.tenor.com/images/b32051b147b5975eecf47b6c5887c4f5/tenor.gif",
            "https://media1.tenor.com/images/cd415a3aab4155a1b1d1046ab51ef397/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "sad",
        description: "Make a sad reaction",
        embed_text: "%sender is sad because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/6ae4a0ce2705f31738917d0ad56f9606/tenor.gif",
            "https://media1.tenor.com/images/a892784674818166e8a83c74e5a54a49/tenor.gif",
            "https://media1.tenor.com/images/3d4b4dee9ced06f02719221e59015b52/tenor.gif",
            "https://media1.tenor.com/images/36125dfe11c0c67458396923bf6d9216/tenor.gif",
            "https://media1.tenor.com/images/9cbeebd1e7cc941e6a3f468bae756547/tenor.gif",
            "https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif",
            "https://media1.tenor.com/images/107d4cbd0aed89cb944ece09eb4c3df4/tenor.gif",
            "https://media1.tenor.com/images/56bc8ab59926c8eb07e32f5662e58c39/tenor.gif",
            "https://media1.tenor.com/images/8f145768e9e5d5d47a8ed191d6e0f085/tenor.gif",
            "https://media1.tenor.com/images/f6d23137e85b97190e7ca02d4c24d15a/tenor.gif",
            "https://media1.tenor.com/images/94d33550459d4736e9551eae700029c6/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "smile",
        description: "Smile at someone",
        embed_text: "%sender is smiling at %receiver",
        images_urls: [
            "https://media1.tenor.com/images/c8d13a4636c548e962d8d4fdb0eaa169/tenor.gif",
            "https://media1.tenor.com/images/cc66ae959cb51c118c782325fcdc4f3f/tenor.gif",
            "https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif",
            "https://media1.tenor.com/images/64e0528a06b474ffb14525c437da2544/tenor.gif",
            "https://media1.tenor.com/images/325b3ba6a2beabe21c79b54c6de4e2c7/tenor.gif",
            "https://media1.tenor.com/images/82b39c323ca376e9bb5844a54973fc42/tenor.gif",
            "https://media1.tenor.com/images/6b353c18a4628d3d2346d031591296fa/tenor.gif",
            "https://media1.tenor.com/images/9411ce1ef75d43771bf0f305e7eb6487/tenor.gif",
            "https://media1.tenor.com/images/ea548b6de4a49f3875d7f733a5676a94/tenor.gif",
            "https://media1.tenor.com/images/a784d25bc90f5e81ac6615f2b165d2e6/tenor.gif",
            "https://media1.tenor.com/images/148a2f4fbf904d6008ca9c7d71806859/tenor.gif",
            "https://media1.tenor.com/images/d5484f103deec4337249bd1654ef4c43/tenor.gif",
            "https://media1.tenor.com/images/bb0cbe662c9c7fb3bd59e75a7214475d/tenor.gif",
            "https://media1.tenor.com/images/8a549e6d7066bbc0aeb63d7c69a42c27/tenor.gif",
            "https://media1.tenor.com/images/97c12cad7abcf492887cf8fb664f58b2/tenor.gif",
            "https://media1.tenor.com/images/6dce6da7bfbe8f73d4ad2f8473017de8/tenor.gif",
            "https://media1.tenor.com/images/b1a409cd573d94be3bdac0c7759b0414/tenor.gif",
            "https://media1.tenor.com/images/60c1fd8c38f00c03ca4d2aba31d2785b/tenor.gif",
            "https://media1.tenor.com/images/e9808bd93cc8961ef81e6fa8ae560046/tenor.gif",
            "https://media1.tenor.com/images/a2a294aae7b98b1a6ddf2e0070c1e360/tenor.gif",
            "https://media1.tenor.com/images/df5a96e0aee90e1fe244226d9a971ba5/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "cry",
        description: "Make a crying reaction",
        embed_text: "%sender is crying because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif",
            "https://media1.tenor.com/images/e69ebde3631408c200777ebe10f84367/tenor.gif",
            "https://media1.tenor.com/images/98466bf4ae57b70548f19863ca7ea2b4/tenor.gif",
            "https://media1.tenor.com/images/f7fde4b118501c8fa5cb1a5dd171beab/tenor.gif",
            "https://media1.tenor.com/images/2e46dd93246532cda451359a4aeb68e7/tenor.gif",
            "https://media1.tenor.com/images/d1529619add194c4275053d852a0bb79/tenor.gif",
            "https://media1.tenor.com/images/5b2bbfcbc1724a0bdc1b48dcf89274d6/tenor.gif",
            "https://media1.tenor.com/images/d5e42f16d955e8178997f92553e5460e/tenor.gif",
            "https://media1.tenor.com/images/0f7b43b390702ac6b3280a8999f38b2d/tenor.gif",
            "https://media1.tenor.com/images/3caea37ad3d608fc57231050f1d52a4c/tenor.gif",
            "https://media1.tenor.com/images/04b0feb0e2e6861d5e57c1cb2cdb4dd9/tenor.gif",
            "https://media1.tenor.com/images/40bb68680f5a12431e1d64e46c685770/tenor.gif",
            "https://media1.tenor.com/images/47f3352315dc4eae44cb7eb966a1ff9d/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "confused",
        description: "Make a confused reaction",
        embed_text: "%sender is confused because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/eacde875b7c910facce71e92f4ede7b5/tenor.gif",
            "https://media1.tenor.com/images/88d015a1213cd2f65a469db5ca0c51e7/tenor.gif",
            "https://media1.tenor.com/images/2e9b1c1a508cb7d5b7e6cd0600e1c1c2/tenor.gif",
            "https://media1.tenor.com/images/5e5507a6ec490f07864b86aff7e32852/tenor.gif",
            "https://media1.tenor.com/images/c28cf58b51b74120d2f79f729be6b5de/tenor.gif",
            "https://media1.tenor.com/images/676287309b99573cbbcaaf633cd9e1c8/tenor.gif",
            "https://media1.tenor.com/images/db761c3b514b85e0bae38d88383714c8/tenor.gif",
            "https://media1.tenor.com/images/aea2b3b7a199c1d5de88f71e7f5a3a95/tenor.gif",
            "https://media1.tenor.com/images/649c1a33b3950ed26b0b38c6f75bb97b/tenor.gif",
            "https://media1.tenor.com/images/ea8a415b5533d169f336859c148cca71/tenor.gif",
            "https://media1.tenor.com/images/89d55748e5ae70caa2828b3768112c09/tenor.gif",
            "https://media1.tenor.com/images/84e8c1ff61ac0e86697639aeb24cb4b4/tenor.gif",
            "https://media1.tenor.com/images/b970a5b9301e9f4895a4739999ed24a6/tenor.gif",
            "https://media1.tenor.com/images/e057e7ac06b7e6c1735d9244a1c9d5c0/tenor.gif"
        ],
        nsfw: false
    },
    {
        name: "laugh",
        description: "Make a laughing reaction",
        embed_text: "%sender is laughing because of %receiver",
        images_urls: [
            "https://media1.tenor.com/images/7e2bfe3c042e226a0f371f669fc55e47/tenor.gif",
            "https://media1.tenor.com/images/ad4804e880c2edcecbb79217b479610a/tenor.gif",
            "https://media1.tenor.com/images/182f3e1d1fc398d0ea99c9433a4f0c65/tenor.gif",
            "https://media1.tenor.com/images/46f0022ac9c2cfdd0766f89b5b19a4f2/tenor.gif",
            "https://media1.tenor.com/images/26df2182fc943676dc6cc51371efc04b/tenor.gif",
            "https://media1.tenor.com/images/7f2ff46ef02b847848d13dca529a26a7/tenor.gif",
            "https://media1.tenor.com/images/b63941fc92c0c4f741596b709883c0bf/tenor.gif",
            "https://media1.tenor.com/images/44ea3c92369e173dcfe3da0ebe954b3c/tenor.gif",
            "https://media1.tenor.com/images/faebec11a5be81a95f69d7b38f4b8171/tenor.gif",
            "https://media1.tenor.com/images/09d453fdea8349671b36c06746afd080/tenor.gif",
            "https://media1.tenor.com/images/de9deca0d39e158c3d13d42f511d8013/tenor.gif",
            "https://media1.tenor.com/images/f103781478777f110009ac00e09ba895/tenor.gif",
            "https://media1.tenor.com/images/583fe983d64fee308f348fbde862eff3/tenor.gif",
            "https://media1.tenor.com/images/0af2ae106f8651eaef8c6e7e3266d502/tenor.gif",
            "https://media1.tenor.com/images/75977c5a1c1a26f4ba7d00a43165218e/tenor.gif",
            "https://media1.tenor.com/images/d8ed4af00a054660fe7ff03041f5332a/tenor.gif"
        ],
        nsfw: false
    }
]

export {legacyCommands}