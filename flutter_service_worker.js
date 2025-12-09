'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/index": "37d00cfca63847df24b7f8f6246c4870",
".git/objects/33/78c7cb322db11f70e2ab57ef2522e0e5b178e3": "4ced1d6af5743cb8b48388adf21c25be",
".git/objects/05/fadf988edd03771b47deec822c3ff3b3767df6": "8cba07e5d9bedecd04fa326d6c57e9fd",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "131eb29f9c2e892454609edcf3c20f9e",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "7f1ceb3657f86b0eff46fd5e62771f5e",
".git/objects/19/e00eba89858779f08527875ce830da48cc833c": "d8395c749da8834cee9f8c3831ebc042",
".git/objects/19/fe4a6979a7de6c10d67e05c2db324d125c24ce": "e5542f545b64fc222222c76e66b3bac0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "04788a96780a7468a4b6f16f80c9e3b9",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "66253b19cd251a8eb6ccfe6c17acc72e",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "e8de149a87cdbffa6fe2e2cdd36fdf68",
".git/objects/5e/f4c2e5e7c2f5eeb695cb4f61d468b6c70f9450": "4cc1a120f247d1c4d431923b40b02d11",
".git/objects/c3/63bfd9865a742366f8b296ac51dd7b63c7691c": "97057e64bcf2bcb7beea8b5f3afc7852",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "31299a304c14aab94382bc5c25340899",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "206dcac9a8a50fd5a0b614c1afdb7b98",
".git/objects/8c/f10c995780f25aa0c1aeaa73367d0253174fc8": "ef07abafd254c5bc1a7894d009815441",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "e62ccebd270b4fd776004bbe4d5d8eea",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "07e81c3cddd0d7ab9ecbc1e383a2ae98",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "9a392b8216e7e65f34b3f2d3f5dcf603",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "923fef021501d9a9e19d67300a51b36d",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "d6a804be027ef70ebd1314aa467e3cca",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "2fb7c69169b24c3f5eecfe793e6dca2d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "aa248fbf7bb1d394559bfcb1162b8075",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e5/1f40ec6ec99469c753903121a4f55c9452af43": "1e15d8fc0da07a2dd2ff0c11a1fbd3e0",
".git/objects/7e/58aded3eeda829192ae3d9a5c60c84978b1c3c": "2afda40cc900f8a7f2abe5a397cc553e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6a1f87ff883c041ec2478b3fcae78a62",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/8a/48c14e786851b62bafc14d85d8e01d42577f31": "e50fa1b65aad8c0217430be5c588d34c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/f4/8349a992b93916232720a51ffc1324c3dab23a": "068281d8f7b4a51df7918cd190389310",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a6/b5f43f4903b364b2077c617e7895058a731101": "f55d501675bc1cadc6b1b959615498d8",
".git/refs/remotes/origin/main": "13cc8352ec01e63f416d025f3bcfca54",
".git/refs/heads/main": "13cc8352ec01e63f416d025f3bcfca54",
".git/config": "6e965e14331b89dcc3a8895d19d76c52",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
".git/logs/refs/remotes/origin/main": "ad72ec1affa5ec33752597d5605a72f7",
".git/logs/refs/heads/main": "44c32b14a91e4fa6756e09fec2f92bd8",
".git/logs/HEAD": "63f66457caf2b79180ddbda96b3da864",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"index.html": "85b6f73a01a8a2cd13ac3898d533037f",
"/": "85b6f73a01a8a2cd13ac3898d533037f",
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
"flutter_bootstrap.js": "58f6dad870ac8798bb93203acb56fc1b",
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
