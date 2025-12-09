'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/index": "1873d131e2e4087e62c0a92fd5afa610",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "3ec866a237bc66092ab9e01a675424c0",
".git/objects/50/835394bab7877a44f51c13637f7b2865e970a6": "86ec127a48e1bae935bd88c6c772d176",
".git/objects/be/26f52280aa60b266d4991b24c8e87d90fdff4c": "4c389bcaae7d0af7f85d836653a93396",
".git/objects/be/3943c96d8eed92e2a329ce8327616d5e7dc440": "5e185ebece8c07294db47915363eb495",
".git/objects/be/f9b61cebbe1a9e1f76197531bcfdb328e483b2": "4e8f5ff3fb8c9078ba07a727bd697e92",
".git/objects/d9/2e7f13a4004b56ea7423fc4af022b9f3e4234e": "d93f917c94571496e8d0b37eab3a1358",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "d38e6e430018e2c6f08f2bff1d9f1fb2",
".git/objects/38/400c441423875fa45c30a3752afcf79758a6af": "1696fb5acb24c3e341af2262c26fa64f",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "12bea9a234a3f785916c9c14fa15130a",
".git/objects/e6/e59cd25393f1b63f3a3a471486555b055909ad": "928b85b369bed27b8f87535f416c48a9",
".git/objects/29/b103c38e7e8f9f5a6f971de3027fd7afe427d3": "9153644e36d29e2eab7472a988c57e25",
".git/objects/33/78c7cb322db11f70e2ab57ef2522e0e5b178e3": "4ced1d6af5743cb8b48388adf21c25be",
".git/objects/33/cae57bd46c027b1d012bca7a2710cd1c840fc3": "a695a44245bbb8f4a130bdbea3c89a19",
".git/objects/41/dffd916c819ce639f0636e55bb4082214acca3": "4adac89230fd1de121fc45a22edb9258",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "799b117b6d5447c65ea747385360265c",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "1f9f348102d2ede3e0e2dfd1d10f99cb",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "fdbfa61946e4f283fb361c3af030c5d3",
".git/objects/05/bcefe6566703e1adcfc169534f5693bd121363": "1da5b8b4239f3663e3f12f83c91539c5",
".git/objects/05/ae513f30524b1b983f21f432db8e2d6ec6c6da": "c5234a64c47bca5b53d2304fa834a431",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "52722183348bb5596536c1faef858c73",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "131eb29f9c2e892454609edcf3c20f9e",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "f2d898936f84a398f3288a3d29176b6a",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "7f1ceb3657f86b0eff46fd5e62771f5e",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "c302f584874ed9eebd36e7c66903cfb9",
".git/objects/fd/8a2a00df27c19db609f067aaa411a4232c113e": "846ff3556d4b25d0ecba1c2feee9ae78",
".git/objects/19/e00eba89858779f08527875ce830da48cc833c": "d8395c749da8834cee9f8c3831ebc042",
".git/objects/19/fe4a6979a7de6c10d67e05c2db324d125c24ce": "e5542f545b64fc222222c76e66b3bac0",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/e3/773d42e24c8bb3b9070fc9d10d62032787035e": "7c06500250c09f57dbd8ad93173198e7",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/ab/39a10a29baf57d196b72e74df0cc82d7bfaca4": "4cae687d586b5bdde9f59b033bf45422",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/de/1d26f693533e16e7b0f1edf58751c20510ebdb": "55cfcf9170f736e4b75a7364cf7323a6",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "fa2a00d9c6027f7c4074e355b711205d",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "5926c1732220595a448644a809ae9b3c",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "04788a96780a7468a4b6f16f80c9e3b9",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "139b47a9001a920e42033f3d8152fae5",
".git/objects/b3/c176141221dbe2b40d3e36942b15068ba48677": "9001d80c3059ed5df1ffdec4e14ab64a",
".git/objects/b3/0f1c5ba4d46fbcb9ddf84fe5ce4d487559b378": "02b3d9638fa8113c083ef58623854cce",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "66253b19cd251a8eb6ccfe6c17acc72e",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "738a0b036102dd51354664822d32f794",
".git/objects/68/f28c9ca80600eb5f9b9170ef53a1996d202969": "62727d7b44c0166ead9a51de38d62b74",
".git/objects/fe/cf5f5ce4ad9a66a4743a4fc846f1031d116a08": "74400171a2e9e85fb2a780207d8fac30",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "f07bf0722447ce60bc38595c9f569492",
".git/objects/08/5c3aef059848c03a870395b8b7b29e77324dc1": "cb887d4b0397fbdcdcb16c0a6da43b11",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "1d2da655da74e805e0803c3737cd6316",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/a3/39d0833fa40a276926304cfbe7e9511b59a659": "3f9304500c7d6e198de67d58e293170e",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "6fc97489057824bd370582cc8650ce46",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "27145039b94ac3e3a3ef78c7616fce68",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "7784b6d7aad42269e9dd01d93bab58b6",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "6caa06a9f04763fb229ceda15dbfb0ba",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e54d8a59ad0df7c07c61f6f6b1712676",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "e8de149a87cdbffa6fe2e2cdd36fdf68",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "d1a6365155570eebe580290848019863",
".git/objects/80/3145ef757a9bfc9d70a3f5c3900cb348dade33": "717928bcda826bc91fd9142e1ca6fc8d",
".git/objects/5e/f4c2e5e7c2f5eeb695cb4f61d468b6c70f9450": "4cc1a120f247d1c4d431923b40b02d11",
".git/objects/c3/63bfd9865a742366f8b296ac51dd7b63c7691c": "97057e64bcf2bcb7beea8b5f3afc7852",
".git/objects/56/e5aa86b5cc199ed61e7c61880ddb0280eade34": "06175d9cec25b17b9dbe3d150694ddcb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/34/da3a22feaff7add7a1420a7b2521d0b0a7020a": "fd76218a652a5bea90d9bbc093029481",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f55a174ea3f5a02bb89127da077b9b90",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "a107ba66ab4c80d99dff2b4462107f95",
".git/objects/4a/d288424d88089cdb341e656c7fd8aa445cb7ae": "9e2b90a9b4b44c6c2eaea62838fe0b14",
".git/objects/e4/0d49548613f8b10a343ec587a379bb1f6c6a6d": "5b223089b4a593b1186dd21ce53febe4",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "c7c9f7706c9a726ccdc2d92096744e7e",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "94314e745ab91d04eae55fa8b4dfe934",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/ac/3b47926ee56b0efc39cbff3c532918abbf953f": "0c47a658038f8b0adc428711f2764b18",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "31299a304c14aab94382bc5c25340899",
".git/objects/e8/c1a7211ba8622fa9e11d0ac9767357b70fb758": "2bfd48c2f89c1141f51197c2124408d4",
".git/objects/0c/ca92abf5e88188f93515b389cec7e41366a8f9": "2d8ab45081950968e89f030e3590dcdd",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "215b907941dfa1f1b7d1ba6cbb297a4d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "02fab2be45cb99a38b5c5f90f734cc85",
".git/objects/62/6664468b8914efda0addf1322b12b8c0071710": "2aaec719f5aa899fc86ce47d67f469c0",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "209ff51955eb667ad3e6bd0b449a733e",
".git/objects/f0/18a61817f55e78bb92ce8df2dda423ec570a4a": "cebb2c6ec865c167a48081b342b68c89",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "929f46d584b44f24c625e679e1fe33cf",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/31/40b0895ada122f7de1b4225a439beb3d628a11": "03d245b0d86bb7442ab779c079a7d3a8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/0be1a139cd49c38028b3da2749ffa70cd41aab": "8597e5610c7e70bafc3d5c8c669cec3c",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "4d56247947079fcecc736d1649d31e0e",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "dd8e3c05c5377e63bf4312f4ff10276e",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "78670da974f2446152ad96d9ea124f70",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "2432eec97312a8001ac08f646a608a31",
".git/objects/67/5b395e5d0a8dee44c307ec7ceaf18d25c5a6c0": "0861520e8bffe425767d4b7152d584fd",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "811ff1f44467ca13ccdec812add835d7",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "18964ca34fb6b684ef2de4e3691863fb",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "ee03bba8ee0a566a9c495b46d80772ab",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "206dcac9a8a50fd5a0b614c1afdb7b98",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/59/e7353c02359fc103b9bced081308a0ff45a7c3": "da1d85dfd5c45ba08276aa841dd2b72c",
".git/objects/59/124c24b8b81ad975ae0758fcbd50648a6b5e22": "5cde12e48aaf8d32440cc598ae1a47f8",
".git/objects/8c/f10c995780f25aa0c1aeaa73367d0253174fc8": "ef07abafd254c5bc1a7894d009815441",
".git/objects/49/3029ef6aaf64e64590a0e52c5dde22ad3e8eff": "a18482b74a30296cbc0f61af7178513a",
".git/objects/15/958eded8d1ae352d9f3dae5272fb658a7e3ff9": "6e46f899d4bb224021fa9fec02013832",
".git/objects/15/3653e8d67f81b901d28257a65908f3278e058d": "dc2add54a208401eda05c6601aa93e20",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "03f9bc1e5877335f5e34a8d0bdcdfb12",
".git/objects/bd/f234cc7f1b8d6bd1b623d7cb8c1be3f989954e": "4316758ff109adcead7a93943c4754bd",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "e62ccebd270b4fd776004bbe4d5d8eea",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "37caf8b1d8fc8442c0cfae9e57a94855",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "fea0d642c61eb25e743d097e27e3cfb0",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "3ffcf54aa27ac7ee1fcf9a26cc2feeb4",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "ac44a32ef44bb93fcbe954ee3b1d2c96",
".git/objects/89/176ef44e8c7931fa32322d576e7f3f54d225c9": "189d5a6a905c8c9844db1dc189ccb1bc",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "d1077e1d0ed7653210d8437b828610e0",
".git/objects/pack/pack-6fca40f6acb1d0321bd83e9d8cfa748e63c36c28.rev": "f679d74b54ceab4b2ed9f0c43d255ad4",
".git/objects/pack/pack-6fca40f6acb1d0321bd83e9d8cfa748e63c36c28.pack": "d6afafc7cf3f87d293041300ebb86cb8",
".git/objects/pack/pack-6fca40f6acb1d0321bd83e9d8cfa748e63c36c28.idx": "4ad7d8b94cba85dba41d33c98cd48ad1",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "6ec04ec2eaab4c51d196e12cfc82b96a",
".git/objects/cc/fb5d6212bc120deb57fabb3a261299d992eee2": "38066020a10c1e8486e625d6534277a9",
".git/objects/cc/0bd70ff4fc7038f6289cda3d592e251ae8d7e4": "05a4419ea2502813c44b22bf13be1ee4",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "07e81c3cddd0d7ab9ecbc1e383a2ae98",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "46e16d1a1d61c5b22fc4302056df8324",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "9ad579ddfd8f447691d8467d427f4f2f",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "a280a808a8ab63ac1e81595add18e1a1",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "9a392b8216e7e65f34b3f2d3f5dcf603",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "923fef021501d9a9e19d67300a51b36d",
".git/objects/4c/fcd01e672e8eb71cfb232254cdca108cad1d88": "4ceaeb5703f73fec167b38c1270ad83e",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "93a7d6f8f3c5e91aaec8940e02630db5",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "83a6370a053626a5dce2f8641fabe259",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "d6a804be027ef70ebd1314aa467e3cca",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "ba55ee03b5acc25c07655ec58a28a5c9",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3a/0b46511a71b464dac72d693faae6ea0f7e3b2e": "61adfb282547c392de5d338f46667de1",
".git/objects/3a/f14525c0fa1094604ba1f08f95023dad94be40": "6df203fd8b8b25be47a4bc80ec9e2acd",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "3008de8328c3eb2e9fcce80ccb17d69c",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "2fb7c69169b24c3f5eecfe793e6dca2d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "aa248fbf7bb1d394559bfcb1162b8075",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "36f2fbd5c138ebd71804e519801a1ef4",
".git/objects/e2/ab4cb486a971c90a1d38070ebd382dd6c51502": "f0fcbd980bf41876c2792d7be37de457",
".git/objects/5f/e67c7d57b5be179b3a11779ff436e3530c6d8c": "53d9fbad9a61b109db1ca1dc77ef61ba",
".git/objects/e5/1f40ec6ec99469c753903121a4f55c9452af43": "1e15d8fc0da07a2dd2ff0c11a1fbd3e0",
".git/objects/e5/a6f9ed32b59f3ffb4256463d9e4db790ab8d42": "532474a1827e12e3ca2c9ee491d22fd8",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "f58c80989c9703aefdcc59da2fcd361c",
".git/objects/61/f3bd1fc504c3b78271416d8cfd14faa1dae2b4": "32a5bb441d2eb10d390869a03fd625ef",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "0ce5312758d11c7a2e7d67fcd9c7a64a",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6a1f87ff883c041ec2478b3fcae78a62",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "0df73334fe8b134242989a3e02ba4ee0",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "f4e2750dcd2fdd9b568a190d3f85884f",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "bd1e62ee0a64a68499c6e73b1fcf6add",
".git/objects/f9/49594fd322681f82063aeeb7091d4917fe2a94": "742642718797ad02bc9813a16b72e7b9",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "e05303a0c8bda0f31bc093a52f03e09a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/8a/48c14e786851b62bafc14d85d8e01d42577f31": "e50fa1b65aad8c0217430be5c588d34c",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "21670a298378b5148e4068961b55b73c",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "304f253b49697a65829351d922d27006",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "22d1c7a12146f4037f085f38d7b81215",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "50fe0ff1feb293df89a81706d9d672b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/4b/ba6ba852e46a2a8c5d7bb23ca5fb026f27260f": "dbcfd2977d938ed04e44a6e29c30a509",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "8539aeacea68e887eaf127afe91d5594",
".git/objects/e9/7dabc7028e16c6d9ec74f1e2fb677a93ba81b5": "5d680d3f465482cee24af2d1123bf478",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "92dbb2f7633d333adf36105bd2c77a3f",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "27117d3fa9d7dfb74ce8cf52e8af1cff",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f69ebd306ad55b1ab83c1a398926d206",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "ebe81e2d4b23e049c31dca746dd7dd6b",
".git/objects/6d/710776e121aa036ea6afd20018a88771af706b": "0cf52ca4fab2c735b9d1d95a91879188",
".git/objects/6d/ae619b52314faeb0fec6961b60dee4c7349322": "11fbfb0bef7357300d2175008b89f391",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "46473a44000d9f1072077d53102152c5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "ad40d1b207f6b747a8e1bd00e0083b8d",
".git/objects/bb/819c10b83956800d627162fdf7a62069708511": "e77cf9dbde3f2ae1d124e79300ce5a31",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "63fe3a872c4c4ddf197753437af87ed5",
".git/objects/02/6b4e8a6a263f9ae418830bc1d0434e11ff0318": "eb6d2bf00dee6defec4f35a4b8b70b7d",
".git/objects/c0/a687c288147aee668ea7b77ede7b5f6c6baeb7": "9176bd4b4185a9bbc78ed7c933cb162f",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "07b301f333d432eb5d8e8b843f5a9aac",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "38ce01c7c82a6e4898dcae1eb6ffbe1f",
".git/objects/7c/56964006274498b0edaa77763cdd72c6d42b6a": "f99f1d3edb9ddf1f848976e659f90d18",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "7273055723a7b49cd16541397909af44",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "1d4f4f2581fcd55748aa71b58205ade3",
".git/objects/66/db9dbd51124b2f54a67d5f101ccb47a4f29454": "4d589a7b0597ffbca88c6a66a347218c",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "0ac43947e5edd71c13fbb5db027ea7b1",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "d3a697639cd3725ffd177c7f5d6ac8c7",
".git/objects/a5/f89489f8a35f45c3412dc4c70c6763819ff800": "96f9920b777e7aef043b17a5bfc49996",
".git/objects/94/29b254dbe57b26ca74e4c9271361a67ecc7f5b": "e92133e51a335b9b2e5cb94849938211",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "3d981b853be317e539d0161cdebbb63c",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2192a7ce502e19fb5ec810808057c844",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "eb0b0585fc02956e0a53b94c4bf680e7",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "2e9448604b1f9aa46257ad49a638430c",
".git/objects/79/c113f9b50178eefaedb999950fa206eaf6d645": "559c4dd86a6ca4a710feeb8a283c9361",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/4f/0fcdb10fa110014b353b9dce25dee84669db80": "73aa3f12c07afd3063638e54dbb8a358",
".git/objects/bc/98611c8543ae95c202f27ebf60baeca5b533d8": "1c001cb7b49c3c5091b10e3fde485e59",
".git/objects/bc/49161db0d7903f3de6dd49e9959e9d012b5179": "d479ba46c02fe6c290231e7928f50a47",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "2300582cfbedea904bb10fa0ad84dbb3",
".git/objects/f4/f6dbdbfcfdc9ea12d45197049e9dabcf6850e3": "53e9b7a63d471fc2d8d4e6af3d43e8e0",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "608b8dd7b331693634d618d9a8b2e828",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/65/e088fa5dbcbd10117e4719e99350f54ab56074": "bc857487da392ef87aace5f273ae3530",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/e7/ae2a7f503bdb102290766ddff2ea4bcccdfb22": "232ee34c45085873e63f74ca9d5ad2ef",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "0e6c0916c506eddd100a64d5fb52009e",
".git/objects/e7/ca2dcf91f012efb393ef7c1287669fb71b536d": "a29a6dd4f2da8e5dde1cfbde689ce8d0",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "8d291e8ea1d8b30e01acb9b032c2d4af",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "d8e86957b11fdd7eb1a84ba25b8b7d47",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/refs/remotes/origin/main": "d0d1f9e2bb988edef73e2265b1696fab",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "d0d1f9e2bb988edef73e2265b1696fab",
".git/FETCH_HEAD": "2e47d4e7d2247f3c55182a8660369639",
".git/config": "f0b7bb6d9ae56243de2e8100bc9ccf03",
".git/COMMIT_EDITMSG": "6bf5a72dc40545cfcbbd6b349a6f4523",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-receive.sample": "4fc00e10feb6079e3c3db1707d843e53",
".git/hooks/pre-commit.sample": "bd6511d9fe75781283d5f66ac173e66a",
".git/hooks/pre-rebase.sample": "d856108928edc616c38352b2ff745e54",
".git/hooks/update.sample": "552ebfc3f6ea53cfc7b93be1d482c571",
".git/hooks/push-to-checkout.sample": "2efa83b1403a75cfe2fc78ddd7d4e2d2",
".git/hooks/applypatch-msg.sample": "ae33791d2337396e06e2faedd3d29559",
".git/hooks/pre-push.sample": "a319e26e33dccef414e2db503e7fe8a9",
".git/hooks/commit-msg.sample": "bc6799638f8226f3e4c128710e91b1a1",
".git/hooks/pre-merge-commit.sample": "bd4b752e00896166857353d0ef70a028",
".git/hooks/fsmonitor-watchman.sample": "3b53b2581b1f56abfa2e6fff8bca6cdb",
".git/hooks/post-update.sample": "ef1a72820e922b078176bf793e9de101",
".git/hooks/pre-applypatch.sample": "16b4565cd2da5084223a093e9a163c39",
".git/hooks/prepare-commit-msg.sample": "053ca2083791c5b026e94d1e43ddbf45",
".git/hooks/sendemail-validate.sample": "6e21734b1af92899c83c57963549b723",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/refs/remotes/origin/main": "7ba6dc7434a132d338402400308fc021",
".git/logs/refs/remotes/origin/HEAD": "0e8c563d4e75961de7421be09b20d488",
".git/logs/refs/heads/main": "c5c41ea7127ae3fbe915fa0e78078ea7",
".git/logs/HEAD": "a280b9d9dffdb06d9e096d4fcc8da19c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"index.html": "d13894494a3e8598baffa0d719879d13",
"/": "d13894494a3e8598baffa0d719879d13",
"main.dart.js": "566ec01ecff69661ea973ee167080437",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "3449c7077b2840834dbd0b7069a20e46",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_bootstrap.js": "10f30b88d7916dae2fa4d1272650a67a",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"version.json": "520244b4ac739a502108e9e7b321a568",
"manifest.json": "4d3b3afc4d71d64476f0d03f7185be71"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
